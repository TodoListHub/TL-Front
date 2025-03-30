"use client";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

export default function ResponsiveFrameOption({ option1 }: { option1: string }) {
  const router = useRouter();
  const pathname = usePathname();
  const [clicked, setClicked] = useState<{ [key: string]: boolean }>({});

  const handleClick = (key: string, callback: () => void) => {
    setClicked((prev) => ({ ...prev, [key]: !prev[key] }));
    callback();
  };

  const RouteHandlerLogin = () => router.push("/login");
  const RouteHandlerSignIn = () => router.push("/signin");
  const RouteHandlerForgetPassword = () => router.push("/forget-password");
  const RouteHandlerEmail = () => router.push("/login/withEmail");

  let menuItems;
  switch (pathname) {
    case "/login":
    case "/login/withEmail":
    case "/forget-password":
    case "/loginwithemail":
    case "/reset-password":
      menuItems = (
        <>
          <li className="w-[300px] sm:w-[420px]">
            <a onClick={() => handleClick("signin", RouteHandlerSignIn)}
               className={`text-teal-600 text-xl shadow-2xl h-12 shadow-gray-800 bg-white px-4 py-1 rounded-sm flex items-center justify-center duration-500 ${clicked["signin"] ? "bg-teal-600 text-white scale-98" : "hover:bg-teal-600 hover:text-white hover:scale-98"}`}>
              {option1}
            </a>
          </li>

          <li className="relative w-[300px] sm:w-[420px]">
            <a onClick={() => handleClick("email", RouteHandlerEmail)}
               className={`text-teal-600 shadow-2xl shadow-gray-800 bg-white px-4 py-1 rounded-sm block text-center duration-500 ${clicked["email"] ? "bg-teal-50 scale-98" : "hover:bg-teal-50 hover:scale-98"}`}>
              Log In with Email
            </a>
            <img src="/gmail-svgrepo-com.svg" className={`w-7 h-7 absolute top-0.5 left-1 duration-500 ${clicked["email"] ? "scale-90" : "hover:scale-90"}`} alt=""/>
          </li>
          
          <li className="relative w-[300px] sm:w-[420px]">
            <a onClick={() => handleClick("forget", RouteHandlerForgetPassword)}
               className={`text-teal-600 shadow-2xl shadow-gray-800 bg-white px-4 py-1 rounded-sm block text-center duration-500 ${clicked["forget"] ? "bg-teal-50 scale-98" : "hover:bg-teal-50 hover:scale-98"}`}>
              Forget Password
            </a>
            <img src="/password-svgrepo-com.svg" className={`w-5 h-5 absolute top-1.5 left-1 duration-500 ${clicked["forget"] ? "scale-90" : "hover:scale-90"}`} alt=""/>
          </li>
        </>
      );
      break;

    case "/signin":
      menuItems = (
        <li className="relative w-[300px] sm:w-[420px]">
          <a onClick={() => handleClick("login", RouteHandlerLogin)}
            className={`text-teal-600 shadow-2xl h-12 flex text-xl shadow-gray-800 bg-white px-4 py-1 rounded-sm b justify-center items-center duration-500 ${clicked["login"] ? "bg-teal-50 scale-98" : "hover:bg-teal-50 hover:scale-98"}`}>
            {option1}
          </a>
        </li>
      );
      break;
    
    default:
      menuItems = (
        <li>
          <a className="text-teal-600 bg-gray-200 px-4 py-2 rounded-md border block text-center">
            {option1}
          </a>
        </li>
      );
  }

  return (
    <div className="flex flex-col items-center md:hidden navbar sm:w-[420px] py-4 duration-500 md:mb-10 lg:mb-24 mt-2">
      <ul className="flex flex-col gap-2 justify-center items-center w-full ">{menuItems}</ul>
    </div>
  );
}
