"use client";

import { useState } from "react";
import { useQuestsStore } from "../../store";
import { FormQuest } from "@/src/components/UI/FormQuest";
import { TaskRowType } from "@/src/types/TaskRow";
import { CircleButton } from "@/src/components/common/CircleButton";

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
      <div className="fixed bottom-4 right-4">
        <CircleButton onClick={handleOpenWindow} icon="plus" />
      </div>
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
