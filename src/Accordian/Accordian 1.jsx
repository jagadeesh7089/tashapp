import axios from "axios";
import React, { useEffect, useState } from "react";
function Accor(){
var [product,setProduct]=useState([])
var [pid,setPid]=useState(0)

  useEffect(()=>{
     axios('https://fakestoreapi.com/products').then((res)=>{
      // console.log(res.data)
      var temp=res.data
     temp=temp.map((s=>{
        return {...s,status:false}
       }))

       setProduct([...temp])
      
    })
  },[])

  function abc(pro,i){
   var temp=product.map((x)=>{
        if(x.id===pro.id){
          return {...x,status:!x.status}
        }
        return {...x}
    })

    setProduct([...temp])
    
  

  }

  return (
    <div>
       {
        product?.map((pro,i)=>{
          return <div>
            <div onClick={()=>{abc(pro,i)}}>{pro.title}</div>
            <div style={pro.status===true?{display:"block"}:{display:"none"}}>
              <div>{pro.price}</div>
              <div>{pro.category}</div>
            </div>
          </div>
        })
       }
       
    </div>
  )
}
export default Accor