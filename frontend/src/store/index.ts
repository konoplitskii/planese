import {configureStore} from "@reduxjs/toolkit";
import planesSlice from "./planes/planesSlice";

export const store = configureStore({
    reducer:{
        planes:planesSlice
    }
})

//types global store
export type RootState = ReturnType<typeof store.getState>