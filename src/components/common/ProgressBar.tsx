"use client";

import { clsx } from "clsx";
import { motion, useAnimation } from "motion/react";
import { useEffect } from "react";

type ProgressBarProps = {
  percent: number;
  size?: "small" | "large";
};

export const ProgressBar = ({
  percent = 0,
  size = "small",
}: ProgressBarProps) => {
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      boxShadow: [
        "0 0 0px 0px rgba(255,255,255,0)",
        "0 0 6px 2px rgba(255,255,255,0.9)",
        "0 0 0px 0px rgba(255,255,255,0)",
      ],
      transition: { duration: 1, ease: "linear" },
    });
  }, [percent]);

  const classNamesBorder = clsx(
    "border-solid border-[1px] border-gray-500 p-[2px]",
    size === "small" ? "rounded-sm" : "rounded-xs"
  );

  const classNamesBar = clsx(
    "bg-[#EFEFEF]",
    size === "small" ? "h-1 rounded-sm" : "h-[18px] rounded-xs"
  );

  return (
    <div className={classNamesBorder}>
      <motion.div
        className={classNamesBar}
        animate={controls}
        style={{ width: `${percent}%`, transition: "width 0.6s ease-out" }}
      />
    </div>
  );
};
