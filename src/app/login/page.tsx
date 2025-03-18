"use client"
import LoginFrame from "./component/LoginFrame";

import Navbar from "./component/Navbar";

export default function LoginMainFrame() {

  return (

    <div className="w-screen h-screen bg-gray-100 flex flex-col items-center">
      <Navbar option1="Sign In " />
      <LoginFrame />
    </div>
  );
}
