import { create } from "zustand";

export const useUseStore = create((set) => ({
  user: null,
  setUser: (data) => set({ userData :data}),
  ClearUser: () => set({ userData: null }),
}));
