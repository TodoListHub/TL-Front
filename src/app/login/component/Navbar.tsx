

export default function Navbar(){

    return(
        <div className="navbar bg-gray-100 w-[95%]  hover:scale-[99%] duration-500 mb-24 mt-4">
          <div className="flex-1">
            <div className="border p-2 rounded-md bg-gray-100 text-teal-600 text-2xl">Todo-List</div>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li><a className="text-teal-600 bg-gray-200 mr-1 border">Sign In </a></li>
              <li><a className="text-teal-600 bg-gray-200 mr-1 border">Log In with Email  </a></li>
              <li><a className="text-teal-600 bg-gray-200 border">Forget Password </a></li>
            </ul>
          </div>
      </div>
    )

}