import { TableCell, TableRow } from "../components/ui/table";
import { Checkbox } from "~/components/ui/checkbox";
import { Trash } from "lucide-react";
import { Button } from "./ui/button";
import type { BaseUIEvent } from "@base-ui/react/types";

interface TaskCellProps {
    taskId: string;
    complete: boolean;
    task: string;
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
export function TaskCell({
    taskId,
    complete,
    task,
    onCheckedChanged,
}: TaskCellProps) {
    return (
        <TableRow>
            <TableCell>
                <Checkbox
                    name={taskId}
                    checked={complete}
                    onCheckedChange={onCheckedChanged}
                />
            </TableCell>
            <TableCell>{task}</TableCell>
            <TableCell>
                <Button
                    variant="outline"
                    size="icon"
                    aria-label="Submit"
                    onClick={(e) => console.log(e)}
                >
                    <Trash />
                </Button>
            </TableCell>
        </TableRow>
    );
}
