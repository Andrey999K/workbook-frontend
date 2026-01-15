import { HeaderQuests } from "@/app/components/HeaderQuests";
import { TaskRow } from "@/app/components/TaskRow";
import { TaskRowType } from "@/app/types/TaskRow";

export default function Page() {
  const tasks: TaskRowType[] = [
    {
      id: 1,
      title: "Сделать дизайн",
      description: "Зафиналить MVP",
      checked: false,
    },
    {
      id: 2,
      title: "Сделать дизайн",
      description: "Зафиналить MVP",
      checked: true,
    },
    {
      id: 3,
      title: "Сделать дизайн",
      description: "Зафиналить MVP",
      checked: false,
    },
    {
      id: 4,
      title: "Сделать дизайн",
      description: "Зафиналить MVP",
      checked: false,
    },
  ];

  return (
    <div className="w-full max-w-sm mx-auto min-h-screen p-4">
      <HeaderQuests />
      <div className="mt-5">
        <h2 className="font-bold text-2xl text-gray-500">Мои Квесты</h2>
        <div className="mt-4 flex flex-col gap-3">
          {tasks.map((task) => (
            <TaskRow key={task.id} data={task} />
          ))}
        </div>
      </div>
    </div>
  );
}
