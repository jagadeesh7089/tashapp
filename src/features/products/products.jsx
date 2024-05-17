import React, { useState } from "react";
import { useGetAllProductsQuery, useLazyGetAllProductsQuery } from "../../services/productsapi";


function Products(){
//    var{isLoading,data}=useGetAllProductsQuery()
//          console.log(data)
     var [isLoading,setIsLoading]=useState(true)
     var [data,setData]=useState({})
   var [getAllProdFn] =useLazyGetAllProductsQuery()
   function getProducts(){
    getAllProdFn().then(res=>{
        setIsLoading(false)
        setData(res.data)
    })
   }
    
   return  (
        <div>
            <h1>Products</h1>
            <button onClick={()=>{getProducts()}}>load our products</button>
            {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}
<ul>
    {isLoading===false && (
        data.map(product=>{
            return <li>{product.title}</li>
        })
    )}
</ul>
        </div>
    )
}
export default Products