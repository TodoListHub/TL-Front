"use client"
import useAuthStore from "@/Store/useAuthStore"
import { Button }  from "@mui/material"
import { teal } from "@mui/material/colors"

export default function AddTaskPanel (){

    const {addsection} = useAuthStore();
    
    const onChangehandler = (even : React.ChangeEvent<HTMLTextAreaElement>)=> {
        console.log(even.target.value)
    }

    return ( 
        <div className={`${addsection ? "w-[25%] h-[50%]" : "w-0 h-[90%]" }  duration-500
                        opacity-90 shadow-2xl border-zinc-300 
                        rounded-xl flex flex-col items-center `}>

                <h1 className={`${addsection ? "flex items-center justify-center text-teal-700 rounded-xl text-3xl w-full h-20" :
                                "w-0 h-20 duration-500 text-transparent" }`}> Add Task</h1>

                <hr className="w-[90%]" />

                <textarea   className={`w-[95%] max-h-60 min-h-60 mt-5 border-zinc-300 ${addsection ? "p-5 border-2" : "p-0" } text-xl
                                    text-teal-700 bg-white rounded-md shadow-2xl shadow-zinc-400 overflow-y-auto`}
                            onChange={onChangehandler}>
                            
                </textarea>

                {addsection ? 

                    <Button   
                        sx={{ width: "70%", marginTop: 5 , background : teal[400] }} 
                        variant="contained">
                        Add task
                    </Button> : true }
                
        </div>
    )
}