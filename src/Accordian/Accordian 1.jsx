import React, { useState } from "react";
function Accordian(){
    var status=false
    var[selected,setSelected]=useState()
    function accor(e){
         console.dir(e)
         setSelected(e.target.id)
        // if(){

        // }
      
    }

    return (
        <div>
           <div>
               <h1 onClick={(e)=>{accor(e)}} state={status} id="d1">A</h1>
                 <div style={{display:"none"}}>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span>Apple</span>
                    
                 </div>

           </div>
        </div>
    )
}
export default Accordian