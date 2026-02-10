"use client";

import { Icon } from "@/src/components/Icon";
import { ChangeEvent, useState } from "react";
import { useQuestsStore } from "../store";
import { FormQuest } from "@/src/components/formQuest";

const initialTaskState = {
  title: "",
  description: "",
  checked: false,
};

export const AddQuestButton = () => {
  const [openWindow, setOpenWindow] = useState(false);
  const [newTask, setNewTask] = useState(initialTaskState);
  const addTask = useQuestsStore((state) => state.addTask);

  const handleOpenWindow = () => {
    setOpenWindow(true);
  };

  const handleCloseWindow = () => {
    setOpenWindow(false);
  };

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setNewTask((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleInputDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setNewTask((prevState) => ({ ...prevState, description: e.target.value }));
  };

  const handleCreateQuest = () => {
    if (!newTask.title.trim()) return;

    addTask(newTask);
    setNewTask(initialTaskState); // Очистка формы
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
        <Icon name="plus" width={18} height={18} />
      </button>
    );
  }

  return (
    <FormQuest
      title="Добавить квест"
      buttonText="Добавить квест"
      onInputName={handleInputName}
      onInputDescription={handleInputDescription}
      onCreateQuest={handleCreateQuest}
      onCloseWindow={handleCloseWindow}
    />
  );
};
