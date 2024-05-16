import { createSlice } from "@reduxjs/toolkit";
const initialState={
    todos:["jagadeesh","Lakshman","vamsi","Anil","suri"]
}
export var todolistSlice=createSlice({
    name:"todolist",
    initialState,
    reducers:{
        addtodo:(state,action)=>{
            state.todos.push(action.payload)
            document.getElementById("d1").value=""
        }
    }
    
})
 export var {addtodo}=todolistSlice.actions
export default todolistSlice.reducer