import React from "react";
import { connect } from "react-redux";
function Myproducts(props){
    console.log(props)
    return (
        <div>
            <h1>Products</h1>
            <div className="">
                {
                    props.Productreducer.products.map(product=>{
                        return <div className="w=25">
                            <h1>{product.title}</h1>
                            <img src={product.image} />
                            <p>{product.price}</p>
                        </div>
                    })
                }
            </div>
        </div>
    )
}
export default connect(store=>store)(Myproducts)