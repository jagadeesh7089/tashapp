import products from "./products";
const initialState={
    product:products,
    cart:[]
}
function productsreducer(state=initialState,action){
    if(action.type==="Addtocart"){
        console.log(action.payload)
        return {...state,cart:[...state.cart,action.payload]}
    }
    return state
}
console.log(products)
export default productsreducer  