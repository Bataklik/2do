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
    onClick: (
        event: BaseUIEvent<React.MouseEvent<HTMLButtonElement, MouseEvent>>,
    ) => void;
}
export function TaskCell({
    taskId,
    complete,
    task,
    onCheckedChanged,
    onClick,
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
                    name={taskId}
                    size="icon"
                    aria-label="Submit"
                    onClick={onClick}
                >
                    <Trash />
                </Button>
            </TableCell>
        </TableRow>
    );
}
