import { create } from "zustand";

export const stepStore = create((set) => ({
  step: 1,
  nextStep: () => set((state) => ({ step: state.step + 1 })),
  prevStep: () => set((state) => ({ step: state.step - 1 })),
  resetStep: () => set({ step: 1 }),
}));
