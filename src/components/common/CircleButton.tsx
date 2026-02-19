import { Icon } from "@/src/components/Icon";
import Link from "next/link";

type CircleButtonProps = {
  onClick?: () => void;
  icon?: string;
  href?: string;
};

export const CircleButton = ({ onClick, icon, href }: CircleButtonProps) => {
  const renderChildren = () => {
    const content = (
      <>
        <div className="absolute bg-[#D9D9D9] opacity-10 w-full h-full" />
        {icon && <Icon name={icon} width={24} height={24} />}
      </>
    );
    if (href) {
      return (
        <Link
          href={href}
          className="w-full h-full block items-center justify-center flex"
        >
          {content}
        </Link>
      );
    }
    return content;
  };

  return (
    <button
      className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center text-white overflow-hidden cursor-pointer"
      onClick={href ? undefined : onClick}
    >
      {renderChildren()}
    </button>
  );
};
