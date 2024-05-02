import React, { useContext } from "react";
import Grandgrandchild from "./grand grand child";
import { MyContext } from "../Mycontext";
 
function Grandchild(){
    var g=useContext(MyContext)
    
    return(
        <div className="border border-2 border-success p-2">
            <h1>Grand Child :{g}</h1>
            <Grandgrandchild></Grandgrandchild>
        </div>
    )
}
export default Grandchild