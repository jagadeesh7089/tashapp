import React, { useState } from "react";
function Accordian(){
    var status=false
    var[selected,setSelected]=useState()
    function accor(e){
         console.dir(e)
         setSelected(e.target.id)
       
      
    }

    return (
        <div>
           <div>
               <h1 onClick={(e)=>{accor(e)}} state={status} id="d1">A</h1>
                 <div style={selected==="d1"?{display:"block"}:{display:"none"}}>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span>Apple</span>
                    
                 </div>

           </div>
           <div>
               <h1 onClick={(e)=>{accor(e)}} state={status} id="d2">B</h1>
                 <div style={selected==="d2"?{display:"block"}:{display:"none"}}>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span>Baloon</span>
                    
                 </div>

           </div>
           <div>
               <h1 onClick={(e)=>{accor(e)}} state={status} id="d3">C</h1>
                 <div style={selected==="d3"?{display:"block"}:{display:"none"}}>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span>Carrot</span>
                    
                 </div>

           </div>
           <div>
               <h1 onClick={(e)=>{accor(e)}} state={status} id="d4">D</h1>
                 <div style={selected==="d4"?{display:"block"}:{display:"none"}}>
                 &nbsp;&nbsp;&nbsp;&nbsp;<span>Dragon</span>
                    
                 </div>

           </div>
        </div>
    )
}
export default Accordian