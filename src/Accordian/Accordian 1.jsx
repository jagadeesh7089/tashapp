import axios from "axios";
import React, { useEffect, useState } from "react";
function Accor(){
var [product,setProduct]=useState([])
var [pid,setPid]=useState(0)
  useEffect(()=>{
    axios('https://fakestoreapi.com/products').then((res)=>{
      // console.log(res.data)
      setProduct(res.data)
    })
  },[])

   function pcl(e){
      setPid(e)
      console.log(pid)
   }

  return (
    <div>
       {
        product.map((prod,i)=>{
          return <div>
            <div onClick={()=>{pcl(prod.id)}}>{prod.title}</div>
            <div>{prod.id}</div>
            <div >{prod.price}</div>
          </div>

        })
       }
    </div>
  )
}
export default Accor