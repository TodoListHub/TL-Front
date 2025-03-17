import Input from "./Input";


export default function LoginFrame () {

    return( 

        <div className="h-[450px] w-[500px] opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center space-y-5 ">
            <h1 className="bg-zinc-100 text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500"> Log In </h1>
            <Input label="User Name" />
            <Input label="password" />

        </div>
    )
}