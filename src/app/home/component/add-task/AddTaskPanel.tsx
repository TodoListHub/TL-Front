"use client"
import useAuthStore from "@/Store/useAuthStore"
import { Button } from "@mui/material"
import { teal } from "@mui/material/colors"
import axios from "axios"  

export default function AddTaskPanel () {

    // Adding newTaskText from Zustand
    const { addsection, newTaskText, setNewTaskText } = useAuthStore();
    
    // Storing new task text when entered
    const onChangehandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setNewTaskText(event.target.value)
    }

    // Function to send a request to the backend
    const onClickHandler = async () => {
        if (newTaskText.trim() === "") {
            alert("Please enter a task title.");
            return;
        }

        const taskData = { title: newTaskText };

        try {
            
            const response = await axios.post("https://your-backend-url.com/create-task", taskData, {
                headers: {
                    "Content-Type": "application/json"
                }
            });

            // Displaying a success message upon successful task addition
            alert("Task added successfully!");
            console.log(response.data);

            // Reset the input field after adding the task or perform other actions
            setNewTaskText("");
        } catch (error) {
            console.error("Error adding task:", error);
            alert("Failed to add task. Please try again.");
        }
    }

    return ( 
        <div className={`${addsection ? "w-[25%] h-[50%]" : "w-0 h-[90%]"} duration-500 opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center`}>
            
            <h1 className={`${addsection ? "flex items-center justify-center text-teal-700 rounded-xl text-3xl w-full h-20" : "w-0 h-20 duration-500 text-transparent"}`}>
                Add Task
            </h1>

            <hr className="w-[90%]" />

            <textarea   
                className={`w-[95%] max-h-60 min-h-60 mt-5 border-zinc-300 ${addsection ? "p-5 border-2" : "p-0"} text-xl text-teal-700 bg-white rounded-md shadow-2xl shadow-zinc-400 overflow-y-auto`}
                onChange={onChangehandler}
                value={newTaskText}  />

            {addsection && 
                <Button   
                    sx={{ width: "70%", marginTop: 5, background: teal[400] }} 
                    variant="contained"
                    onClick={onClickHandler}  // Sending request on button click
                >
                    Add task
                </Button>
            }
        </div>
    )
}
