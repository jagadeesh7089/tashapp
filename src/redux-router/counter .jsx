import React from "react";
import { connect } from "react-redux";
 

 function Counter(props){
    
    return(
        <div className="border border-2 border-danger p-2">
            <h1>Counter:{props.counterreducer.count}</h1>
            <button onClick={()=>{props.dispatch({type:"INC"})}}>Increment</button>
            <button onClick={()=>{props.dispatch({type:"DEC"})}}> decrement</button>

        </div>
    )
 }
  export default connect(function(store){return store})(Counter)