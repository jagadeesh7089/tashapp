import React from "react";
import { connect } from "react-redux";

function Todolist(props){
    var [newtodo,setNewtodo]=React.useState("")

    return (
        <div className="border border-2 border-success p-2">
            <h1>Todolist</h1>
            <input type="text" onChange={(e)=>{setNewtodo(e.target.value)}}/>
            <button onClick={()=>{props.dispatch({type:"Addtodo",payload:newtodo})}}>ADD todo</button> 
            <ul>
                {
                    props.Todolistreducer.todos.map((todo)=>{
                        return <li>{todo}</li>
                    })
                }
            
            </ul>
        </div>
    )
}
export default  connect(store=>store) (Todolist)