import { motion } from "framer-motion";
import useAuthStore from "@/Store/useAuthStore";
import axios, { AxiosError } from "axios";
import useFetchTask from "../../../../Store/useFetchTask";
export default function TaskEditSection({ isEdit, taskId,  onClickhandler, }: { isEdit: boolean; taskId: number; onClickhandler: () => void}) {
    
    const { newTaskText, setNewTaskText } = useAuthStore();
    const {  fetchTasks } = useFetchTask()

  // Define a custom error type for the API response
  interface ApiError {
    message: string; // The error message from the API
    errorCode?: number; // Optional error code if available
  }

  // Submit the task edit
  const submitEditTask = async () => {
    if (newTaskText.trim() === "") {
      alert("Text cannot be empty!"); // Alert if the text is empty
      return;
    }

    console.log(taskId)

    try {
      // Sending PUT request to update the task
      const response = await axios.put(`https://tl-backend-production.up.railway.app/update-task/${taskId}`, // Replace with actual API URL
        {
          title: newTaskText, // Sending the new title
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
          withCredentials: true,
        }
      );

      console.log(response.data); // Log server response
      alert("Task updated successfully!"); // Success message
      onClickhandler(); // Close and apply changes
      fetchTasks()
      
    } catch (error) {
      // Check if it's an AxiosError and handle accordingly
      if (axios.isAxiosError(error)) {
        const axiosError = error as AxiosError<ApiError>; // Type the error as AxiosError
        const errorMessage =
          axiosError.response?.data?.message ||
          "Failed to update task. Please try again.";
        const errorCode = axiosError.response?.status;

        console.error("Error updating task:", error);
        alert(`Error: ${errorMessage} (Code: ${errorCode || "Unknown"})`);
      } else {
        console.error("Unexpected error:", error);
        alert("An unexpected error occurred. Please try again.");
      }
    }
  };

  const onClickhandlerMain = () => {
    onClickhandler();
    submitEditTask();
  };

  const onChangehandler = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setNewTaskText(event.target.value);
    console.log(newTaskText);
  };

  return (
    <motion.div
      initial={{ opacity: 0, height: 0 }}
      animate={{ opacity: isEdit ? 1 : 0, height: isEdit ? "100px" : 0 }}
      transition={{ duration: 0.5 }}
      className="w-full h-[100px] overflow-hidden"
    >
      <div className={`${isEdit ? "w-full h-[100px] items-center flex" : "hidden"}`}>
        <textarea
          onChange={onChangehandler}
          className=" w-[70%] lg:w-[60%] max-h-[80%] p-2 mt-2.5 ml-2 text-teal-700 bg-white border border-zinc-300 rounded-2xl"
          name="edit task text"
          id="textarea"
        ></textarea>

        <div className="hidden lg:flex w-[30%] h-full items-center justify-center text-xl text-teal-800">
          - Enter the edited text <br />- and click Ok button
        </div>

        <div className="w-[30%] lg:w-[10%] h-full flex justify-center items-center">
          <input
            onClick={onClickhandlerMain}
            className="w-[50%] h-[40%] bg-teal-600 text-teal-100 font-bold rounded-md hover:scale-105"
            value={"OK"}
            type="button"
          />
        </div>
      </div>
    </motion.div>
  );
}
