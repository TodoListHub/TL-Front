import Collapse from "../../component/collapse";
import InputEmail from "../../component/InputEmail";
import InputPassword from "../../component/InputPassword";
import SubmitBotton from "../../component/SubmitBotton";


export default function LoginWithEmailFrame () {

    return( 

        <div className="h-[330px]    w-[300px]
                        sm:h-[360px] sm:w-[420px]
                        md:h-[480px] md:w-[500px]
                        lg:h-[480px] lg:w-[500px]
                        mt-[50px] md:mt-[60px] lg:mt-0
                        bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center">

            <div className=" text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                LogIn With Email
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />

            <div className="hidden md:block mt-4">
                <Collapse />
            </div>
            <InputEmail  />
            <InputPassword title="password"  />
            <SubmitBotton title="withEmail" />
            
        </div>
    )
}