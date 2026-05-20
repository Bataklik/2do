import { TaskTable } from "~/components/task-table";
import type { Route } from "./+types/home";
import { AddTask } from "~/components/add-task";
import { useDispatch, useSelector } from "react-redux";
import type { RootState } from "~/store";
import { addTask, completeTask, removeTask } from "~/features/task-slice";
import { useState } from "react";
import type { BaseUIEvent } from "@base-ui/react/types";
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

    const toggleTaskCompletdHandler = (
        e: boolean,
        eventDetails: {
            reason: "none";
            event: Event;
            cancel: () => void;
            allowPropagation: () => void;
            isCanceled: boolean;
            isPropagationAllowed: boolean;
            trigger: Element | undefined;
        },
    ) => {
        console.log("toggleTaskCompletdHandler ");
        const taskId = (eventDetails.event.target as HTMLInputElement)?.name;
        dispatch(completeTask(taskId));
    };

    const removeTaskHandler = (
        event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>,
    ) => {
        console.log("removeTaskHandler ");
        const taskId = event.currentTarget.name;
        console.log(taskId);
        dispatch(removeTask(taskId));
    };

    return (
        <div>
            <AddTask
                onClickHandler={addTaskHandler}
                text={taskTitle}
                setText={setTaskTitle}
            />
            <TaskTable
                tasks={tasks}
                onCheckedChanged={toggleTaskCompletdHandler}
                onClick={removeTaskHandler}
            />
        </div>
    );
}
