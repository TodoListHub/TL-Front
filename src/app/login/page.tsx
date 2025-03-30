"use client"
import LoginFrame from "./component/LoginFrame";

import Navbar from "./component/Navbar";
import ResponsiveFrameOption from "./component/ResponsivedFrameOption";

export default function LoginMainFrame() {

  return (

    <div className="w-full h-screen bg-gray-100 flex flex-col items-center">

      <Navbar option1="Sign Up" />
      <LoginFrame />
      <ResponsiveFrameOption option1="Sign Up " />

    </div>
  );
}
