import Image from "next/image";
import { ProgressBar } from "@/app/components/ProgressBar";

export default function Page() {
  return (
    <div className="w-full max-w-sm mx-auto border-gray-500 border-solid border-2 min-h-screen p-4">
      <div className="flex items-center gap-2">
        <div className="w-full max-w-12">
          <div className="relative w-12 h-12 bg-orange-500 rounded-full overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="avatar"
              fill
              className="object-cover"
            />
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center gap-2 justify-between w-full mb-[5px] font-bold">
            <span>Андрей</span>
            <span>1 уровень</span>
          </div>
          <ProgressBar percent={80} />
        </div>
      </div>
    </div>
  );
}
