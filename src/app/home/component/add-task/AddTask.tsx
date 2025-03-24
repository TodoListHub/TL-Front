"use client"
import useAuthStore from "@/Store/useAuthStore"

export default function AddTask (){

    const {addsection , setAddsection} = useAuthStore() 


    const onClickhandler = ()=>{
        setAddsection(!addsection)
    }

    return(

        <div className="w-20 h-[90%] rounded-xl ml-2 mr-4">
            <div onClick={onClickhandler} className="w-20 h-12 cursor-pointer bg-teal-700 rounded-md shadow-2xl shadow-zinc-800 border-2 border-teal-700 hover:scale-105 duration-500
                            hover:bg-teal-600 text-2xl text-white flex justify-center items-center ">
                Add
            </div>

        </div>
    )
}