import { Icon } from "@/src/components/Icon";

type CircleButtonProps = {
  onClick?: () => void;
  icon?: string;
};

export const CircleButton = ({ onClick, icon }: CircleButtonProps) => {
  return (
    <button
      className="relative w-[56px] h-[56px] rounded-full flex items-center justify-center text-white overflow-hidden text-white cursor-pointer"
      onClick={onClick}
    >
      <div className="absolute bg-[#D9D9D9] opacity-10 w-full h-full"></div>
      {icon && <Icon name={icon} width={24} height={24} />}
    </button>
  );
};
