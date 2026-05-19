import { TaskTable } from "~/components/task-table";
import type { Route } from "./+types/home";
import { AddTask } from "~/components/add-task";

export function meta({}: Route.MetaArgs) {
    return [
        { title: "New Task App" },
        { name: "2 DO", content: "Welcome to 2DO" },
    ];
}

export default function Home() {
    const addTaskHandler = () => {
        console.log("ADD TASK!");
    };
    return (
        <div>
            <AddTask onClickHandler={addTaskHandler} />
            <TaskTable />
        </div>
    );
}
