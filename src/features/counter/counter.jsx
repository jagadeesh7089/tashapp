import React from "react";
import { useSelector } from "react-redux";

function Counter(){
    var x=useSelector(state=>state)
    console.log(x)
    return(
        <div>counter</div>
    )
}
export default Counter