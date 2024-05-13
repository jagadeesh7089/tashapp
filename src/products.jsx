import React from "react";
import { connect } from "react-redux";

function Products(props){
    return (
       <div>
          <h1>Products</h1>
          <div className="d-flex ">
            {
                props.Productsreducer.products.map(product=>{
                    return <div className="w-25">
                        <p>{product.title}</p>
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