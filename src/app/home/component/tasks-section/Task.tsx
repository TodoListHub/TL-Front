"use client"
import {teal } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import TaskEditSection from './TaskEditSection';


export default function Task( {TaskText , taskId  , CheckStatus , onDelete  } : {TaskText : string , taskId: number,  CheckStatus : boolean , onDelete : ()=> void}){

    const [isEdit , setisEdit ] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onCliskhandler = ()=> {
        setisEdit(!isEdit)
    }

    return(
        <div className={`w-[99%] ${isEdit ? "h-[230px]" : "h-[130px]"} flex flex-wrap bg-teal-50 rounded-2xl shadow-2xl shadow-zinc-500 pb-1 mb-1 hover:scale-99 hover:bg-teal-50 duration-300`}>

            <p className="h-[130px] w-[80%] overflow-y-auto text-teal-900 text-2xl p-2 flex items-center"> 
                {TaskText}
            </p>

            <div className='h-[130px] w-[10%]'></div>

            <div className="h-[130px] w-[10%] text-2xl pt-3 pb-3 flex flex-col items-center justify-center border-l ">

                    <img onClick={onCliskhandler} className="w-8 h-8 " src="/edit-3-svgrepo-com.svg" alt="salam " />
                    <Checkbox {...label} checked={CheckStatus} sx={{'& .MuiSvgIcon-root': { fontSize: 40 } ,
                                                             color : teal[600], 
                                                             '&.Mui-checked': {color : teal[600]} }} />
                    <img onClick={onDelete} className="w-8 h-8 " src="/delete-2-svgrepo-com.svg" alt="salam " />

            </div>

            <TaskEditSection taskId={taskId} isEdit={isEdit} onClickhandler={onCliskhandler} />

            

        </div>
    )
    
}