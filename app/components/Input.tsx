type InputProps = {
  label?: string;
  placeholder?: string;
};

export const Input = ({ label, placeholder }: InputProps) => {
  return (
    <label className="w-full flex flex-col gap-2">
      {!!label && <span>Название квеста</span>}
      <input
        type="text"
        className="border-[1px] border-solid border-[#EFEFEF]/30 w-full py-1 px-2 rounded-xs outline-none"
        placeholder={placeholder || label || ""}
      />
    </label>
  );
};
