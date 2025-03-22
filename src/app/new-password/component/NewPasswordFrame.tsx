"use client"
import * as React from 'react';
import { Button } from "@mui/material";
import useAuthStore from '../../../Store/useAuthStore'; // import the Zustand store
import InputPassword from '@/app/login/component/InputPassword';
import InputPasswordRepeat from '@/app/login/component/InputPasswordRepeat';
import { teal } from '@mui/material/colors';


export default function NewPasswordFrame(){

    const {password , repeatPassword} = useAuthStore(); // use the Zustand store


    const onClickhandler = ()=> {

        if (!password || !repeatPassword ){
            alert("Please fill in passwords field!")
            return
        }

        if(password !== repeatPassword){
            alert("passwords not match")
            return
        }


    }


    return(

        <div className="h-[450px] w-[500px] mt-48 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center">
            <div className=" text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                Forget Password 
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />
            <p className="text-teal-700 w-[90%] pt-4">
                - Please enter your new password to change password . <br/>
                - Both passwords are required
            </p> 

            <InputPassword title='New Password'/>
            <InputPasswordRepeat title='Repeat New Password'/>


            <Button sx={{ width: "50%", marginTop: 8 , background : teal[500] ,"&:hover": { bgcolor: teal[400] }   }} 
                    variant="contained"
                    onClick={onClickhandler} >
                    Submit
            </Button>

        </div>
    )
}