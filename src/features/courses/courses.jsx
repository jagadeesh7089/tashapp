import React from "react";
import { useGetAllcoursesQuery } from "../../services/coursesApi";

function Courses(){
    var {isLoading,data}=useGetAllcoursesQuery()
   
    return (
        <div>
            <h1>Courses</h1>
              {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}

        <ol>
            {
                !isLoading && (data?.map(s=>{
                    <li>{s.courses}-{s.trainer}</li>
                }))
            }
        </ol>

        </div>
    )
}
export default Courses