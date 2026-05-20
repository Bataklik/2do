import { combineReducers, configureStore } from "@reduxjs/toolkit";
import taskReducer from "./features/task-slice";

//* Redux-Persist
//? https://redux-toolkit.js.org/rtk-query/usage/persistence-and-rehydration
//? https://stackoverflow.com/questions/63761763/how-to-configure-redux-persist-with-redux-toolkit
//? https://medium.com/@eva.matova6/redux-persist-storage-options-from-localstorage-to-indexeddb-and-beyond-2d36ca3c0dc3
import {
    FLUSH,
    PAUSE,
    PERSIST,
    persistReducer,
    persistStore,
    PURGE,
    REGISTER,
    REHYDRATE,
} from "redux-persist";
const ssrSafeStorage = {
    getItem(key: string) {
        if (typeof window !== "undefined") {
            return Promise.resolve(window.localStorage.getItem(key));
        }
        return Promise.resolve(null);
    },
    setItem(key: string, value: string) {
        if (typeof window !== "undefined") {
            window.localStorage.setItem(key, value);
            return Promise.resolve();
        }
        return Promise.resolve();
    },
    removeItem(key: string) {
        if (typeof window !== "undefined") {
            window.localStorage.removeItem(key);
            return Promise.resolve();
        }
        return Promise.resolve();
    },
};

const rootReducer = combineReducers({
    task: taskReducer,
});
const persistConfig = {
    key: "root",
    version: 1,
    storage: ssrSafeStorage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
//? https://redux-toolkit.js.org/usage/usage-guide#use-with-redux-persist
export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [
                    FLUSH,
                    REHYDRATE,
                    PAUSE,
                    PERSIST,
                    PURGE,
                    REGISTER,
                ],
            },
        }),
});
export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
