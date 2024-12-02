import React, { useEffect, useLayoutEffect, useState } from "react";

function Layouteffect(){
    var [products,setProducts]=useState([])
    useEffect(()=>{
        fetch('https://restcountries.com/v3.1/all').then(res=>res.json()).then(data=>
            setProducts([...data])
        )
        console.log("this message is from UseEffect Hook")
    },[])

    useLayoutEffect(()=>{
        console.log("This console is from UseLayoutEffect hook")
    },[])

    return (

        <div>
            {
                products.map((prod)=>{
                    return <li>{prod.name.common}</li>
                })
            }
        </div>


        // <ol>
        //     {
        //      console.log("This is from UI ")
        //     }
        //    {
          
        //     Array(10).fill(" ").map((item)=>{
        //         console.log("hii")
        //     })
        //    }

        // </ol>
    )
}
export default Layouteffect