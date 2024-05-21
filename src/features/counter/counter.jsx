import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { dec, inc } from "./counterSlice";

function Counter(){
  var {count}= useSelector(state=>state.counterReducer)
 var dispatch= useDispatch()
  return(
    <div className="border  border-warning p-2">
        <h1>Counter:{count}</h1>
        <button onClick={()=>{dispatch(inc())}} className="btn btn-success" >Increment</button>&nbsp;&nbsp;
        <button onClick={()=>{dispatch(dec())}} className="btn btn-danger">Decrement</button>
    </div>
  )
}
export default Counter