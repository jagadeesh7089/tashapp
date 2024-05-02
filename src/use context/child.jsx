import React, { useContext } from "react";
import Grandchild from "./grandchild";
import { MyContext } from "../Mycontext";

 function Child(props){
    var f=useContext(MyContext)
   
    function abc(){
        alert("h11")
    }
    return(
        <div className="border border-2 border-warning p-2" >
        <h1>Child :{props.x},{f}</h1>
        <button onClick={()=>abc()}>call abc</button>
        <button onClick={()=>{props.y()}}>Please call Abc</button>
        <Grandchild></Grandchild>
        </div>
    )
 }
 export default Child