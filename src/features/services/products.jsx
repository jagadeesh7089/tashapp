import React from "react";
import { useGetAllCountriesQuery } from "./countriesapi";
import { useGetAllProductsQuery } from "./productsapi";

function Products(){
    var {isLoading,data}=useGetAllProductsQuery()
         console.log(data)
    return (
        <div>
            <h1>Products</h1>
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