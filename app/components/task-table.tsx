import type { Task } from "~/types";
import { Table, TableBody } from "../components/ui/table";
import { TaskCell } from "./task-cell";
import type { BaseUIEvent } from "@base-ui/react/types";

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
    onClick: (
        event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>,
    ) => void;
}
export function TaskTable({
    tasks,
    onCheckedChanged,
    onClick,
}: TaskTableProps) {
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
                        onClick={onClick}
                    />
                ))}
            </TableBody>
        </Table>
    );
}
