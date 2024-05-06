import React,{useEffect, useState} from "react";
import axios from "axios";
 function Countries(){
    var [countries,setCountires]=useState()
    useEffect(()=>{
        axios.get("https;//restcountries.com/v3/all").then(res=>setCountires([...res.data]))
    
    },[])
    
    return(
        <div>
           <h1>countries</h1>
           {
            countries?.map(c=>{
                return(
                    <li>{c.name.common}</li>
                )

            })
           }
            </div>
    )
 }
 export default  Countries