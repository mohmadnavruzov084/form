import { create } from "zustand";

interface UserState {
  userData: {
    userFullName: string;
    email: string;
    phoneNumber: string;
    company: string;
    address: string;
  } | null;
  setUser: (data: UserState["userData"]) => void;
  clearUser: () => void;
}

export const useUseStore = create<UserState>((set) => ({
  userData: null, 
  setUser: (data) => set({ userData: data }),
  clearUser: () => set({ userData: null }), 
}));
