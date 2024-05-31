import { useState , useEffect } from "react";

const useLocalStorage = (key) => {

    const [value, setValue] = useState(() => {
        const storedTasks = JSON.parse(localStorage.getItem(key)) || [];
        return storedTasks;
    })

    useEffect(() => {
        localStorage.setItem("todo-app-tasks",JSON.stringify(value));
    }, [key,value])

    return [value, setValue]
}
export default useLocalStorage;