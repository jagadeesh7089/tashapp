import React from "react";
import { useSelector } from "react-redux";

function Todolist(){
    var {todos}=useSelector(state=>state.todoReducer)
    return (
        <div>
            
        </div>
    )
}
export default Todolist