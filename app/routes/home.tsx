import { TaskTable } from "~/components/task-table";
import type { Route } from "./+types/home";
import { AddTask } from "~/components/add-task";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import { addTask } from "~/features/task-slice";
import { useState } from "react";
export function meta({}: Route.MetaArgs) {
    return [
        { title: "New Task App" },
        { name: "2 DO", content: "Welcome to 2DO" },
    ];
}

export default function Home() {
    const tasks = useSelector((state: RootState) => state.task);
    const dispatch = useDispatch();
    const [taskTitle, setTaskTitle] = useState<string>("");

    const addTaskHandler = () => {
        console.log("addTaskHandler " + taskTitle);

        if (!taskTitle) return;
        dispatch(addTask(taskTitle));
        setTaskTitle("");
    };
    return (
        <div>
            <AddTask
                onClickHandler={addTaskHandler}
                text={taskTitle}
                setText={setTaskTitle}
            />
            <TaskTable tasks={tasks} />
        </div>
    );
}
