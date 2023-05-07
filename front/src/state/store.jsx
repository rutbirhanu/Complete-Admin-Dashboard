import { configureStore } from "@reduxjs/toolkit";
import globalScope from "./reducer";
import { api } from "./api";
import { setupListeners } from "@reduxjs/toolkit/dist/query";

export const store = configureStore({
    reducer: {
        global: globalScope,
        [api.reducerPath]:api.reducer
    },
    middleware:(getDefault)=>getDefault().concat(api.middleware)
})

setupListeners(store.dispatch)