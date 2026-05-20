import { createSlice, type PayloadAction, nanoid } from "@reduxjs/toolkit";
import type { Task } from "~/types";
// https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today
// https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
// https://stackoverflow.com/questions/71446347/redux-toolkit-generate-and-return-an-id-return-data-from-action
const taskSlice = createSlice({
    name: "2do",
    initialState: [] as Task[],
    reducers: {
        addTask: {
            prepare(title: string) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        completed: false,
                    } as unknown as Task,
                };
            },
            reducer(state: Task[], action: PayloadAction<Task>) {
                state.push({
                    id: action.payload.id,
                    title: action.payload.title,
                    completed: action.payload.completed,
                });
            },
        },
        completeTask(state: Task[], action: PayloadAction<string>) {
            const task = state.find((t) => String(t.id) === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, completeTask: taskCompleted } = taskSlice.actions;
export default taskSlice.reducer;
