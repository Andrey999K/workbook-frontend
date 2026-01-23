import { create } from "zustand";

interface UserState {
  exp: number;
  addExp: (countExp: number) => void;
}

export const useUserStore = create<UserState>((set) => ({
  exp: 25000,
  addExp: (countExp) => set((state) => ({ exp: state.exp + countExp })),
}));
