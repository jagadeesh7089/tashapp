import React from "react";
import { useDeletePostMutation, useGetAllcoursesQuery, useLazyGetAllcoursesQuery } from "../../services/coursesApi";

function Courses(){
    var {isLoading,data}=useGetAllcoursesQuery()
    var [deletecourseFn]=useDeletePostMutation()
    var [lazyCourseFn]=useLazyGetAllcoursesQuery()
    console.log(isLoading)
    console.log(data)

    function deletecourse(id){
        deletecourseFn(id).then(()=>{
            lazyCourseFn()
        })

    }
   
    return (
        <div>
            <h1>Courses</h1>
              {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}

        <ol >
            {
                !isLoading && (data?.map(s=>{
                  return <li className="d-flex w-50 m-2 bg-warning p-2 aa" >
                <p className="w-75 ">{s.course} - {s.trainer}-{s.technologies}</p>
                    <button className="px-3 btn btn-danger" onClick={()=>{deletecourse(s.id)}}>Delete</button> &nbsp;&nbsp;
                    <button className="px-4 btn btn-info">Edit</button>
                    </li>
                }))
            }
        </ol>

        </div>
    )
}
export default Courses