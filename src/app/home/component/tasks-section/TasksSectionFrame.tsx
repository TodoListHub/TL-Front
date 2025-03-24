"use client"
import { useState } from "react";
import Task from "./Task";

export default function TasksSectionFrame() {
    const [tasks, setTasks] = useState([
        { id: 1, CheckStatus: true, TaskText: "Complete the project documentation and submit it to the manager." },
        { id: 2, CheckStatus: false, TaskText: "Fix the login page bug that prevents users from signing in." },
        { id: 3, CheckStatus: true, TaskText: "Design a new landing page layout for the website update." },
        { id: 4, CheckStatus: true, TaskText: "Prepare slides for the upcoming team meeting next Monday." },
        { id: 5, CheckStatus: false, TaskText: "Review and merge the latest pull requests in the repository." },
    ]);

    const deleteTask = (id : number) => {
        setTasks(tasks.filter(task => task.id !== id));
    };

    return (
        <div className="w-[65%] h-[90%] bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl overflow-y-auto flex flex-col items-center p-1 pt-2">
            {tasks.map(task => (
                <Task key={task.id} CheckStatus={task.CheckStatus} TaskText={task.TaskText} onDelete={() => deleteTask(task.id)} />
            ))}
        </div>
    );
}
