import { createSlice } from "@reduxjs/toolkit";

export const globalScope = createSlice({
    name: "global",
    initialState: {
        mode: "dark",
        userId: "63701cc1f03239b7f700000e"
    },
    reducers: {
        setMode: (state) => {
            state.mode= state.mode==="light"? "dark":"light"
        }
    }
})

export const { setMode } = globalScope.actions
export default globalScope.reducer