import type { Task } from "~/types";
import { Table, TableBody } from "../components/ui/table";
import { TaskCell } from "./task-cell";

interface TaskTableProps {
    tasks: Task[];
    onCheckedChanged: (
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
    ) => void;
}
export function TaskTable({ tasks, onCheckedChanged }: TaskTableProps) {
    return (
        <Table>
            <TableBody>
                {tasks.map((task) => (
                    <TaskCell
                        key={task.id}
                        taskId={task.id.toString()}
                        complete={task.completed}
                        task={task.title}
                        onCheckedChanged={onCheckedChanged}
                    />
                ))}
            </TableBody>
        </Table>
    );
}
