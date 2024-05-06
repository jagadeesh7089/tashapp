import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Country(){
    var [country,setCountry]=React.useState()
   let {cname}= useParams()
   console.log(cname);
   useEffect(()=>{
     axios.get(`https://restcountries.com/v3.1/alpha/${cname}`).then(res=>{
        console.log(res.data);
        setCountry({...res.data})
     })
   },[])
    return(
        <div>
            <h1>hello</h1>

           

        </div>
    )
}
export default Country