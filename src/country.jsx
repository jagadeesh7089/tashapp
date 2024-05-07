import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Country(){
    var [country,setCountry]=React.useState()
   let {cname}= useParams()
//    console.log(cname);
   useEffect(()=>{
     axios.get(`https://restcountries.com/v3.1/alpha/${cname}`).then(res=>{
        console.log(res.data[0]);
        setCountry({...res.data[0]})
     })
   },[cname])
   
    return(
        <div>
       <div className="border border-2 p-5 bg-info">
        <h1>Country Details of {country?.name.common}</h1>
        <img src={country?.flags.png} />
        <h3> Name: {country?.name.common}</h3>
        <h1> Capital:{country?.capital}</h1>
        <p>Population:{country?.population}</p>
           

       </div>
        </div>
    )
}
export default Country