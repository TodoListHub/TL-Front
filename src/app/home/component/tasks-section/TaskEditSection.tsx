
import { motion } from "framer-motion";
export default function TaskEditSection({isEdit , onClickhandler } : {isEdit : boolean , onClickhandler : ()=> void}){
    return(
        <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: isEdit ? 1 : 0, height: isEdit ? "100px" : 0 }}
                transition={{ duration: 0.5 }}
                className=" w-full h-[100px] overflow-hidden">

                <div className={`${isEdit ? " w-full h-[100px] items-center flex" : "hidden"}`}>

                    <textarea className='w-[60%] max-h-[80%] p-2 mt-2.5 ml-2 text-teal-700 bg-white border border-zinc-300 rounded-2xl'
                            name="edit tast text" id="textarea">
                    </textarea>

                    <div className='w-[30%] h-full flex items-center justify-center text-xl text-teal-800'> - Enter the edited text <br/>- and click Ok botton</div>

                    <div className='w-[10%] h-full flex justify-center items-center'>
                        <input onClick={onClickhandler} className='w-[50%] h-[40%] bg-teal-600 text-teal-100 font-bold rounded-md hover:scale-105' value={"OK"} type='button'/>
                    </div>
                    
                </div>

            </motion.div>
    )
}