import React, { useContext } from "react";
import { MyContext } from "../Mycontext";
 function Grandgrandchild(){
    var e=useContext(MyContext)
    return (
        <div className="border border-2 border-primary p-2">
            <h1>Grandgrandchild :{e}</h1>
        </div>
    )
 }
 export default Grandgrandchild