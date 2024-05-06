import React, { useRef, useState } from "react";
function Todolist(){
    var [value,setValue]=useState("")
    let iref=useRef()
    return(
        <div> 
            <input type="text" ref={iref}/>
            <button>Add todo</button>
            <h1>{iref.current.value}</h1>
        </div>
    )
}
export default Todolist