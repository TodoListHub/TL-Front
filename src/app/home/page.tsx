"use client"
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

import AddTask from "./component/add-task/AddTask";
import AddTaskPanel from "./component/add-task/AddTaskPanel";
import InformationSectionFrame from "./component/information-section/InformationSectionFrame";
import TasksSectionFrame from "./component/tasks-section/TasksSectionFrame";

export default function HomeFrame() {
    const [user, setUser] = useState(null);
    const router = useRouter();

    useEffect(() => { 
        const CheckLogin = async () => {
            try {
                const response = await axios.get("https://tl-backend-production.up.railway.app/status", {
                    withCredentials: true,
                    headers: { "Content-Type": "application/json" }
                });

                // If the request is successful, store the user information
                setUser(response.data.user);
            } catch (error) {
                console.error("User is not logged in:", error);
                router.push("/login"); // Redirect to login page if the user is not authenticated
            }
        };

        CheckLogin();
    }, []);

    return user ? ( 
        <div className="w-screen h-screen bg-gray-100 flex place-items-center justify-center">
            <TasksSectionFrame />
            <AddTask />
            <InformationSectionFrame />
            <AddTaskPanel />
        </div>
    ) : (
        <div className="w-screen h-screen flex items-center justify-center">
            <p>Checking authentication...</p>
        </div>
    );
}
