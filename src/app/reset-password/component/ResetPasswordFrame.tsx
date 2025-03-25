import InputPassword from "@/app/login/component/InputPassword";
import InputPasswordRepeat from "@/app/login/component/InputPasswordRepeat";
import { Button } from "@mui/material";
import { teal } from "@mui/material/colors";


export default function ResetPasswordFrame(){

    return(
        <div className="h-[370px] w-[500px] mt-20 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center">
            <div className=" text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                Forget Password 
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />
            <p className="text-teal-700 w-[90%] pt-4">
                - please enter your email address to receive the link . <br/>
                - Email is required
            </p> 

            
            <InputPassword title="Password"/>
            <InputPasswordRepeat title="Repeat Password"/>
            <Button sx={{ width: "50%", marginTop: 6  , background : teal[600] ,"&:hover": { bgcolor: teal[400] } }} 
                    variant="contained"
                    >
                    Submit
            </Button>

        </div>
    )
}