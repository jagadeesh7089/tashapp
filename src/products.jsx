import React from "react";
import { connect } from "react-redux";
function Products(props){
    console.log( "erwt",props)
    return(
        <div className="border border-2 border-danger">
            <h1>Products:</h1>
            <h1>cart:{props.productsreducer.cart.length}</h1>
            <div className="d-flex flex-wrap" >
                {
                    props.productsreducer.product.map((s)=>{
                        return <p className="w-25 d-flex flex-column justify-content-between  p-3 border border-2 m-5 shadow-lg">
                            <p>{s.title .slice(0,20)}</p>
                            <img src={s.image} className="w-100"/>
                            <p className="fs-4"><span className="text-warning fs-4">Price: </span>{s.price}</p>
                            <button className="btn btn-success px-5" onClick={()=>{props.dispatch({type:"Addtocart",payload:s})}}>Add cart</button>

                            
                        </p>
                    })
                }
            </div>

        </div>
    )
}
export default connect(store=>store) (Products)