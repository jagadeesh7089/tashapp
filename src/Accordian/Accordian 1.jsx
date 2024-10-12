import axios from "axios";
import React, { useEffect, useState } from "react";
function Accor(){
var [product,setProduct]=useState([])
var [pid,setPid]=useState(0)
var [temp,setTemp]=useState([])
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
      setTemp=product?.map((prod,i)=>{
          return

        })

       
       }
       {
        console.log(temp)
       }
    </div>
  )
}
export default Accor