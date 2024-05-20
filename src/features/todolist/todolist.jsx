import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "./todolistslice";

function Todolist(){
    var [newtodo,setNewtodo]=useState("")
   var {todos}= useSelector(state=>state.todolistReducer)
     var dispatch=useDispatch()
    return (
        <div>
            <h1>todolist</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <button onClick={()=>{dispatch(addtodo(newtodo))}}>Add todo</button>
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