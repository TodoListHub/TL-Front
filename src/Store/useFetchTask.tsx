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
        } catch (error: any) {  
            // Set `error` as `any` so we can access the `message` property
            console.error("Error fetching tasks:", error);
            alert(`Failed to fetch tasks: ${error.message || "Unknown error"}`);  // Show error message using alert
        }
    }
}));

export default useTaskStore;
