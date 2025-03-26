"use client"
import { motion } from "framer-motion";
import useAuthStore from "@/Store/useAuthStore";
import useUserInfotmation from "../../../../Store/useUserInformation";

export default function InformationSectionFrame() {
    const { totalCount, trueCount, falseCount, user } = useUserInfotmation();
    const { addsection } = useAuthStore();

    return (
        <div className={` ${addsection ? "w-0" : "w-[25%]"} h-[70%] duration-500 bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl flex flex-col items-center`}>
           {
            addsection ? true :
            <>
             <motion.h1
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="w-full h-20 text-4xl mb-7 text-teal-800 font-semibold flex justify-center items-center">
                Information
            </motion.h1>

            {[  
                `User name : ${user.username}`,  
                `Email : ${user.email}`,  
                `All tasks : ${totalCount}`,  
                `Completed : ${trueCount}`,  
                `Pending : ${falseCount}`

            ].map((text, index) => (
                <motion.h1
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.3 }}
                    className="w-[95%] h-20 rounded-md hover:scale-98 duration-700 bg-teal-50 shadow-2xl shadow-zinc-500
                               mb-3 pl-3 flex justify-start items-center text-2xl text-teal-800">
                    {text}
                </motion.h1>
            ))}
            </> 
           }
        </div>
    );
}
