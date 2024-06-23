import { useFormik } from "formik";
import React from "react";
 import * as Yup from 'yup' 
 import axios from "axios";
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
           username:Yup.string().test("user validation", "user name is already exits",function(un){
              var {path,createError}=this
                    var p= new Promise((resolve, reject) => {
                      axios.get(`https://api.github.com/users/${un}`)
                      .then((res)=>{
                        console.log(res)
                        reject(this.createError({path,message:"chusuko bey"}))
                      }).catch(err=>{
                        resolve(true)
                      })
                    })
                    return p
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
               <button>Submit</button>
                 
               </form>

        </div>
    )
 }
export default Field