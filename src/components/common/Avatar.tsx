import Image from "next/image";
import { clsx } from "clsx";

type AvatarProps = {
  size?: number;
};

export const Avatar = ({ size }: AvatarProps) => {
  const classNames = clsx(
    "relative block bg-orange-500 rounded-full overflow-hidden",
    size ? `w-[${size}px] h-[${size}px]` : "w-12 h-12"
  );

  const fullSize = size ? size + size / 6 : 56;
  const padding = size ? size / 12 : 4;

  return (
    <div
      style={{
        width: `${fullSize}px`,
        height: `${fullSize}px`,
        padding: `${padding}px`,
      }}
      className="relative"
    >
      <div className="absolute inset-0 w-full h-full">
        <Image src="/avatar-enviroment.svg" alt="avatar enviroment" fill />
      </div>
      <div className="relative w-full h-full rounded-full overflow-hidden">
        <Image
          src="/avatar_real.jpg"
          alt="avatar"
          fill
          className="object-cover w-full h-full"
        />
      </div>
    </div>
  );
};
