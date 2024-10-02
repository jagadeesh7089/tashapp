import { createSlice } from "@reduxjs/toolkit"

const initialState={
    count:0
}

export const counterSlice=createSlice({
    name:'counterslice',
    initialState,
    reducers:{
        inc:(state,action)=>{
            state.count=state.count+1
        },

        dec:(state,action)=>{

            state.count=state.count-1

        }
    }

})
export const {dec,inc}=counterSlice.actions
export  default counterSlice.reducer




