import React, { useState } from "react";

import { connect } from "react-redux";
import Todolistreducer from "./todolist reducer";
function Todolist(props){
    console.log(props)
    var [newtodo,setNewtodo]=useState("")
    return(
     <div>
        <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}} /> 
        <button onClick={()=>{props.dispatch({type:"Addtodo",paylaod:newtodo})}}>Addtodo</button>
        <div>
            {
              props.Todolistreducer.todos.map(todo=>{
                    return <li>{todo}</li>
                })
            }
        </div>
     </div>
    )
}
export default  connect(store=>store) (Todolist)