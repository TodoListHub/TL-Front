"use client"
import useAuthStore from "@/Store/useAuthStore"

export default function InformationSectionFrame (){

    const {addsection} = useAuthStore()

    return ( 
        <div className={` ${addsection ? "w-0" : "w-[25%] " } h-[90%] duration-500 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center`}>

        </div>
    )
}