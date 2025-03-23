import AddTask from "./component/add-task/AddTask"
import AddTaskPanel from "./component/add-task/AddTaskPanel"
import InformationSectionFrame from "./component/information-section/InformationSectionFrame"
import TasksSectionFrame from "./component/tasks-section/TasksSectionFrame"

export default function HomeFrame(){


    return ( 
        <div className="w-screen h-screen bg-gray-100 flex place-items-center justify-center">

            <TasksSectionFrame />
            <AddTask />
            <InformationSectionFrame />
            <AddTaskPanel />
            
        </div>
    )
}