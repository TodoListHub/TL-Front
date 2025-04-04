import Navbar from "../login/component/Navbar";
import ResponsiveFrameOption from "../login/component/ResponsivedFrameOption";
import SignInFrame from "./components/SignInFrame";


export default function SignInMainFrame (){

    return(
        <div className="w-screen h-screen bg-gray-100 flex flex-col items-center" >
            <Navbar option1="Log In"/>
            <SignInFrame title="Sign In" />
            <ResponsiveFrameOption option1="Log In"/>
        </div>
    )
}