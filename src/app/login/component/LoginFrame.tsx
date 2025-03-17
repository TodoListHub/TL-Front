import Input from "./Input";
import InputPassword from "./InputPassword";


export default function LoginFrame () {

    return( 

        <div className="h-[450px] w-[500px] opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center  ">
            <div className=" text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                Log In 
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />
            <div className="text-teal-600 w-full h-[80px] text-sm flex justify-start ml-10 items-center">
                - Todo List Login panel <br /> - please enter your username & password 
            </div>
            
            <Input label="User Name" />
            <InputPassword />

        </div>
    )
}