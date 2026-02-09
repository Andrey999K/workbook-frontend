"use client";

import { HeaderQuests } from "@/src/components/HeaderQuests";
import { TaskRow } from "@/src/components/TaskRow";
import { AddQuestButton } from "@/src/components/AddQuestButton";
import { useQuestsStore } from "../../store";
import { useHydration } from "@/src/hooks/useHydration";
import { Loader } from "@/src/components/Loader";

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
    <div className="w-full max-w-sm mx-auto min-h-screen p-4">
      <HeaderQuests />
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-gray-500">Мои Квесты</h2>
        <div className="mt-4 flex flex-col gap-3">{renderQuests()}</div>
      </div>
      <AddQuestButton />
    </div>
  );
}
