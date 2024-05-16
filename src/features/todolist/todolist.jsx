import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "./todolistSlice";

function Todolist(){
    var [newtodo,setNewtodo]=useState("")
    var {todos}=useSelector(state=>state.todoReducer)
    var dispatch=useDispatch()
    return (
        <div>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} id="d1"/>
            <button onClick={()=>dispatch(addtodo(newtodo))}>Add todo</button>
            <ul>
                {
                  todos.map(todo=>{
                    return <li>{todo}</li>
                  })  
                }
            </ul>
        </div>
    )
}
export default Todolist