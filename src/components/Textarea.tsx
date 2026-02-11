import { InputProps } from "@/src/types/InputProps";

export const Textarea = ({
  label,
  placeholder,
  onChange,
  value,
}: InputProps<HTMLTextAreaElement>) => {
  return (
    <div>
      <textarea
        className="border-[1px] border-solid border-[#EFEFEF]/30 w-full py-1 px-2 rounded-xs outline-none"
        defaultValue={value}
        name=""
        id=""
        cols={30}
        rows={10}
        placeholder={placeholder || label || ""}
        onChange={onChange}
      ></textarea>
    </div>
  );
};
