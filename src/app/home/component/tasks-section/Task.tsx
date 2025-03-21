"use client"
import {teal } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';
import { useState } from 'react';
import { motion } from "framer-motion";

export default function Task( {TaskText , CheckStatus} : {TaskText : string , CheckStatus : boolean}){

    const [isEdit , setisEdit ] = useState(false);
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    const onCliskhandler = ()=> {
        setisEdit(!isEdit)
    }

    return(
        <div className={`w-[99%] ${isEdit ? "h-[230px]" : "h-[130px]"} flex flex-wrap bg-amber-50 rounded-2xl shadow-2xl pb-1 mb-1 hover:scale-99 hover:bg-teal-50 duration-300`}>

            <p className="h-[130px] w-[80%] overflow-y-auto text-teal-900 text-2xl p-2 flex items-center"> 
                {TaskText}
            </p>

            <div className='h-[130px] w-[10%]'></div>

            <div className="h-[130px] w-[10%] text-2xl p-2 flex flex-col items-center justify-center border-l ">

                    <img onClick={onCliskhandler} className="w-10 h-10 mb-2" src="/edit-3-svgrepo-com.svg" alt="salam " />
                    <Checkbox {...label} checked={CheckStatus} sx={{'& .MuiSvgIcon-root': { fontSize: 40 } ,
                                                             color : teal[600], 
                                                             '&.Mui-checked': {color : teal[600]} }} />

            </div>

            <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isEdit ? 1 : 0, height: isEdit ? "100px" : 0 }}
                transition={{ duration: 0.5 }}
                className=" w-full h-[100px] overflow-hidden">
                <div className={`${isEdit ? " w-full h-[100px] items-center flex" : "hidden"}`}>
                    <textarea className='w-[60%] max-h-[80%] p-2 mt-2.5 ml-2 text-teal-700 bg-white border border-zinc-300 rounded-2xl'
                            name="edit tast text" id="textarea"></textarea>
                    <div className='w-[30%] h-full flex items-center justify-center text-xl text-teal-800'> - Enter the edited text <br/>- and click "Ok" botton</div>
                    <div className='w-[10%] h-full flex justify-center items-center'>
                        <input className='w-[50%] h-[40%] bg-teal-600 text-teal-100 font-bold rounded-md hover:scale-105' value={"OK"} type='button'/>
                    </div>
                </div>
            </motion.div>

        </div>
    )
    
}