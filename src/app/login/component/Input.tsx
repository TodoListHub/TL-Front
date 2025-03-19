"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import useAuthStore from '../../../Store/useAuthStore';

export default function Input() {

  const {username , setUsername } = useAuthStore();
  // too line bala az zustand tabe setusername ro farakhani kardam va ba estefade az
  
  //toye line paiin value ro az input username gereftam va dar store zakhire kardam 
  const onClickhandler = (event: React.ChangeEvent<HTMLInputElement>)=> {
    setUsername(event.target.value)
  }



  return (

        <TextField
          className="w-[90%] h-12"
          id="standard-basic"
          label="User Name"  
          variant="standard"
          onChange={onClickhandler}
          sx={{ marginTop : 2 ,
            "& label": { color: "teal" },
            "& label.Mui-focused": { color: "teal" }, 
            "& .MuiInputBase-input": { color: "teal" }, 
          }}/>

    );
}
