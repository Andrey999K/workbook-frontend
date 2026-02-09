import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

interface UserState {
  exp: number;
  addExp: (countExp: number) => void;
}

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      exp: 0,
      addExp: (countExp) => set((state) => ({ exp: state.exp + countExp })),
    }),
    {
      name: "user-storage", // Ключ в localStorage
      storage: createJSONStorage(() => localStorage), // Используем localStorage
    }
  )
);
