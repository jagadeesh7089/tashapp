import React from "react";
import { useGetAllCountriesQuery } from "./countriesapi";
function Countries(){
    var {isLoading,data} =useGetAllCountriesQuery()
   
    return (
        <div>
            <h1>countries</h1>
            {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}
            <ul>
                {isLoading===false && (
                    data.map(country=>{
                        return <li>{country.name.common}</li>
                    })
                )}
            </ul>
        </div>
    )
}
export default Countries