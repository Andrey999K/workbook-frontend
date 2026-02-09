type ProgressBarProps = {
  percent: number;
};

export const ProgressBar = ({ percent = 0 }: ProgressBarProps) => {
  return (
    <div className="border-solid border-[1px] border-gray-500 p-[2px] rounded-sm">
      <div
        style={{ width: `${percent}%` }}
        className="bg-[#EFEFEF] h-1 rounded-sm"
      ></div>
    </div>
  );
};
