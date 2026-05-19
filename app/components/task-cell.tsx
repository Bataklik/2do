import { TableCell, TableRow } from "../components/ui/table";
import { Checkbox } from "~/components/ui/checkbox";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";

interface TaskCellProps {
    complete: boolean;
    task: string;
    onClickHandler?: () => void;
}
export function TaskCell({ complete, task, onClickHandler }: TaskCellProps) {
    return (
        <TableRow>
            <TableCell>
                <Checkbox checked={complete} />
            </TableCell>
            <TableCell>{task}</TableCell>
            <TableCell>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Submit"
                    onClick={onClickHandler}
                >
                    <Trash />
                </Button>
            </TableCell>
        </TableRow>
    );
}
