import { useFormik } from "formik";
import React from "react";
 import * as Yup from 'yup' 
function Field (){

      var Formvalidation=useFormik({
        initialValues:{
           firstname:"",
           lastname:"",
           password:"",
           age:"",
           username:""
        },
        validationSchema:Yup.object({
           firstname:Yup.string().required("babu firstname evi").max(8,"babu chusuko"),
           lastname:Yup.string().max(7),
           password:Yup.string().matches( /^(?=.*\d)(?=.*[a-zA-Z])[a-zA-Z0-9]{7,}$/,"babu chusuko"),
           age:Yup.number().test("age validation","babu age chusuko", (x)=>{
                    if(x>18 && x<45){
                        return true
                    }
                    else{
                        return false
                    }
           }),
           username:Yup.string().test("user validation", "user name is already exits",(un)=>{
                    
           })

        }),
        onSubmit:(values)=>{console.log(values)}
      })
    return (
        <div> 
               <form onSubmit={Formvalidation.handleSubmit}>
               <input type="text" {...Formvalidation.getFieldProps("firstname")}/> <br/><br/>
               <input type="text" {...Formvalidation.getFieldProps("lastname")}/> <br/><br/>
               <input type="text" {...Formvalidation.getFieldProps("password")}/> <br/><br/>
               <input type="text" {...Formvalidation.getFieldProps("age")}/> <br/><br/>
               <input type="text" {...Formvalidation.getFieldProps("username")}/> <br/><br/>
               </form>
        </div>
    )
 }
export default Field