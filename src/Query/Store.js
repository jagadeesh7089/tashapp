import { configureStore } from "@reduxjs/toolkit";
import { getDefaultNormalizer } from "@testing-library/react";

export const store=configureStore({
    reducer:{
        counterReducer,
        todoReducer,
        [postsApi.reducerPath]:postsApi.reducer,
        [counterApi.reducerPath]:counterApi.reducer
    },
    middleware:(getDefaultmiddleware)=>
        getDefaultmiddleware().concat(postsApi.middleware)
})


export const store=configureStore({
reducer:{

    counterReducer,
    todolistReducer,
    [productaApi.reducerPath]:productApi.reducer
},
  middleware:(getDefaultmiddleware)=>{
    getDefaultmiddleware.concat(productApi.middleware)
  }
})