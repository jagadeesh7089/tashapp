import React from "react";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
function App(){
  var [product,setProduct]=useState([])
  useEffect(()=>{
     axios.get("https://fakestoreapi.com/products").then(res=>{
        var temp=JSON.parse(JSON.stringify(res.data))
          temp.map(s=>{
            return {...s,status:false}
          })
          setProduct(temp)
     })
  },[])
  function expand(id){
    var temp=JSON.parse(JSON.stringify(product))
       temp.map((a)=>{
          if(a.id===id){
            a.status=!a.status
          }
          return a
        })
        
        setProduct(temp)

  }

  return(
    <div>  
           <div>
            {
              product?.map((prod)=>{
                return <div className="bg bg-warning" onClick={()=>{expand(prod.id)}}> <p>{prod.title}</p> 
                <div style={prod.status?{display:"block"}:{display:"none"}}>
                  <p>Details</p>
                </div>
                </div>
              })
            }
           </div>
    </div>
  )
}
export default App