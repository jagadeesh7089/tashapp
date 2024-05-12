import React from "react";
import { connect } from "react-redux";
import Todolistreducer from "./todolist reducer";
function Todolist(props){
    console.log(props)
    return(
     <div>
        <input type="text" /> 
        <button onClick={()=>{props.dispatch({type:"Addtodo",paylaod:})}}>Add todo</button>
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