import Navbar from "../login/component/Navbar";
import SignInFrame from "./components/SignInFrame";


export default function SignInMainFrame (){

    return(
        <div className="w-screen h-full bg-gray-100 flex flex-col items-center" >
            <Navbar option1="Log In"/>
            <SignInFrame title="Sign In" />
        </div>
    )
}