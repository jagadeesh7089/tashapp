import React from "react";
import { connect } from "react-redux";
function Counter(props){
   console.log(props)
    return(
        <div>
            <h1>Counter:{props.count}</h1>
             <button onClick={()=>{props.inc()}}>Increment</button>
             <button onClick={()=>{props.dec()}}>DEcrement</button>
        </div>
    )
}
export default connect(function(state){
    return state.Counterreducer
},function(dispatch){
    return {
        inc:()=>{dispatch({type:"INC"})},
        dec:()=>{dispatch({type:"DEC"})},
    }
}) (Counter)