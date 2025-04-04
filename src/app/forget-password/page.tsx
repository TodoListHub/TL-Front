import Navbar from "../login/component/Navbar";
import ResponsiveFrameOption from "../login/component/ResponsivedFrameOption";
import ForgetPasswordFrame from "./component/ForgetPasswordFrame";


export default function ForgetPasswordMainFrame(){

    return(
        <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
            <Navbar option1="Sign in " />
            <ForgetPasswordFrame />
            <ResponsiveFrameOption option1="Sign In"/>
        </div>
    )
}