import { CircleButton } from "@/src/components/common/CircleButton";
import { useQuestsStore } from "@/src/store";

export const AddTestTaskButton = () => {
  const addTask = useQuestsStore((state) => state.addTask);

  const handleCreateTestQuest = () => {
    addTask({
      title: "Сделать отклики на вакансии",
      description:
        "Сделать отклики на вакансии на hh, rabotaru, super job, avito, telegram, LinkedIn, Хабр карьера. Сделать отклики на вакансии на hh, rabotaru, super job, avito, telegram, LinkedIn, Хабр карьера." +
        "Сделать отклики на вакансии на hh, rabotaru, super job, avito, telegram, LinkedIn, Хабр карьера.",
      checked: false,
    });
  };

  return <CircleButton onClick={handleCreateTestQuest} icon="plus" />;
};
