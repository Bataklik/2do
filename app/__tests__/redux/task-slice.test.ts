import { expect, test } from "vitest";
import taskReducer, {
    addTask,
    completeTask,
    removeTask,
} from "~/features/task-slice";
import type { Task } from "~/types";

test("Should add a task", () => {
    const initialState: Task[] = [];

    const result = taskReducer(initialState, addTask("Testing"));
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Testing");
    expect(result[0].completed).toBe(false);
});

test("Should toggle a task", () => {
    const initialState: Task[] = [
        { id: "1", title: "Testing", completed: false },
        { id: "2", title: "No Testing", completed: false },
    ];

    const result = taskReducer(initialState, completeTask("1"));
    expect(result.length).toBe(2);
    expect(result[0].title).toBe("Testing");
    expect(result[0].completed).toBe(true);
});

test("Should remove a task", () => {
    const initialState: Task[] = [
        { id: "1", title: "Testing", completed: false },
        { id: "2", title: "No Testing", completed: false },
    ];

    const result = taskReducer(initialState, removeTask("2"));
    expect(result.length).toBe(1);
    expect(result[0].title).toBe("Testing");
    expect(result[0].completed).toBe(false);
});
