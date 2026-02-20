type LoaderProps = {
  type?:
    | "border"
    | "borderTwo"
    | "pulse"
    | "bounce"
    | "gradient"
    | "borderDark";
};

const spinnerStyles = {
  border: (
    <div className="w-8 h-8 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
  ),
  borderTwo: (
    <div className="relative w-8 h-8">
      <div className="absolute w-full h-full border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      <div className="absolute w-full h-full border-4 border-blue-300 border-b-transparent rounded-full animate-spin animation-delay-150"></div>
    </div>
  ),
  pulse: <div className="w-8 h-8 bg-blue-500 rounded-full animate-ping"></div>,
  bounce: (
    <div className="flex gap-1">
      <div className="w-2 h-2 bg-[#D9D9D9]/40 rounded-full animate-bounce"></div>
      <div className="w-2 h-2 bg-[#D9D9D9]/40 rounded-full animate-bounce [animation-delay:0.2s]"></div>
      <div className="w-2 h-2 bg-[#D9D9D9]/40 rounded-full animate-bounce [animation-delay:0.4s]"></div>
    </div>
  ),
  gradient: (
    <div className="w-8 h-8 rounded-full border-4 border-transparent border-t-blue-500 border-r-blue-400 border-b-blue-300 animate-spin"></div>
  ),
  borderDark: (
    <div className="w-8 h-8 border-4 border-gray-600 border-t-[#34C759] rounded-full animate-spin"></div>
  ),
};

export const Loader = ({ type }: LoaderProps) => {
  const renderSpinner = () => {
    return spinnerStyles[type || "bounce"];
  };
  return (
    <div className="w-full flex items-center justify-center gap-3 h-20">
      {renderSpinner()}
    </div>
  );
};
