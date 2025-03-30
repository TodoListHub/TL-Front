"use client"
import { Button, TextField } from "@mui/material";
import { teal } from "@mui/material/colors";
import useAuthStore from "@/Store/useAuthStore";
import axios from "axios";
export default function ForgetPasswordFrame () {

    const {email , setEmail} = useAuthStore();

    const onChangehandler = (event: React.ChangeEvent<HTMLInputElement>)=>{
        setEmail(event.target?.value)
    }

    const onClickhandler = async ()=>{
        if(!email){
            alert("Please fill in Email field!")
            return
        }

        const Email = { 
            email : email
        }

        try {
            const response = await axios.post("https://tl-backend-production.up.railway.app/reset-password" , Email , {
                headers : {"Content-Type": "application/json"},
                withCredentials:true

            })
            // Show success message or response data message
            alert(response.data.message || "Registration successful!");
            console.log("Registration successful!")
            return
            
            
        } catch (error) {

            console.log("❌ Error sending request:");
                    
                    // Use type assertion to cast 'error' to AxiosError
                    if (axios.isAxiosError(error)) {
                        // Extract detailed error response
                        const errorDetails = error.response?.data || {}; // Extract error details
                        console.log("Error details:", errorDetails);
        
                        // Display error message if available
                        const errorMessage = errorDetails.error?.[0]?.msg || errorDetails.message || "An issue occurred, please try again.";
                        
                        alert(`Error: ${errorMessage}`);
                    } else {
                        console.log("Server error:", error);
                        alert("There was an issue connecting to the server. Please try again.");
                    }
        }

    }

    return( 

        <div className="h-[350px]    w-[300px]
                        sm:h-[400px] sm:w-[420px]
                        md:h-[350px] md:w-[450px]
                        lg:h-[350px] lg:w-[450px]
                        mt-[50px] md:mt-[60px] lg:mt-0
                      bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center">

            <div className=" text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                Forget Password 
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />
            <p className="text-teal-700 w-[90%] pt-4">
                please enter your email address to receive the link. <br/>
                Email is required
            </p> 

            <TextField
                    className="w-[90%] "
                    id="standard-basic"
                    label="Email"  
                    variant="standard"
                    onChange={onChangehandler}
                    sx={{ marginTop : 3 ,
                        "& label": { color: "teal" },
                        "& label.Mui-focused": { color: "teal" }, 
                        "& .MuiInputBase-input": { color: "teal" }, 
                    }}/>

            <Button sx={{ width: "50%", marginTop: 6  , background : teal[600] ,"&:hover": { bgcolor: teal[400] } }} 
                    variant="contained"
                    onClick={onClickhandler} >
                    Submit
            </Button>

        </div>
    )
}