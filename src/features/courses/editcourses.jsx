import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useUpdatePostMutation } from "../../services/coursesApi";
import { useLocation, useNavigate } from "react-router-dom";
function Editcourses(){
   var navigate= useNavigate()
   var {state}=useLocation()
    useEffect(()=>{
        editcourseform.setValues(state)
    },[state])
  var[updatecourseFn]=useUpdatePostMutation()

var editcourseform=useFormik({
    initialValues:{
        course:"",
        trainer:"",
        technologies:"",
        id:""
    },
    onSubmit:(values)=>{
        updatecourseFn(values).then(res=>{
          navigate('/courses')
        })
    }
})
  return(
    <div>
        <h1>Edit Course</h1>
        <form onSubmit={editcourseform.handleSubmit}>
            <input type="text" placeholder="course" {...editcourseform.getFieldProps("course")} /><br/><br/>
            <input type="text" placeholder="trainer" {...editcourseform.getFieldProps("trainer")}/><br/><br/>
            <input type="text" placeholder="technologies" {...editcourseform.getFieldProps("technologies")}/><br/><br/>
            <button> update Courses</button>
        </form>
    </div>
  )
}
export default Editcourses