"use client";
import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import useAuthStore from '../../../Store/useAuthStore'; // import the Zustand store

export default function InputPasswordRepeat({title} : {title : string}) {
  //prop gereftam chon mikhastan namayesh bedam ke title chi bood 

  const [showPassword, setShowPassword] = React.useState(false);
  const {setrepeatPassword } = useAuthStore(); // use the Zustand store

  const handleClickShowPassword = () => setShowPassword((show) => !show);


  // update the password in Zustand store
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setrepeatPassword(event.target.value); 
  };

  return (
    <FormControl sx={{ marginTop: 2, width: '90%' }} variant="standard">
      <InputLabel sx={{ color: "teal", '&.Mui-focused': { color: 'teal' } }} htmlFor="standard-adornment-password">
        {title}
      </InputLabel>
      <Input
        id="standard-adornment-password"
        type={showPassword ? 'text' : 'password'}
        onChange={handlePasswordChange} // update the password in store on change

        // sx baraye style dehi component amade az lib matrial ui 
        sx={{
          "& label": { color: "teal" },
          "& label.Mui-focused": { color: "teal" },
          "& .MuiInputBase-input": { color: "teal" },
        }}
        endAdornment={
          <InputAdornment position="end">
            <IconButton
              aria-label={showPassword ? 'hide the password' : 'display the password'}
              onClick={handleClickShowPassword}>
              {showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
      />
    </FormControl>
  );
}
