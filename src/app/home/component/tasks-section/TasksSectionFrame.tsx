"use client";
import Task from "./Task";
import useFetchTask from "../../../../Store/useFetchTask";
import { useEffect } from "react";
import useInformationStore from "@/Store/useUserInformation";

export default function TasksSectionFrame() {
    const { tasks, fetchTasks } = useFetchTask(); // Fetch tasks from Zustand store
    const { decreaseTotalTask , decreaseFalseTask , decreaseTrueTask} = useInformationStore()

    useEffect(() => {
        fetchTasks(); // Fetch tasks when the component is mounted
    }, []);

    // Delete a task from the server and update the list
    const deleteTask = async (id: number , Status : boolean) => {
        try {
            await fetch(`https://tl-backend-production.up.railway.app/delete-task/${id}`, {
                method: "DELETE",
                credentials: "include",
            });

            if(Status == false){
                decreaseTotalTask()
                decreaseFalseTask()
            } else if(Status){
                decreaseTotalTask()
                decreaseTrueTask()
            }

            fetchTasks(); // Fetch the updated task list after deletion
        } catch (error: unknown) {
            console.error("Error deleting task:", error);

            let errorMessage = "Unknown error";
            if (error instanceof Error) {
                errorMessage = error.message;
            }

            alert(`Failed to delete task: ${errorMessage}`);
        }
    };

    return (

        <div className="w-[100%] lg:w-[65%] h-[90%] bg-white opacity-90 shadow-2xl border-zinc-300
                        rounded-xl overflow-y-auto flex flex-col items-center p-1 pt-2">
            {tasks.map((task) => (
                <Task key={task.id} taskId={task.id} CheckStatus={task.status} TaskText={task.title} onDelete={() => deleteTask(task.id , task.status)} />
            ))}
        </div>
    );
}
