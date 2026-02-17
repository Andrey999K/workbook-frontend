import { Wrapper } from "@/src/components/Wrapper";
import Image from "next/image";
import { ProgressBar } from "@/src/components/ProgressBar";
import { CircleButton } from "@/src/components/common/CircleButton";

export default function ProfilePage() {
  return (
    <Wrapper>
      <div className="flex flex-col items-center justify-between py-5 min-h-screen -my-4">
        <div className="flex flex-col gap-2 items-center">
          <div className="relative block w-[168px] h-[168px] bg-orange-500 rounded-full overflow-hidden p-3">
            <Image
              src="/avatar.jpg"
              alt="avatar"
              fill
              className="object-cover max-w-full max-h-full rounded-full"
            />
          </div>
          <h3 className="font-bold text-5xl">Андрей</h3>
          <span className="font-bold text-base mt-3">1 уровень</span>
        </div>
        <div className="w-full flex flex-col">
          <span className="font-bold">740 опыта</span>
          <ProgressBar size="large" percent={60} />
          <span className="ml-auto text-white/30 font-bold">1000 опыта</span>
        </div>
        <div className="flex items-center gap-4">
          <CircleButton icon="list" />
          <CircleButton icon="settings" />
        </div>
      </div>
    </Wrapper>
  );
}
