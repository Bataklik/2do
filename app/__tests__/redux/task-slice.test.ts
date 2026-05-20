import { expect, test } from "vitest";
import taskReducer, { addTask } from "~/features/task-slice";
import type { Task } from "~/types";

test("Should add a task", () => {
    const initialState: Task[] = [];

    const result = taskReducer(initialState, addTask("Testing"));
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Testing");
    expect(result[0].completed).toBe(false);
});
