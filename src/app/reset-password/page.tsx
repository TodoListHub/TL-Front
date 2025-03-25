import Navbar from "../login/component/Navbar";
import ResetPasswordFrame from "./component/ResetPasswordFrame";

export default function ResetPasswordMainFrame(){

    return(
        <div className="w-screen h-screen bg-gray-100 flex place-items-center justify-center">
            <Navbar option1="login"/>
            <ResetPasswordFrame />

        </div>
    )
}