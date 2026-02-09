"use client";

import Image from "next/image";
import { ProgressBar } from "@/src/components/ProgressBar";
import { useUserStore } from "../store";
import { getLevel } from "@/src/utils/getLevel";

export const HeaderQuests = () => {
  const userExp = useUserStore((state) => state.exp);
  const { level, progressLevel } = getLevel(userExp);

  return (
    <div className="flex items-center gap-2">
      <div className="w-full max-w-12">
        <div className="relative w-12 h-12 bg-orange-500 rounded-full overflow-hidden">
          <Image src="/avatar.jpg" alt="avatar" fill className="object-cover" />
        </div>
      </div>
      <div className="w-full">
        <div className="flex items-center gap-2 justify-between w-full mb-[5px] font-bold">
          <span>Андрей</span>
          <span>{level} уровень</span>
        </div>
        <ProgressBar percent={progressLevel} />
      </div>
    </div>
  );
};
