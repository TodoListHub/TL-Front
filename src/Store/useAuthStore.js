import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "",
  password: "",
  repeatPassword: "",
  email: "",
  addsection : false,
  newTaskText : "",
  totalCount : 0,
  truecCount : 0,
  falseCount : 0,
  
  setUsername: (username) => set({ username }),

  setPassword: (password) => set({ password }),

  setrepeatPassword: (repeatPassword) => set({ repeatPassword }),

  setEmail: (email) => set({ email }),

  setAddsection : (addsection)=> set({addsection}),

  setNewTaskText : (newTaskText)=> set({newTaskText}),

  increaseTrueTask : (truecCount)=>({truecCount} + 1 , {totalCount} + 1),

  increaseTrueTask : (falseCount)=>({falseCount} + 1 )

  reset: () => set({ username: "", password: "" , repeatPassword: "", email: "" }),
  
  resetTaskText : ()=> set({newTaskText:""})

  
}));

export default useAuthStore;
