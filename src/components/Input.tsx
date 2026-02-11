import { InputProps } from "@/src/types/InputProps";

export const Input = ({
  label,
  placeholder,
  onChange,
  value,
}: InputProps<HTMLInputElement>) => {
  return (
    <label className="w-full flex flex-col gap-2">
      {!!label && <span>Название квеста</span>}
      <input
        type="text"
        defaultValue={value}
        className="border-[1px] border-solid border-[#EFEFEF]/30 w-full py-1 px-2 rounded-xs outline-none"
        placeholder={placeholder || label || ""}
        onChange={onChange}
      />
    </label>
  );
};
