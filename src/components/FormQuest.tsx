import { Input } from "@/src/components/Input";
import { Textarea } from "@/src/components/Textarea";
import { Icon } from "@/src/components/Icon";
import { ChangeEvent, useState } from "react";
import { TaskRowType } from "@/src/types/TaskRow";

type TaskInput = Omit<TaskRowType, "id">;

type FormQuestProps = {
  title: string;
  buttonText: string;
  data?: TaskInput;
  onSubmit: (task: TaskInput) => void;
  onCloseWindow: () => void;
};

export const FormQuest = ({
  title,
  buttonText,
  data = {
    title: "",
    description: "",
    checked: false,
  },
  onSubmit,
  onCloseWindow,
}: FormQuestProps) => {
  const [task, setTask] = useState<Omit<TaskRowType, "id">>(data);

  const handleInputName = (e: ChangeEvent<HTMLInputElement>) => {
    setTask((prevState) => ({ ...prevState, title: e.target.value }));
  };

  const handleInputDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setTask((prevState) => ({ ...prevState, description: e.target.value }));
  };

  const handleSubmit = () => {
    if (!task.title.trim() || !task.description.trim()) return;
    onSubmit(task);
    onCloseWindow();
  };

  return (
    <div className="fixed left-4 right-4 top-16 bottom-4 rounded-2xl p-5 bg-[#2B3F68] text-white">
      <div className="flex flex-col items-center gap-6 h-full">
        <h3 className="font-bold text-[32px]">{title}</h3>
        <div className="flex flex-col gap-5 w-full">
          <Input label="Название" onChange={handleInputName} />
          <Textarea label="Описание" onChange={handleInputDescription} />
        </div>
        <div className="flex gap-2 w-full mt-auto">
          <button
            className="w-full bg-[#34C759] text-[#0F0E2D] font-bold rounded-lg cursor-pointer"
            onClick={handleSubmit}
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
