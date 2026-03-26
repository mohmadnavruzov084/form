import { create } from "zustand";

const useFormDataStore = create((set) => ({
  // Personal Info
  userFullName: "",
  email: "",
  phoneNumber: "",
  company: "",
  address: "",

  // Services
  selectedService: null,

  // Verification
  verificationMethod: null,

  // Actions
  setPersonalInfo: (data) => set(data),
  setSelectedService: (service) => set({ selectedService: service }),
  setVerificationMethod: (method) => set({ verificationMethod: method }),
  resetForm: () =>
    set({
      userFullName: "",
      email: "",
      phoneNumber: "",
      company: "",
      address: "",
      selectedService: null,
      verificationMethod: null,
    }),
}));

export default useFormDataStore;
