import { Input } from "@/src/components/Input";
import { Textarea } from "@/src/components/Textarea";
import { Icon } from "@/src/components/Icon";
import { ChangeEvent } from "react";

type FormQuestProps = {
  title: string;
  buttonText: string;
  onInputName: (e: ChangeEvent<HTMLInputElement>) => void;
  onInputDescription: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onCreateQuest: () => void;
  onCloseWindow: () => void;
};

export const FormQuest = ({
  title,
  buttonText,
  onInputName,
  onInputDescription,
  onCreateQuest,
  onCloseWindow,
}: FormQuestProps) => {
  return (
    <div className="fixed left-4 right-4 top-16 bottom-4 rounded-2xl p-5 bg-[#2B3F68] text-white">
      <div className="flex flex-col items-center gap-6 h-full">
        <h3 className="font-bold text-[32px]">{title}</h3>
        <div className="flex flex-col gap-5 w-full">
          <Input label="Название" onChange={onInputName} />
          <Textarea label="Описание" onChange={onInputDescription} />
        </div>
        <div className="flex gap-2 w-full mt-auto">
          <button
            className="w-full bg-[#34C759] text-[#0F0E2D] font-bold rounded-lg cursor-pointer"
            onClick={onCreateQuest}
          >
            {buttonText}
          </button>
          <button
            className="w-full max-w-[56px] h-[56px] bg-[#D9D9D9]/10 flex items-center justify-center rounded-lg
          cursor-pointer"
            onClick={onCloseWindow}
          >
            <Icon name="cross" width="14" height="14" />
          </button>
        </div>
      </div>
    </div>
  );
};
