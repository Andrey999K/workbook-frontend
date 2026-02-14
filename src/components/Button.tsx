import { ReactNode } from "react";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
};

export const Button = ({ onClick, children }: ButtonProps) => {
  return (
    <button
      className="w-full bg-[#34C759] text-[#0F0E2D] font-bold rounded-lg cursor-pointer"
      onClick={onClick}
    >
      {children}
    </button>
  );
};
