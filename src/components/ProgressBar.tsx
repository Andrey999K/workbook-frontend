import { clsx } from "clsx";

type ProgressBarProps = {
  percent: number;
  size?: "small" | "large";
};

export const ProgressBar = ({
  percent = 0,
  size = "small",
}: ProgressBarProps) => {
  const classNames = clsx(
    "bg-[#EFEFEF]",
    size === "small" ? "h-1 rounded-sm" : "h-[18px] rounded-xs"
  );
  const classNamesBorder = clsx(
    "border-solid border-[1px] border-gray-500 p-[2px]",
    size === "small" ? "rounded-sm" : "rounded-xs"
  );
  console.log("size", size);
  return (
    <div className={classNamesBorder}>
      <div style={{ width: `${percent}%` }} className={classNames}></div>
    </div>
  );
};
