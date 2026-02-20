"use client";

import { TaskRowType } from "@/src/types/TaskRow";
import { useQuestsStore, useUserStore } from "../../store";
import { useState } from "react";
import { FormQuest } from "@/src/components/UI/FormQuest";

type TaskRowProps = {
  data: TaskRowType;
};

export const TaskRow = ({ data }: TaskRowProps) => {
  const removeTask = useQuestsStore((state) => state.removeTask);
  const updateTask = useQuestsStore((state) => state.updateTask);
  const addExp = useUserStore((state) => state.addExp);
  const [openWindow, setOpenWindow] = useState(false);

  const handleEditTask = () => {
    setOpenWindow(true);
  };

  const handleCloseWindow = () => {
    setOpenWindow(false);
  };

  const handleCheckedTask = () => {
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
      <div className="p-3 bg-[#232E48] rounded-sm flex gap-2">
        <label className="group flex cursor-pointer">
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
          className="-my-[6px] cursor-pointer w-full"
          onClick={handleEditTask}
        >
          <h3 className="font-bold text-[18px]">{data.title}</h3>
          <p>{data.description}</p>
        </div>
      </div>
    </>
  );
};
