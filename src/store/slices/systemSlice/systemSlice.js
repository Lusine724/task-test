import { createSlice } from "@reduxjs/toolkit";
import {fetchSystems} from "./systemApi";

const systemSlice = createSlice ({
    name: "system",
    reducers: {

    },
    initialState: {
        "systems": [

             ]
    },
    extraReducers: (bulder)=>{
        bulder.addCase(fetchSystems.fulfilled, (state, {payload})=>{
            return {
                ...state,
                systems: [
                    ...payload
                ]
            }

        })
    }
})

export default{
    reducer: systemSlice.reducer,
    selector: state => state.system

} 