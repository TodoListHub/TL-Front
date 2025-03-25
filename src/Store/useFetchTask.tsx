import { create } from "zustand";
import axios from "axios";

interface Task {
    id: number;
    CheckStatus: boolean;
    title: string;
}

interface TaskStore {
    tasks: Task[];
    fetchTasks: () => Promise<void>;
}

const useTaskStore = create<TaskStore>((set) => ({
    tasks: [],
    
    fetchTasks: async () => {
        try {
            const response = await axios.get("https://tl-backend-production.up.railway.app/get-tasks", { withCredentials: true });
            set({ tasks: response.data });
        } catch (error: unknown) {  
            console.error("Error fetching tasks:", error);

            let errorMessage = "Unknown error";
            if (error instanceof Error) {
                errorMessage = error.message;
            }

            alert(`Failed to fetch tasks: ${errorMessage}`);  // Show error message using alert
        }
    }
}));

export default useTaskStore;
