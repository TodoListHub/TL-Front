"use client";
import Button from '@mui/material/Button';
import { teal } from "@mui/material/colors";
import useAuthStore from '../../../Store/useAuthStore'; 



export default function SubmitBotton(){ 

    const {username, password , repeatPassword, email } = useAuthStore();
    const FormInformation = {
        UserName : username,
        Password : password,
        RepeatPassword : repeatPassword,
        Email : email
    }

    // jaii ke bayad api post bokhore be backend , dar inja hame variable ha az
    // zustand store khonde mishan 
    const onClickhandler = ()=> {
        console.log(FormInformation)
    }

    



    return(
        <Button onClick={onClickhandler}  sx={{width : "50%" , marginTop : 5 , bgcolor : teal[600] , "&:hover": { bgcolor: teal[400] } }} variant="contained">Submit </Button>
    )
}