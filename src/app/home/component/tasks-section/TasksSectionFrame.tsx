import Task from "./Task";


export default function TasksSectionFrame (){

    return(

        <div className="w-[65%] h-[90%] bg-white opacity-90 shadow-2xl border-zinc-300 rounded-xl overflow-y-auto
                        flex flex-col items-center p-1 pt-2">
            <Task CheckStatus={true} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn"  />
            <Task CheckStatus={false} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn" />
            <Task CheckStatus={true} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn" />
             <Task CheckStatus={true} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn" />
            <Task CheckStatus={false} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn" />
            <Task CheckStatus={true} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn" />
            <Task CheckStatus={true} TaskText="ssnjcdn djnc jnc jd jdn njnjcnjncjn jcnjcndjcncn dcdncdc
                            ncd ndjncjdn cndc jdn jdn
                            ndjcndjn cdnj ndjncdjnc jdn dn" />
                            
        </div>
    )
}