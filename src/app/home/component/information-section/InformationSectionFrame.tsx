"use client"
import useAuthStore from "@/Store/useAuthStore"
import useUserInfotmation from "../../../../Store/useUserInformation"


export default function InformationSectionFrame (){

    const {totalCount ,trueCount , falseCount , user } = useUserInfotmation()
    const {addsection} = useAuthStore()

    return ( 
        addsection? 
        <div className={` ${addsection ? "w-0" : "w-[25%] " } h-[90%] duration-500 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center`}>
        
        </div>
        :
        <div className={` ${addsection ? "w-0" : "w-[25%] " } h-[90%] duration-500 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center`}>
            <h1 className="w-full h-20 text-4xl mb-7 text-teal-800 font-semibold flex justify-center items-center ">
                Infromation 
            </h1>

            <h1 className="w-[95%] h-20 rounded-md hover:scale-98 duration-700 bg-teal-50 shadow-2xl shadow-zinc-500 mb-3 pl-3 flex justify-start items-center text-2xl text-teal-800">
                User name : {user.username}
            </h1>
            <h1 className="w-[95%] h-20 rounded-md hover:scale-98 duration-700 bg-teal-50 shadow-2xl shadow-zinc-500 mb-3 pl-3 flex justify-start items-center text-2xl text-teal-800 ">
                Email : {user.email}
            </h1>
            <h1 className="w-[95%] h-20 rounded-md hover:scale-98 duration-700 bg-teal-50 shadow-2xl shadow-zinc-500 mb-3 pl-3 flex justify-start items-center text-2xl text-teal-800">
                All tasks : {totalCount}
            </h1>
            <h1 className="w-[95%] h-20 rounded-md hover:scale-98 duration-700 bg-teal-50 shadow-2xl shadow-zinc-500 mb-3 pl-3 flex justify-start items-center text-2xl text-teal-800">
                Completed : {trueCount}
            </h1>
            <h1 className="w-[95%] h-20 rounded-md hover:scale-98 duration-700 bg-teal-50 shadow-2xl shadow-zinc-500 mb-3 pl-3 flex justify-start items-center text-2xl text-teal-800">
                Pending : {falseCount}
            </h1>
        </div> 
    )
}