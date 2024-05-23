import React from "react";
import { useDeletePostMutation, useGetAllcoursesQuery, useLazyGetAllcoursesQuery } from "../../services/coursesApi";
import { useNavigate } from "react-router-dom";

function Courses(){
   var navigate= useNavigate()
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
    function editcourses(course){
        navigate('editcourse',{state:course})
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
                    <button className="px-4 btn btn-info" onClick={()=>{editcourses(s)}}>Edit</button>
                    </li>
                }))
            }
        </ol>

        </div>
    )
}
export default Courses