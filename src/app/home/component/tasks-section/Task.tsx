
import { green, pink, teal } from '@mui/material/colors';
import Checkbox from '@mui/material/Checkbox';

export default function Task( {TaskText , CheckStatus} : {TaskText : string , CheckStatus : boolean}){

    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };

    return(
        <div className="w-[99%] h-[15%] flex bg-amber-50 rounded-2xl shadow-2xl pb-1 mb-1 hover:scale-99 hover:bg-teal-50 duration-300">

            <p className="h-full w-[80%] overflow-y-auto text-teal-900 text-2xl p-2 flex items-center"> 
                {TaskText}
            </p>

            <div className='h-full w-[10%]'></div>

            <div className="h-full w-[10%] text-2xl p-2 flex flex-col items-center justify-center border-l ">

                    <img className="w-10 h-10 mb-2 " src="/edit-3-svgrepo-com.svg" alt="salam " />
                    <Checkbox {...label} checked={CheckStatus} sx={{'& .MuiSvgIcon-root': { fontSize: 40 } ,
                                                             color : teal[600], 
                                                             '&.Mui-checked': {color : teal[600]} }} />

            </div>

        </div>
    )
    
}