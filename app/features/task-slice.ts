import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Task } from "~/types";
// https://redux-toolkit.js.org/introduction/why-rtk-is-redux-today
// https://redux-toolkit.js.org/usage/usage-with-typescript#createslice
const taskSlice = createSlice({
    name: "2do",
    initialState: [],
    reducers: {
        addTask(state: Task[], action: PayloadAction<Task>) {
            state.push({
                id: action.payload.id,
                title: action.payload.title,
                description: action.payload.description,
                completed: action.payload.completed,
            });
        },
        completeTask(state: Task[], action: PayloadAction<number>) {
            const task = state.find((t) => t.id === action.payload);
            if (task) {
                task.completed = !task.completed;
            }
        },
    },
});

export const { addTask, completeTask: taskCompleted } = taskSlice.actions;
export default taskSlice.reducer;
