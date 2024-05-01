import React,{ useState } from "react";
function Todolist(){
    
    var [todo,setTodo]=useState(["jagadeesh","Lakshman","surubabu","Gandham"])
    return(
        <div>
            {
                todo.map(s=><li>{s}</li>)
            }
        </div>
    )
}
export default Todolist