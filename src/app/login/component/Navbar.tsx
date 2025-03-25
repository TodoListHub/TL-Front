"use client";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar({ option1 }: { option1: string }) {
  const router = useRouter();
  const pathname = usePathname();

  const RouteHandlerLogin = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push("/login");
  };

  const RouteHandlerSignIn = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push("/signin");
  };

  const RouteHandlerForgetPassword = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push("/forget-password");
  };

  const RouteHandlerEmail = (event: React.MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault();
    router.push("/loginwithemail");
  };



  let menuItems;
  switch (pathname) {
    case "/login":
    case "/forget-password":
    case "/loginwithemail":
      case "/reset-password":
      menuItems = (
        <>
          <li>
            <a onClick={RouteHandlerSignIn} className="text-teal-600 bg-gray-200 mr-1 border">
              {option1}
            </a>
          </li>
          <li>
            <a className="text-teal-600 bg-gray-200 mr-1 border" onClick={RouteHandlerEmail}>Log In with Email</a>
          </li>
          <li>
            <a className="text-teal-600 bg-gray-200 border" onClick={RouteHandlerForgetPassword}>Forget Password</a>
          </li>
        </>
      );
      break;

    case "/signin":
      menuItems = (
          <li>
            <a onClick={RouteHandlerLogin} className="text-teal-600 bg-gray-200 mr-1 border">
              {option1}
            </a>
          </li>
      );
      break;

    default:
      menuItems = (
        <li>
          <a className="text-teal-600 bg-gray-200 mr-1 border">
            {option1}
          </a>
        </li>
      );
  }

  return (
    <div className="navbar bg-gray-100 w-[95%] hover:scale-[99%] duration-500 mb-24 mt-4">
      <div className="flex-1">
        <div className="border p-2 rounded-md bg-gray-100 text-teal-600 text-2xl">Todo-List</div>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-1">{menuItems}</ul>
      </div>
    </div>
  );
}
