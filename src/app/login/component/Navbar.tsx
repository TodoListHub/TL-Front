"use client";
import { usePathname,useRouter } from "next/navigation";

export default function Navbar( {option1} : {option1 : string} ){ 

    const router = useRouter()
    const pathname = usePathname()

    const RouteHandler = (event: React.MouseEvent<HTMLAnchorElement>) => {
      event.preventDefault(); 
      if (pathname === "/login") router.push("/signin");
      else if (pathname === "/signin") router.push("/login");
    };  


    return(
        <div className="navbar bg-gray-100 w-[95%]  hover:scale-[99%] duration-500 mb-24 mt-4">
          <div className="flex-1">
            <div className="border p-2 rounded-md bg-gray-100 text-teal-600 text-2xl">Todo-List</div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a onClick={RouteHandler} className="text-teal-600 bg-gray-200 mr-1 border">  {`${option1}`} </a></li>
              <li className={`${pathname==="/login" ? "block" : "hidden" }`} ><a className="text-teal-600 bg-gray-200 mr-1 border">Log In with Email  </a></li>
              <li className={`${pathname==="/login" ? "block" : "hidden" }`}><a className="text-teal-600 bg-gray-200 border">Forget Password </a></li>
            </ul>
          </div>
      </div>
    )

}