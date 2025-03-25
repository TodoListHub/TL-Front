import Navbar from "../login/component/Navbar";
import ResetPasswordFrame from "./component/ResetPasswordFrame";

export default function ResetPasswordMainFrame(){

    return(
        <div className="w-screen h-screen bg-gray-100 flex flex-col place-items-center ">
            <Navbar option1="signin"/>
            <ResetPasswordFrame />

        </div>
    )
}