"use client";
import { useState, useEffect } from "react";
import axios from "axios";
import Task from "./Task";

export default function TasksSectionFrame() {

    const [tasks, setTasks] = useState<{ id: number; CheckStatus: boolean; TaskText: string }[]> ([]);

    // Fetch the list of tasks from the backend
    useEffect(() => {
        const fetchTasks = async () => {
            try {
                const response = await axios.get("https://your-backend.com/get-tasks", { withCredentials: true });
                setTasks(response.data); // Store the fetched data in state
            } catch (error) {
                console.error("Error fetching tasks:", error);
            }
        };

        fetchTasks();
    }, []);

    // Delete a task from the backend
    const deleteTask = async (id: number) => {
        try {
            await axios.delete(`https://your-backend.com/delete-task/${id}`, { withCredentials: true });

            // Update the UI by removing the deleted task
            setTasks(tasks.filter((task) => task.id !== id));
        } catch (error) {
            console.error("Error deleting task:", error);
        }
    };

    return (
        <div className="w-[65%] h-[90%] bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl overflow-y-auto flex flex-col items-center p-1 pt-2">
            {tasks.map((task) => (
                <Task key={task.id} CheckStatus={task.CheckStatus} TaskText={task.TaskText} onDelete={() => deleteTask(task.id)} />
            ))}
        </div>
    );
}
