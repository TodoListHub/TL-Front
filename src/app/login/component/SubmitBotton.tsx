"use client"
import Button from '@mui/material/Button';
import { teal } from "@mui/material/colors";
import useAuthStore from '../../../Store/useAuthStore';
import axios from 'axios';
import { useRouter } from "next/navigation";

export default function SubmitButton() {
    const { username, password, email } = useAuthStore();
    const router = useRouter()
    
    const onClickHandler = async () => {
        
        // If any field is empty, show an alert
        if (!username || !password || !email) {
            alert("Please fill in all the fields!");
            return;
        }

        // Create an object to send the form data
        const FormInformation = {
            username: username, // Correct field name
            password: password, // Correct field name
            email: email        // Correct field name
        };

        try {
            const response = await axios.post("https://tl-backend-production.up.railway.app/signup", FormInformation, {
                headers: {
                    "Content-Type": "application/json"
                }
            });
            // Show success message or response data message
            alert(response.data.message || "Registration successful!");
            console.log("Registration successful!")
            router.push("/home")
            
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
    };

    return (
        <Button 
            onClick={onClickHandler}  
            sx={{ width: "50%", marginTop: 5, bgcolor: teal[600], "&:hover": { bgcolor: teal[400] } }} 
            variant="contained"
        >
            Submit
        </Button>
    );
}
