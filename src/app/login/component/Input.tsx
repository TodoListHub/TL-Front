import * as React from 'react';
import TextField from '@mui/material/TextField';

export default function Input({label} : {label:string}) {
  return (

<TextField
  className="w-[90%] h-20"
  id="standard-basic"
  label={`${label}`}
  variant="standard"
  sx={{
    "& label": { color: "teal" }, // تغییر رنگ لیبل
    "& label.Mui-focused": { color: "teal" }, // تغییر رنگ لیبل در حالت فوکوس
    "& .MuiInputBase-input": { color: "teal" }, // تغییر رنگ متن ورودی
    "& .MuiInput-underline:before": { borderBottomColor: "gray" }, // تغییر رنگ خط قبل از فوکوس
    "& .MuiInput-underline:hover:before": { borderBottomColor: "teal" }, // تغییر رنگ خط هنگام هاور
    "& .MuiInput-underline:after": { borderBottomColor: "teal" }, // تغییر رنگ خط بعد از فوکوس
  }}/>

    );
}
