"use client";
import useAuthStore from "@/Store/useAuthStore";
import useFetchTask from "../../../../Store/useFetchTask"; // Importing Task Store
import { Button } from "@mui/material";
import { teal } from "@mui/material/colors";
import axios from "axios";
import useInformationStore from "../../../../Store/useUserInformation";
import { motion } from "framer-motion";
import { useState } from "react";

export default function AddTaskPanelResponsive() {
    const { newTaskText, setNewTaskText } = useAuthStore();
    const { fetchTasks } = useFetchTask(); // Fetch tasks after adding a new one
    const { increaseTotalTask, increaseFalseTask } = useInformationStore();
    const [isOpen, setIsOpen] = useState(false);

    // Storing new task text when entered
    const onChangehandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTaskText(event.target.value);
    };

    // Function to send a request to the backend
    const onClickHandler = async () => {
        if (newTaskText.trim() === "") {
            alert("Please enter a task title.");
            return;
        }

        const taskData = { title: newTaskText };

        try {
            await axios.post("https://tl-backend-production.up.railway.app/create-task", taskData, {
                headers: { "Content-Type": "application/json" },
                withCredentials: true
            });

            alert("Task added successfully!");
            setNewTaskText(""); // Clear input field
            fetchTasks(); // Refresh task list
            increaseTotalTask();
            increaseFalseTask();
        } catch (error: unknown) {
            console.error("Error adding task:", error);

            let errorMessage = "Unknown error";
            if (error instanceof Error) {
                errorMessage = error.message;
            }

            alert(`Failed to add task: ${errorMessage}`);
        }
    };

    return (
        <div className={`w-full lg:w-[25%] rounded-xl mt-1 mb-1 duration-500 bg-white opacity-90 shadow-2xl border-zinc-300 flex flex-col items-center`}>
            {/* Toggle Button */}
            <motion.h1
                onClick={() => setIsOpen(!isOpen)}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-16 lg:h-20 text-2xl lg:text-3xl text-teal-800 font-semibold flex justify-center items-center 
                           cursor-pointer select-none hover:scale-105 duration-300"
            >
                {isOpen ? "Add Task ⬆" : "Add Task ⬇"}
            </motion.h1>

            {/* Expandable Section */}
            <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{
                    height: isOpen ? "auto" : 0,
                    opacity: isOpen ? 1 : 0
                }}
                transition={{ duration: 0.5 }}
                className="w-full flex flex-col items-center overflow-hidden"
            >
                <hr className="w-[90%] my-2" />

                <textarea
                    className="w-[95%] max-h-60 min-h-60 mt-3 p-5 border-2 border-zinc-300 text-xl text-teal-700 bg-white rounded-md shadow-2xl shadow-zinc-400 overflow-y-auto"
                    onChange={onChangehandler}
                    value={newTaskText}
                />

                <Button sx={{ width: "70%", marginTop: 3, marginBottom: 2 , background: teal[400] }} variant="contained" onClick={onClickHandler}>
                    Add task
                </Button>
            </motion.div>
        </div>
    );
}
