import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task-slice";
const store = configureStore({
    reducer: {
        task: taskReducer,
    },
});
export type RootState = ReturnType<typeof store.getState>;
export default store;
