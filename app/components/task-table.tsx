import type { Task } from "~/types";
import { Table, TableBody } from "../components/ui/table";
import { TaskCell } from "./task-cell";

interface TaskTableProps {
    tasks: Task[];
}
export function TaskTable({ tasks }: TaskTableProps) {
    return (
        <Table>
            <TableBody>
                {tasks.map((task) => (
                    <TaskCell
                        key={task.id}
                        complete={task.completed}
                        task={task.title}
                    />
                ))}
            </TableBody>
        </Table>
    );
}
