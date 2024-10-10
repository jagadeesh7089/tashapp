import React, { useState } from "react";

import { connect } from "react-redux";
import Todolistreducer from "./todolist reducer";
function Todolist(props){
    console.log(props)
    var [newtodo,setNewtodo]=useState("")
    
    return(
     <div>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} /> 
        <button onClick={()=>{props.add(newtodo)}}>Addtodo</button>
        <div>
            {
              props.todos.map(todo=>{
                    return <li>{todo}</li>
                })
            }
        </div>
     </div>
    )
}
export default  connect(function(state){
    return state.Todolistreducer
},function(dispatch){
    return{
        add:(newtodo)=>{dispatch({type:"Addtodo",payload:newtodo})}
    }
}) (Todolist)