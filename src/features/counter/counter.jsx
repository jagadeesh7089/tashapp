import React from "react";
import { useSelector } from "react-redux";

function Counter(){
  var x= useSelector(state=>state)
  console.log(x)
  return(
    <div>
        <h1>Counter</h1>
        <button >Increment</button>
        <button >Decrement</button>
    </div>
  )
}
export default Counter