import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addtodo } from "./todolistslice";

function Todolist(){
    var [newtodo,setNewtodo]=useState("")
   var {todos}= useSelector(state=>state.todolistReducer)
     var dispatch=useDispatch()
    return (
        <div className="border border-warning">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>&nbsp;
            <button onClick={()=>{dispatch(addtodo(newtodo))}} className="btn btn-success">Add todo</button>
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