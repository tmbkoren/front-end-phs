import { configureStore } from "@reduxjs/toolkit";
import langReducer from './features/langSlice';
import userReducer from './features/userSlice';

export const store = configureStore({
    reducer: {
        lang: langReducer,
        user: userReducer,
    },
})

