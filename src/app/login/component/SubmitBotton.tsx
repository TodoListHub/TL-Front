import { BottomNavigation } from "@mui/material";
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Input from "./Input";
import { teal } from "@mui/material/colors";


export default function SubmitBotton(){

    return(
        <Button sx={{width : "50%" , marginTop : 5 , bgcolor : teal[600] , "&:hover": { bgcolor: teal[400] } }} variant="contained">Submit </Button>
    )
}