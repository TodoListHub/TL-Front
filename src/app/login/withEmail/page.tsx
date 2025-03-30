"use client"
import Navbar from "../component/Navbar";
import ResponsiveFrameOption from "../component/ResponsivedFrameOption";
import LoginWithEmailFrame from "./component/LogInWithEmailFrame";

export default function LoginWithEmailMainFrame() {

  return (

    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <Navbar option1="Sign In " />
      <LoginWithEmailFrame />
      <ResponsiveFrameOption option1="Sign In"/>
    </div>
  );
}
