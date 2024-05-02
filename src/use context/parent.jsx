import React, { useContext, useState } from "react";
import Child from "./child";
import { MyContext } from "../Mycontext";

function Parent(){
     var d=useContext(MyContext)
    var [fn,setFn]=useState("jagadeesh")
    function Abc(){
        alert("hiira")
    }
    return (
        <div className="border border-2 border-danger p-2">
            <h1>Parent :{fn}:{d}</h1>
            <button onClick={()=>{Abc()}}>Call Abc</button>
            <Child x={fn} y={Abc}></Child>

        </div>
    )
}
export default Parent