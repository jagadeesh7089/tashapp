import React from "react";
import { useGetAllcoursesQuery } from "../../services/coursesApi";

function Courses(){
    var {isLoading,data}=useGetAllcoursesQuery()
    console.log(isLoading)
    console.log(data)
   
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
                  return <li>{s.course} - {s.trainer}-{s.technologies}</li>
                }))
            }
        </ol>

        </div>
    )
}
export default Courses