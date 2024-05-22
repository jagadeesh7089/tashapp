import { useFormik } from "formik";
import React from "react";
import { useAddPostMutation } from "../../services/postApi";
function Addpost(){
     var [addPostFn]=useAddPostMutation()
    var postform=useFormik({
        initialValues:{
            title:"",
            author:""

        },
        onSubmit:(values)=>{
            addPostFn(values).then(res=>{
                console.log(res.data)
            })
        }

    })
    return(
        <div>
            <h1>Add post</h1>
            <form onSubmit={postform.handleSubmit}>
                <input type="text" placeholder="title" {...postform.getFieldProps("title")}/> <br/><br/>
                <input type="text"placeholder="author" {...postform.getFieldProps("author")}/> <br/><br/>
                <button className="btn btn-success">Addpost</button>
            </form>  
        </div>
    )
}
export default Addpost