import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:["jagadeesh","Lakshman","vamsi","Anil","suri"]
}
export var todolistSlice=createSlice({
    name:"todolist",
    initialState,
    reducer:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload)
        }
    }
})
 export var {addtodo}=todolistSlice.actions
export default todolistSlice.reducer