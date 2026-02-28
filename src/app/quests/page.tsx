"use client";

import { HeaderQuests } from "@/src/components/UI/HeaderQuests";
import { TaskRow } from "@/src/components/UI/TaskRow";
import { AddQuestButton } from "@/src/components/UI/AddQuestButton";
import { useQuestsStore } from "../../store";
import { useHydration } from "@/src/hooks/useHydration";
import { Loader } from "@/src/components/common/Loader";
import { Wrapper } from "@/src/components/common/Wrapper";
import { AddTestTaskButton } from "@/src/components/UI/AddTestTaskButton";
import { AnimatePresence } from "motion/react";

export default function QuestsPage() {
  const tasks = useQuestsStore((state) => state.tasks);
  const hasHydrated = useHydration();

  const renderQuests = () => {
    if (!hasHydrated) {
      return <Loader />;
    }

    if (tasks.length !== 0) {
      return (
        <AnimatePresence mode="popLayout">
          {tasks.map((task) => (
            <TaskRow key={task.id} data={task} />
          ))}
        </AnimatePresence>
      );
    }

    return <h3>Квестов нет</h3>;
  };

  return (
    <Wrapper>
      <HeaderQuests />
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-gray-500">Мои Квесты</h2>
        <div className="mt-4 flex flex-col">{renderQuests()}</div>
        <div className="mt-2 flex justify-end">
          <AddTestTaskButton />
        </div>
      </div>
      <AddQuestButton />
    </Wrapper>
  );
}
