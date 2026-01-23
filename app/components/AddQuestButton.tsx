"use client";

import { Icon } from "@/app/components/Icon";
import { useState } from "react";
import { Input } from "@/app/components/Input";

export const AddQuestButton = () => {
  const [openWindow, setOpenWindow] = useState(false);

  const handleOpenWindow = () => {
    setOpenWindow(true);
  };

  const handleCloseWindow = () => {
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
    <div className="fixed left-4 right-4 top-16 bottom-4 rounded-2xl p-5 bg-[#2B3F68] text-white">
      <div className="flex flex-col items-center gap-6 h-full">
        <h3 className="font-bold text-[32px]">Добавить квест</h3>
        <div className="flex flex-col gap-5 w-full">
          <Input label="Название квеста" />
          <Input label="Описание квеста" />
        </div>
        <div className="flex gap-2 w-full mt-auto">
          <button className="w-full bg-[#34C759] text-[#0F0E2D] font-bold rounded-lg cursor-pointer">
            Добавить квест
          </button>
          <button
            className="w-full max-w-[56px] h-[56px] bg-[#D9D9D9]/10 flex items-center justify-center rounded-lg
          cursor-pointer"
            onClick={handleCloseWindow}
          >
            <Icon name="cross" width="14" height="14" />
          </button>
        </div>
      </div>
    </div>
  );
};
