import { configureStore } from "@reduxjs/toolkit";
import globalScope from "./reducer";

export const store = configureStore({
    reducer: {
        global:globalScope
    }
})