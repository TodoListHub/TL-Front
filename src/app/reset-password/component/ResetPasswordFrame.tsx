"use client";
import InputPassword from "@/app/login/component/InputPassword";
import InputPasswordRepeat from "@/app/login/component/InputPasswordRepeat";
import { Button } from "@mui/material";
import { teal } from "@mui/material/colors";
import axios from "axios";
import useAuthStore from "@/Store/useAuthStore";

export default function ResetPasswordFrame() {

    const {password , repeatPassword } = useAuthStore()
    

    const onClickHandler = async () => {
        if (password.trim() === "" || repeatPassword.trim() === "") {
            alert("Please fill in both password fields.");
            return;
        }

        if (password !== repeatPassword) {
            alert("Passwords do not match!");
            return;
        }

        console.log(password)

        try {
             await axios.put(
                "https://tl-backend-production.up.railway.app/reset-password",
                {newPassword: password },
                {
                    headers: { "Content-Type": "application/json" },
                    withCredentials: true
                }
            );

            alert("Password has been successfully reset!");
        } catch (error: unknown) {
            console.error("Error resetting password:", error);
            alert("Failed to reset password. Please try again.");
        }
    };

    return (
        <div className="h-[420px] w-[500px] mt-20 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center">
            <div className="text-teal-600 w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                Forget Password
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />
            <p className="text-teal-700 w-[90%] pt-4">
                - Please enter your new password. <br />
                - Your password will be changed after clicking the submit button.
            </p>

            <InputPassword title="Password"  />
            <InputPasswordRepeat title="Repeat Password" />
            <Button
                sx={{ width: "50%", marginTop: 6, background: teal[600], "&:hover": { bgcolor: teal[400] } }}
                variant="contained"
                onClick={onClickHandler}>
                Submit
            </Button>
        </div>
    );
}
