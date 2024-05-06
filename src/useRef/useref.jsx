import React, { useEffect, useRef, useState } from "react";
import Child from "./childref";

function Todolist(){
    let [value,setValue]=useState("")
    var iref=useRef()
    var tref=useRef()
    var cref=useRef()
    useEffect(()=>{
        iref.current.focus()
    },[])
      function change(e){
        if(e.key==="Enter"){
            tref.current.focus()
        }
      }
    return (
        <div>
            <input type="text" ref={iref} onKeyUp={(e)=>{change(e)}}/>
            <button ref={tref} onClick={()=>{cref.current.focus()}}>Add todo</button>
            <Child ref={cref}></Child>
        </div>
    )
}
   
export default Todolist