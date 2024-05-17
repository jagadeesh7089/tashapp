import React, { useState } from "react";
import { useGetAllCountriesQuery, useLazyGetAllCountriesQuery } from "../../services/countriesapi";
function Countries(){
    // var {isLoading,data} =useGetAllCountriesQuery()
    var [isLoading,setIsLoading]=useState(true)
    var [data,setData]=useState({})
    var [Countriesfn]=useLazyGetAllCountriesQuery()
   
     function getCountries(){
        Countriesfn().then(res=>{
            setIsLoading(false)
            setData(res.data)
        })
     }
    return (
        <div>
            <h1>countries</h1>
            <button onClick={()=>{getCountries()}}>Load our Countries </button>
            {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}
            <ol>
                {isLoading===false && (
                    data.map(country=>{
                        return <li>{country.name.common}</li>
                    })
                )}
            </ol>
        </div>
    )
}
export default Countries