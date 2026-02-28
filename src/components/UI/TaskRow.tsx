"use client";

import { TaskRowType } from "@/src/types/TaskRow";
import { useQuestsStore, useUserStore } from "../../store";
import { useState } from "react";
import { FormQuest } from "@/src/components/UI/FormQuest";
import { AnimatePresence, motion } from "motion/react";

type TaskRowProps = {
  data: TaskRowType;
};

export const TaskRow = ({ data }: TaskRowProps) => {
  const removeTask = useQuestsStore((state) => state.removeTask);
  const updateTask = useQuestsStore((state) => state.updateTask);
  const addExp = useUserStore((state) => state.addExp);
  const [openWindow, setOpenWindow] = useState(false);
  const [showXp, setShowXp] = useState(false);

  const handleEditTask = () => {
    setOpenWindow(true);
  };

  const handleCloseWindow = () => {
    setOpenWindow(false);
  };

  const handleCheckedTask = () => {
    setShowXp(true);
    removeTask(data.id);
    addExp(120);
  };

  const handleCreateQuest = (task: Omit<TaskRowType, "id">) => {
    updateTask(data.id, task);
    setOpenWindow(false);
  };

  return (
    <>
      {openWindow && (
        <FormQuest
          title="Изменить квест"
          buttonText="Изменить квест"
          data={data}
          onSubmit={handleCreateQuest}
          onCloseWindow={handleCloseWindow}
        />
      )}

      <div className="relative h-0 overflow-visible">
        <AnimatePresence>
          {showXp && (
            <motion.div
              className="absolute -top-4 left-0 right-0 text-center z-50 pointer-events-none"
              initial={{ opacity: 1, y: 0, scale: 1 }}
              animate={{ opacity: 0, y: -50, scale: 0.9 }}
              transition={{ duration: 1, ease: "easeOut" }}
            >
              <span className="text-yellow-300 font-extrabold text-2xl drop-shadow-[0_0_8px_rgba(253,224,71,0.9)]">
                +120 XP
              </span>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      <motion.div
        layout
        initial={{ opacity: 1 }}
        exit={{ opacity: 0, height: 0, marginBottom: 0 }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        style={{ overflow: "hidden", marginBottom: "12px" }}
      >
        <div className="p-3 bg-[#232E48] rounded-sm flex gap-2">
          <label className="group flex cursor-pointer shrink-0">
            <input
              type="checkbox"
              className="sr-only"
              checked={data.checked}
              onChange={handleCheckedTask}
            />
            <div className="w-6 h-6 border-2 border-gray-400 rounded bg-transparent flex items-center justify-center">
              <svg
                className="w-4 h-4 text-white opacity-0 group-has-[:checked]:opacity-100 transition-opacity"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={3}
                  d="M5 13l4 4L19 7"
                />
              </svg>
            </div>
          </label>
          <div
            className="-my-[6px] cursor-pointer w-full min-w-0"
            onClick={handleEditTask}
          >
            <h3 className="font-bold text-[18px] truncate">{data.title}</h3>
            <p className="truncate">{data.description}</p>
          </div>
        </div>
      </motion.div>
    </>
  );
};
