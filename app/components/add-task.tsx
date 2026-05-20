import React from "react";
import { Field } from "./ui/field";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface AddTaskProps {
    onClickHandler: () => void;
    text: string;
    setText: React.Dispatch<React.SetStateAction<string>>;
}
export function AddTask({ onClickHandler, text, setText }: AddTaskProps) {
    return (
        <Field orientation={"horizontal"} className="mb-5">
            <Input
                type="text"
                placeholder="Add a new task..."
                value={text}
                onChange={(e) => setText(e.target.value)}
            />
            <Button onClick={onClickHandler}>Add new task</Button>
        </Field>
    );
}
