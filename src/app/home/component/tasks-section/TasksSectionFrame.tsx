"use client";
import Task from "./Task";
import useFetchTask from "../../../../Store/useFetchTask";
import { useEffect } from "react";

export default function TasksSectionFrame() {
    const { tasks, fetchTasks } = useFetchTask(); // Fetch tasks from Zustand store

    useEffect(() => {
        fetchTasks(); // Fetch tasks when the component is mounted
    }, []);

    // Delete a task from the server and update the list
    const deleteTask = async (id: number) => {
        try {
            await fetch(`https://tl-backend-production.up.railway.app/delete-task/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            fetchTasks(); // Fetch the updated task list after deletion
        } catch (error: any) {
            console.error("Error deleting task:", error);
            alert(`Failed to delete task: ${error.message || "Unknown error"}`);
        }
    };

    return (
        <div className="w-[65%] h-[90%] bg-white opacity-90 shadow-2xl border-zinc-300
                        rounded-xl overflow-y-auto flex flex-col items-center p-1 pt-2">
            {tasks.map((task) => (
                <Task key={task.id} CheckStatus={task.CheckStatus} TaskText={task.title} onDelete={() => deleteTask(task.id)} />
            ))}
        </div>
    );
}
