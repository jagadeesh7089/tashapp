import React, { useReducer } from "react";


function Reducerhook(){
    function reducer(state,action){
       if(action.type==="INC"){
        return {...state,count:state.count+1}
       }
       if(action.type==='DEC'){

        return {...state,count:state.count-1}   
       }
    }
    var [state,dispatch]=useReducer(reducer,{count:0})
    return (

        <div>
         <h1>count:{state.count}</h1>  
         <button onClick={()=>{dispatch({type:'INC'})}}>INC</button> &nbsp;&nbsp;
         <button onClick={()=>{dispatch({type:"DEC"})}}> DEC</button> 
        </div>
    )
}
export default Reducerhook