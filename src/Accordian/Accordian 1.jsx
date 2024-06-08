import React, { useState } from "react";
function Accordian(){
 
   function click (e){ 
        if(!e.status){
          e.status=!e.status
          console.dir(e)
        }
        else{
          e.status=!e.status
          console.log(e.status)
        }
      }
     
    

  
    return (
        <div>
            <div>
              <h4 onClick={(e)=>{click({ ...e,status:false})}} id="d1" >A</h4>
               &nbsp; &nbsp;<p style={{display:"none"}} >Apple</p>
            </div>
            <div>
              <h4 onClick={(e)=>{click({...e,status:false})}} id="d2" >B</h4>
               &nbsp; &nbsp;<p style={{display:"none"}} >Balloon</p>
            </div>
            <div>
              <h4 onClick={(e)=>{click({...e,status:false})}} id="d3" >C</h4>
               &nbsp; &nbsp;<p style={{display:"none"}} >Carrot</p>
            </div>
            <div>
              <h4 onClick={(e)=>{click({...e,status:false})}} id="d4" >D</h4>
               &nbsp; &nbsp;<p style={{display:"none"}} >Danger</p>
            </div>
        </div>
    )
}
export default Accordian