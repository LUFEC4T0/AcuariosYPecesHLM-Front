import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./reduces/auth.reduces";

const store = configureStore({
    reducer: {
        authReducer
    },
})

export default store;