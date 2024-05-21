import React, { useState } from "react";
import { useGetAllCountriesQuery, useLazyGetAllCountriesQuery } from "../../services/countriesapi";
function Countries(){
    // var {isLoading,data} =useGetAllCountriesQuery()
    var [isLoading,setIsLoading]=useState(true)
    var [data,setData]=useState({})
    var [Countriesfn]=useLazyGetAllCountriesQuery()
   
     function getCountries(){
        Countriesfn().then(res=>{
            console.log(res.data)
            setIsLoading(false)
            setData(res.data)
        })
     }
    return (
        <div className="border border-warning">
            <h1>countries</h1>
            <button onClick={()=>{getCountries()}} className="btn  btn-success">Load our Countries </button> &nbsp;
            {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}
            <ol>
                {isLoading===false && (
                    data?.map(country=>{
                        return <li>{country.name.common}</li>
                    })
                )}
            </ol>
        </div>
    )
}
export default Countries