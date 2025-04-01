"use client";
import { motion } from "framer-motion";
import useAuthStore from "@/Store/useAuthStore";
import useUserInformation from "../../../../Store/useUserInformation";
import { useState, useEffect } from "react";

export default function InformationSectionFrame() {
    const { totalCount, trueCount, falseCount, user } = useUserInformation();
    const { addsection } = useAuthStore();
    const [isOpen, setIsOpen] = useState(false);

    // Check screen size on mount (avoid window access issues in SSR)
    useEffect(() => {
        if (window.innerWidth >= 1024) {
            setIsOpen(true);
        }
    }, []);

    return (
        <div
            className={`${
                addsection ? "w-0 hidden rounded-xl" : "w-[100%] lg:w-[25%] rounded-md mt-2 "
            } h-auto lg:h-[70%] duration-500 bg-white opacity-90 shadow-2xl border-zinc-300 flex flex-col items-center`}>
            {!addsection && (
                <>
                    {/* Show toggle only on smaller screens */}
                    <motion.h1
                        onClick={() => setIsOpen(!isOpen)}
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className={`w-full h-16 lg:h-20 text-2xl lg:text-4xl mb-5 text-teal-800 font-semibold flex justify-center items-center 
                                   cursor-pointer select-none hover:scale-105 duration-300 
                                   ${isOpen || window.innerWidth >= 1024 ? "lg:cursor-default" : "cursor-pointer"}`}
                    >
                        {window.innerWidth < 1024 && (isOpen ? "Information ⬆" : "Information ⬇")}
                        {window.innerWidth >= 1024 && "Information"}
                    </motion.h1>

                    {/* Info content - Always visible on lg+ screens */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: isOpen || window.innerWidth >= 1024 ? "auto" : 0,
                            opacity: isOpen || window.innerWidth >= 1024 ? 1 : 0
                        }}
                        transition={{ duration: 0.5 }}
                        className={`w-full flex flex-col items-center overflow-hidden`}
                    >
                        {[
                            `User name : ${user.username}`,
                            `Email : ${user.email}`,
                            `All tasks : ${totalCount}`,
                            `Completed : ${trueCount}`,
                            `Pending : ${falseCount}`,
                        ].map((text, index) => (
                            <motion.h1
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.5, delay: index * 0.2 }}
                                className="w-[95%] h-16 lg:h-20 rounded-md hover:scale-98 duration-700
                                           overflow-y-auto bg-teal-50 shadow-2xl shadow-zinc-500 mb-3 pl-3 flex justify-start items-center text-xl lg:text-2xl text-teal-800"
                            >
                                {text}
                            </motion.h1>
                        ))}
                    </motion.div>
                </>
            )}
        </div>
    );
}
