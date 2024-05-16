import { createSlice } from "@reduxjs/toolkit";
const initialstate={
    count:0
}
export const counterSlice=createSlice({
    name:"counter",
    initialstate,
    reducers:{
        inc:(state,action)=>{
            state.count=state.cont+1
        },
        dec:(state,action)=>{
            state.count=state.cont-1
        },
    }
})
export const 
