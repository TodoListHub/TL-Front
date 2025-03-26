import { create } from "zustand";

// Define an interface for user information and task counts
interface User {
  username: string;
  email: string;
}

interface AuthState {
  user: User;
  totalCount: number;
  trueCount: number;
  falseCount: number;

  setUser: (username: string, email: string) => void;
  setInitialCounts: (total: number, completed: number, pending: number) => void;
  increaseTotalTask: () => void;
  increaseTrueTask: () => void;
  increaseFalseTask: () => void;
  resetCounts: () => void;
}

// Create Zustand Store with TypeScript
const useAuthStore = create<AuthState>((set) => ({
  user: {
    username: "",
    email: "",
  },
  totalCount: 0,
  trueCount: 0,
  falseCount: 0,

  // Set user information
  setUser: (username, email) =>
    set(() => ({
      user: { username, email },
    })),

  // Set initial values for task counts
  setInitialCounts: (total, completed, pending) =>
    set(() => ({
      totalCount: total,
      trueCount: completed,
      falseCount: pending,
    })),

  // Increase total task count
  increaseTotalTask: () =>
    set((state) => ({ totalCount: state.totalCount + 1 })),

  // Increase completed task count
  increaseTrueTask: () =>
    set((state) => ({ trueCount: state.trueCount + 1 })),

  // Increase incomplete task count
  increaseFalseTask: () =>
    set((state) => ({ falseCount: state.falseCount + 1 })),

  // Reset task statistics
  resetCounts: () =>
    set(() => ({
      totalCount: 0,
      trueCount: 0,
      falseCount: 0,
    })),
}));

export default useAuthStore;
