import { create } from "zustand";

interface UserState {
  exp: number;
  addExp: (countExp: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  exp: 800,
  addExp: (countExp) => set((state) => ({ exp: state.exp + countExp })),
}));
