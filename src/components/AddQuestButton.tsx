"use client";

import { Icon } from "@/src/components/Icon";
import { useState } from "react";
import { useQuestsStore } from "../store";
import { FormQuest } from "@/src/components/FormQuest";
import { TaskRowType } from "@/src/types/TaskRow";

export const AddQuestButton = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const addTask = useQuestsStore((state) => state.addTask);

  const handleOpenWindow = () => {
    setOpenWindow(true);
  };

  const handleCloseWindow = () => {
    setOpenWindow(false);
  };

  const handleCreateQuest = (task: Omit<TaskRowType, "id">) => {
    addTask(task);
    setOpenWindow(false);
  };

  if (!openWindow) {
    return (
      <button
        className="
        fixed bottom-4 right-4 w-[56px] h-[56px] rounded-full flex items-center justify-center text-white
        overflow-hidden text-white cursor-pointer
      "
        onClick={handleOpenWindow}
      >
        <div className="absolute bg-[#D9D9D9] opacity-10 w-full h-full"></div>
        <Icon name="plus" />
      </button>
    );
  }

  return (
    <FormQuest
      title="Добавить квест"
      buttonText="Добавить квест"
      onSubmit={handleCreateQuest}
      onCloseWindow={handleCloseWindow}
    />
  );
};
