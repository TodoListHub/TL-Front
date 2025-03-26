"use client"
import Navbar from "../component/Navbar";
import LoginWithEmailFrame from "./component/LogInWithEmailFrame";

export default function LoginWithEmailMainFrame() {

  return (

    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <Navbar option1="Sign In " />
      <LoginWithEmailFrame />
    </div>
  );
}
