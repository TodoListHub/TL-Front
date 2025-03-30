

import InputPasswordRepeat from "@/app/login/component/InputPasswordRepeat";
import Input from "../../login/component/Input";
import InputEmail from "../../login/component/InputEmail";
import InputPassword from "../../login/component/InputPassword";


import SubmitBotton from "../../login/component/SubmitBotton";


export default function SignInFrame ({title} : {title : string}) {

    return( 

        <div className="h-[450px]    w-[300px]
                        sm:h-[460px] sm:w-[420px]
                        md:h-[480px] md:w-[500px]
                        lg:h-[480px] lg:w-[500px]
                        mt-[50px] md:mt-[40px] lg:mt-0
                      bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center">
            <div className=" text-teal-600  w-full h-[70px] flex justify-center items-center rounded-t-xl text-2xl hover:scale-95 hover:rounded-xl duration-500">
                {title}
            </div>
            <hr className="text-teal-600 mb-2 border-2 w-[80%]" />

            <Input  />
            <InputPassword title="Password"/>
            <InputPasswordRepeat title="Repeat Password" />
            <InputEmail />
            <SubmitBotton title="signin" />
            
            

        </div>
    )
}