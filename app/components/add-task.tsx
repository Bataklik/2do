import React from "react";
import { Field } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AddTaskProps {
    onClickHandler: () => void;
}
export function AddTask({ onClickHandler }: AddTaskProps) {
    return (
        <Field orientation={"horizontal"} className="mb-5">
            <Input type="text" placeholder="Add a new task..." />
            <Button onClick={onClickHandler}>Add new task</Button>
        </Field>
    );
}
