import React,{useEffect, useState} from "react";
import axios from "axios";
import { Link, Outlet } from "react-router-dom";
 function Countries(){
    var [countries,setCountires]=useState()
    useEffect(()=>{
        axios.get(" https://restcountries.com/v3.1/all").then((res)=>{
            // console.log(res)
            setCountires([...res.data])
        })
         
    },[])
    
    return(
        <div className="d-flex">+
          
           <div>
           <h1>countries</h1>
           {
            countries?.map(c=>{
                return(
                   <li><Link to={`country/${c.cca3}`}>{c.name.common}</Link></li>
                )

            })
           }
           </div>
            
           <div><Outlet></Outlet></div>
            </div>
    )
 }
 export default  Countries