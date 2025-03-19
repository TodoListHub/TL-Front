import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "",
  password: "",
  repeatPassword: "",
  email: "",
  
  setUsername: (username) => set({ username }),

  setPassword: (password) => set({ password }),

  setrepeatPassword: (repeatPassword) => set({ repeatPassword }),

  setEmail: (email) => set({ email }),

  reset: () => set({ username: "", password: "" , repeatPassword: "", email: "" }),

  
}));

export default useAuthStore;
