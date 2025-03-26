import { create } from "zustand";

const useAuthStore = create((set) => ({
  username: "",
  password: "",
  repeatPassword: "",
  email: "",
  addsection : false,
  newTaskText : "",
  totalCount : 0,
  trueCount : 0,
  falseCount : 0,
  
  setUsername: (username) => set({ username }),

  setPassword: (password) => set({ password }),

  setrepeatPassword: (repeatPassword) => set({ repeatPassword }),

  setEmail: (email) => set({ email }),

  setAddsection : (addsection)=> set({addsection}),

  setNewTaskText : (newTaskText)=> set({newTaskText}),

  increaseTrueTask : (trueCount)=>set({trueCount} + 1 ),

  increaseFalseTask : (falseCount)=>set({falseCount} + 1 ),

  increaseTotalTask : (totalCount)=>set({totalCount} + 1),


  reset: () => set({ username: "", password: "" , repeatPassword: "", email: "" }),
  
  resetTaskText : ()=> set({newTaskText:""})

  
}));

export default useAuthStore;
