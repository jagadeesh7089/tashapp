import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useAddPostMutation, useUpdatePostMutation } from "../../services/postApi";
import { useLocation, useNavigate } from "react-router-dom";
function Editpost(){
    var navigate=useNavigate()
    var {state}=useLocation()
    useEffect(()=>{
        editpostform.setValues(state)
    },[state])
     var [updatePostFn]=useUpdatePostMutation()
    var editpostform=useFormik({
        initialValues:{
            title:"",
            author:"",
            id:""

        },
        onSubmit:(values)=>{
        updatePostFn(values).then((res)=>{
           navigate('/posts')
        })
        }

    })
    return(
        <div>
            <h1>Edit post</h1>
            <form onSubmit={editpostform.handleSubmit}>
                <input type="text" placeholder="title" {...editpostform.getFieldProps("title")}/> <br/><br/>
                <input type="text"placeholder="author" {...editpostform.getFieldProps("author")}/> <br/><br/>
                <button className="btn btn-info">UpdatePost</button>
            </form>  
        </div>
    )
}
export default Editpost