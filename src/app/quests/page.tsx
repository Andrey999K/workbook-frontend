"use client";

import { HeaderQuests } from "@/src/components/HeaderQuests";
import { TaskRow } from "@/src/components/TaskRow";
import { AddQuestButton } from "@/src/components/AddQuestButton";
import { useQuestsStore } from "../../store";

export default function QuestsPage() {
  const tasks = useQuestsStore((state) => state.tasks);

  return (
    <div className="w-full max-w-sm mx-auto min-h-screen p-4">
      <HeaderQuests />
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-gray-500">Мои Квесты</h2>
        <div className="mt-4 flex flex-col gap-3">
          {tasks.length !== 0 ? (
            tasks.map((task) => <TaskRow key={task.id} data={task} />)
          ) : (
            <h3>Квестов нет</h3>
          )}
        </div>
      </div>
      <AddQuestButton />
    </div>
  );
}
