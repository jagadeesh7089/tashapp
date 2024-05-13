import React from "react";
import { connect } from "react-redux";

function Products(props){
    return (
       <div>
          <h1>Products</h1>
          <div className="d-flex  flex-wrap">
            {
                props.Productsreducer.products.map(product=>{
                    return <div className="w-25 d-flex flex-column justify-content-between  p-3 border border-2 m-5 shadow-lg">
                        <p>{product.title.slice(0,20)}</p>
                        <img src={product.image} className="w-100"/>
                        <p>{product.price}</p>
                        <button>ADD TO CART</button>    
                    </div>
                })
            }
          </div>
       </div>
    )
}
export default connect(store=>store) (Products)