import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { inc,dec,reset } from "./counterSlice";
function Counter(){
    var {count}=useSelector(state=>state.counterReducer)

    var dispatch=useDispatch()
    
    return(
        <div>
            <h1>counter:{count}</h1>
            <button onClick={()=>{dispatch(inc())}}>Increment</button>
            <button onClick={()=>{dispatch(dec())}}>Decrement</button>
            </div>

    )
}
export default Counter