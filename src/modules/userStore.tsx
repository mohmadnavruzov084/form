import { create } from "zustand";
import type { UserFormData } from "./userSchema";
interface UserState {
  userData: UserFormData | null; // ← используем импортированный тип
  setUser: (data: UserFormData | null) => void;
  clearUser: () => void;
}

export const useUserDataStore = create<UserState>((set) => ({
  userData: null,
  setUser: (data) => set({ userData: data }),
  clearUser: () => set({ userData: null }),
}));
