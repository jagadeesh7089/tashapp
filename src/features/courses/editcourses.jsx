import { useFormik } from "formik";
import React from "react";
import { useAddPostMutation, } from "../../services/coursesApi";
function Editcourses(){
  
var [addCourseFn]=useAddPostMutation()
var courseform=useFormik({
    initialValues:{
        course:"",
        trainer:"",
        technologies:""
    },
    onSubmit:(values)=>{
        addCourseFn(values).then(res=>{
            console.log(res.data)
        })
    }
})
  return(
    <div>
        <h1>Edit Course</h1>
        <form onSubmit={courseform.handleSubmit}>
            <input type="text" placeholder="course" {...courseform.getFieldProps("course")} /><br/><br/>
            <input type="text" placeholder="trainer" {...courseform.getFieldProps("trainer")}/><br/><br/>
            <input type="text" placeholder="technologies" {...courseform.getFieldProps("technologies")}/><br/><br/>
            <button>Add Courses</button>
        </form>
    </div>
  )
}
export default Editcourses