"use client";

import { Wrapper } from "@/src/components/common/Wrapper";
import { ProgressBar } from "@/src/components/common/ProgressBar";
import { CircleButton } from "@/src/components/common/CircleButton";
import { useUserStore } from "@/src/store";
import { getLevel } from "@/src/utils/getLevel";
import { Avatar } from "@/src/components/common/Avatar";

export default function ProfilePage() {
  const userExp = useUserStore((state) => state.exp);
  const { level, progressLevel, expForLevel, currentHpLevel } =
    getLevel(userExp);

  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-between py-5 min-h-screen -my-4">
        <div className="flex flex-col gap-2 items-center">
          <Avatar size={144} />
          <h3 className="font-bold text-5xl">Андрей</h3>
          <span className="font-bold text-base mt-3">{level} уровень</span>
        </div>
        <div className="w-full flex flex-col">
          <span className="font-bold">{currentHpLevel} опыта</span>
          <ProgressBar size="large" percent={progressLevel} />
          <span className="ml-auto text-white/30 font-bold">
            {expForLevel} опыта
          </span>
        </div>
        <div className="flex items-center gap-4">
          <CircleButton href={"/quests"} icon="list" />
          <CircleButton href={"/settings"} icon="settings" />
        </div>
      </div>
    </Wrapper>
  );
}
