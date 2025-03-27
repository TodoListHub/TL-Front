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
  decreaseTotalTask: () => void;
  increaseTotalTask: () => void;
  increaseTrueTask: () => void;
  increaseFalseTask: () => void;
  decreaseTrueTask: () => void;
  decreaseFalseTask: () => void;
  resetCounts: () => void;
}

// Create Zustand Store with TypeScript
const useInformationStore = create<AuthState>((set) => ({
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

  // Increase & decrease total task count
  increaseTotalTask: () =>
    set((state) => ({ totalCount: state.totalCount + 1 })),

  decreaseTotalTask: () =>
    set((state) => ({ totalCount: state.totalCount - 1 })),

  // Increase & decrease completed task count
  increaseTrueTask: () =>
    set((state) => ({ trueCount: state.trueCount + 1 })),

  decreaseTrueTask: () =>
    set((state) => ({ trueCount: state.trueCount - 1 })),

  // Increase & decrease incomplete task count
  increaseFalseTask: () =>
    set((state) => ({ falseCount: state.falseCount + 1 })),

  decreaseFalseTask: () =>
    set((state) => ({ falseCount: state.falseCount - 1 })),

  // Reset task statistics
  resetCounts: () =>
    set(() => ({
      totalCount: 0,
      trueCount: 0,
      falseCount: 0,
    })),
}));

export default useInformationStore;
