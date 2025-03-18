import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input({label} : {label:string}) {
  return (

        <TextField
          className="w-[90%] h-12"
          id="standard-basic"
          label={`${label}`}  
          variant="standard"
          sx={{ marginTop : 2 ,
            "& label": { color: "teal" }, // تغییر رنگ لیبل
            "& label.Mui-focused": { color: "teal" }, // تغییر رنگ لیبل در حالت فوکوس
            "& .MuiInputBase-input": { color: "teal" }, // تغییر رنگ متن ورودی
            
          }}/>

    );
}
