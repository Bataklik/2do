import { Table, TableBody } from "../components/ui/table";
import { TaskCell } from "./task-cell";

export function TaskTable() {
    return (
        <Table>
            <TableBody>
                <TaskCell complete={false} task={"delectus aut autem"} />
                <TaskCell
                    complete={false}
                    task={"quis ut nam facilis et officia qui"}
                />
                <TaskCell complete={false} task={"fugiat veniam minus"} />
                <TaskCell
                    complete={false}
                    task={
                        "laboriosam mollitia et enim quasi adipisci quia provident illum"
                    }
                />
            </TableBody>
        </Table>
    );
}
