import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "",
  password: "",
  repeatPassword: "",
  email: "",
  addsection : false,
  
  setUsername: (username) => set({ username }),

  setPassword: (password) => set({ password }),

  setrepeatPassword: (repeatPassword) => set({ repeatPassword }),

  setEmail: (email) => set({ email }),

  setAddsection : (addsection)=> set({addsection}),

  reset: () => set({ username: "", password: "" , repeatPassword: "", email: "" }),

  
}));

export default useAuthStore;
