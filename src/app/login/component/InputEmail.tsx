"use client"
import * as React from 'react';
import TextField from '@mui/material/TextField';
import useAuthStore from '../../../Store/useAuthStore'; 

export default function InputEmail() {

  const {Email , setEmail } = useAuthStore()
  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      setEmail(event.target.value);
    };

  return (

        <TextField
          onChange={handleEmailChange}
          className="w-[90%] h-12"
          id="standard-basic"
          label="Email"  
          variant="standard"
          sx={{ marginTop : 2 ,
            "& label": { color: "teal" }, 
            "& label.Mui-focused": { color: "teal" }, 
            "& .MuiInputBase-input": { color: "teal" },
            
          }}/>

    );
}
