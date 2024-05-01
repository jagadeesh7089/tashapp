import React,{ useCallback, useState } from "react";
import Todo from "./todo";
function Todolist(){
    console.log("todolist rendered")
    var [newtodo,setNewtodos]=useState()
    var [todos,setTodos]=useState(["jagadeesh","Lakshman","surubabu","Gandham"])
    function add(){
        setTodos([...todos,newtodo])
        
    }
    var deletetodo=useCallback( function(id){
        
          setTodos((oldtodo)=>{
            oldtodo.splice(id,1)
            return [...oldtodo]
          })
      },[])
    return(
        <div>
            <input type="text" onChange={(e)=>setNewtodos(e.target.value)} />
            <button onClick={()=>{add()}}>Add Todo</button>
            {
            
                todos.map((s,i)=>{
                    return <Todo todo={s} deltodo={deletetodo}id={i} ></Todo>
                })
            }
        </div>
    )
}
export default Todolist