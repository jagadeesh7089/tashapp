import React from "react";
function Todo(props){
    console.log(props.todo,"::todo rendered")
    return(

        <li className="d-flex m-2 p-2 w-25 justify-content-between bg-secondary text-light" >
            <h4>{props.todo}</h4>
            <button onClick={()=>props.deltodo(props.id)}>Delete</button>
        </li>
    )
}
export default  React.memo(Todo)