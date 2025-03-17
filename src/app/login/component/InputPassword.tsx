"use client"
import * as React from 'react';
import Box, { BoxClassKey } from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import FilledInput from '@mui/material/FilledInput';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

export default function InputPassword() {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (

    <FormControl sx={{ m: 1, width: '90%' }} variant="standard" >
    <InputLabel sx={{color: "teal",'&.Mui-focused': {color: 'teal'}}}
                htmlFor="standard-adornment-password">Password</InputLabel>
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
