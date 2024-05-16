import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:["jagadeesh","lakshman","suribabu","Ayyappa","Anil"]
}

export const todolistSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
export const {addtodo}=todolistSlice.actions
export default todolistSlice.reducer