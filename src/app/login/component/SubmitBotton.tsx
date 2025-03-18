"use client";

import Button from '@mui/material/Button';
import { teal } from "@mui/material/colors";



export default function SubmitBotton(){ 

    



    return(
        <Button  sx={{width : "50%" , marginTop : 5 , bgcolor : teal[600] , "&:hover": { bgcolor: teal[400] } }} variant="contained">Submit </Button>
    )
}