"use client"
import {teal } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import TaskEditSection from './TaskEditSection';
import axios, { AxiosError } from 'axios';
import { ApiError } from 'next/dist/server/api-utils';
import useFetchTask from "../../../../Store/useFetchTask";
import useInformationStore from "../../../../Store/useUserInformation"


export default function Task( {TaskText , taskId , CheckStatus , onDelete  } : {TaskText : string , taskId: number,  CheckStatus : boolean , onDelete : ()=> void}){

    const {  fetchTasks } = useFetchTask()
    const {increaseTrueTask , increaseFalseTask , decreaseFalseTask , decreaseTrueTask} = useInformationStore()
    const [isEdit , setisEdit ] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onCliskhandler = ()=> {
        setisEdit(!isEdit)
    }

    const onClickhandlerStatus = async ()=>{

        

        try {
            // Sending PUT request to update the task
            const response = await axios.put(`https://tl-backend-production.up.railway.app/update-status/${taskId}`, // Replace with actual API URL
              {},
              {
                headers: {
                  "Content-Type": "application/json"},
                  withCredentials: true,
                
              }
            );

            if(CheckStatus == true){
              increaseFalseTask()
              decreaseTrueTask()
            } else if (CheckStatus == false){
              increaseTrueTask()
              decreaseFalseTask()
            }


            console.log(response.data); // Log server response
            alert("Task updated successfully!"); // Success message
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
    }

    return(
        <div className={`w-[99%] ${isEdit ? "h-[230px]" : "h-[130px]"} flex flex-wrap bg-teal-50 rounded-2xl shadow-2xl shadow-zinc-500 pb-1 mb-1 hover:scale-99 hover:bg-teal-50 duration-300`}>

            <p className="h-[130px] w-[80%] overflow-y-auto text-teal-900 text-2xl p-2 flex items-center"> 
                {TaskText}
            </p>

            <div className='h-[130px] w-[10%]'></div>

            <div className="h-[130px] w-[10%] text-2xl pt-3 pb-3 flex flex-col items-center justify-center border-l ">

                    <img onClick={onCliskhandler} className="w-8 h-8 " src="/edit-3-svgrepo-com.svg" alt="salam " />
                    <Checkbox onClick={onClickhandlerStatus} {...label} checked={CheckStatus} sx={{'& .MuiSvgIcon-root': { fontSize: 40 } ,
                                                             color : teal[600], 
                                                             '&.Mui-checked': {color : teal[600]} }} />
                    <img onClick={onDelete} className="w-8 h-8 " src="/delete-2-svgrepo-com.svg" alt="salam " />

            </div>

            <TaskEditSection taskId={taskId} isEdit={isEdit} onClickhandler={onCliskhandler} />

            

        </div>
    )
    
}