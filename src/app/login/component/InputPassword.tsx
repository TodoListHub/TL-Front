"use client"
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function InputPassword( {title} : {title : string}) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (

    <FormControl sx={{ marginTop: 2, width: '90%' }} variant="standard" >
    <InputLabel sx={{color: "teal",'&.Mui-focused': {color: 'teal'}}}
                htmlFor="standard-adornment-password">{title}</InputLabel>
    <Input
      id="standard-adornment-password"
      type={showPassword ? 'text' : 'password'}
      sx={{
        "& label": { color: "teal" }, 
        "& label.Mui-focused": { color: "teal" }, 
        "& .MuiInputBase-input": { color: "teal" },
       }}
      endAdornment={
        <InputAdornment position="end">
          <IconButton
            aria-label={ showPassword ? 'hide the password' : 'display the password' }
            onClick={handleClickShowPassword}
            onMouseDown={handleMouseDownPassword}
            onMouseUp={handleMouseUpPassword}>

            {showPassword ? <VisibilityOff /> : <Visibility />}

          </IconButton>
        </InputAdornment>
      }
    />
  </FormControl>

  );
}
