"use client";

import { HeaderQuests } from "@/src/components/UI/HeaderQuests";
import { TaskRow } from "@/src/components/UI/TaskRow";
import { AddQuestButton } from "@/src/components/UI/AddQuestButton";
import { useQuestsStore } from "../../store";
import { useHydration } from "@/src/hooks/useHydration";
import { Loader } from "@/src/components/common/Loader";
import { Wrapper } from "@/src/components/common/Wrapper";

export default function QuestsPage() {
  const tasks = useQuestsStore((state) => state.tasks);
  const hasHydrated = useHydration();

  const renderQuests = () => {
    if (!hasHydrated) {
      return <Loader />;
    }

    if (tasks.length !== 0) {
      return tasks.map((task) => <TaskRow key={task.id} data={task} />);
    }

    return <h3>Квестов нет</h3>;
  };

  return (
    <Wrapper>
      <HeaderQuests />
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-gray-500">Мои Квесты</h2>
        <div className="mt-4 flex flex-col gap-3">{renderQuests()}</div>
      </div>
      <AddQuestButton />
    </Wrapper>
  );
}
