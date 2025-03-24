import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "",
  password: "",
  repeatPassword: "",
  email: "",
  addsection : false,
  newTaskText : "",
  
  setUsername: (username) => set({ username }),

  setPassword: (password) => set({ password }),

  setrepeatPassword: (repeatPassword) => set({ repeatPassword }),

  setEmail: (email) => set({ email }),

  setAddsection : (addsection)=> set({addsection}),

  setNewTaskText : (newTaskText)=> set({newTaskText}),

  reset: () => set({ username: "", password: "" , repeatPassword: "", email: "" }),
  
  resetTaskText : ()=> set({newTaskText:""})

  
}));

export default useAuthStore;
