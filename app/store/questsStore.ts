import { create } from "zustand";
import { TaskRowType } from "@/app/types/TaskRow";

interface QuestsState {
  tasks: TaskRowType[];
  addTask: (task: Omit<TaskRowType, "id">) => void;
  removeTask: (id: number) => void;
  toggleTask: (id: number) => void;
  updateTask: (id: number, updates: Partial<TaskRowType>) => void;
}

const initialTasks: TaskRowType[] = [
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
    checked: false,
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

export const useQuestsStore = create<QuestsState>((set) => ({
  tasks: initialTasks,

  addTask: (task) =>
    set((state) => {
      const tasksMass = state.tasks.sort(
        (a: TaskRowType, b: TaskRowType) => a.id - b.id
      );
      const lastElemId = tasksMass[tasksMass.length - 1].id;
      return { tasks: [...state.tasks, { id: lastElemId + 1, ...task }] };
    }),

  removeTask: (id) =>
    set((state) => ({ tasks: state.tasks.filter((t) => t.id !== id) })),

  toggleTask: (id) =>
    set((state) => ({
      tasks: state.tasks.map((t) =>
        t.id === id ? { ...t, checked: !t.checked } : t
      ),
    })),

  updateTask: (id, updates) =>
    set((state) => ({
      tasks: state.tasks.map((t) => (t.id === id ? { ...t, ...updates } : t)),
    })),
}));
