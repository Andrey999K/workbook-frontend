import { ReactNode } from "react";

type WrapperProps = {
  children: ReactNode;
};

export const Wrapper = ({ children }: WrapperProps) => {
  return (
    <div className="w-full max-w-sm md:max-w-screen-sm lg:max-w-screen-md xl:max-w-screen-lg mx-auto min-h-screen p-4">
      {children}
    </div>
  );
};
