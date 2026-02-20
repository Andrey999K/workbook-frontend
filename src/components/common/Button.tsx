import { ReactNode } from "react";
import { clsx } from "clsx";

type ButtonProps = {
  onClick?: () => void;
  children: ReactNode;
  className?: string;
};

const defaultClasses =
  "w-full bg-[#34C759] text-[#0F0E2D] font-bold rounded-lg cursor-pointer";

export const Button = ({ onClick, children, className }: ButtonProps) => {
  const classNames = clsx(defaultClasses, className);
  return (
    <button className={classNames} onClick={onClick}>
      {children}
    </button>
  );
};
