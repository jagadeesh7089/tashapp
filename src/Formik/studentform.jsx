import { useFormik } from "formik";
import React from "react";
import * as Yup from 'yup';
function StudentForm(){
    var studentForm= useFormik({
        initialValues:{
            firstname:"",
            lastname:"",
            password:"",
            age:""
        },
        validationSchema: Yup.object({
            firstname: Yup.string().max(9).required(),
            lastname:Yup.string().max(5).required(),
            password:Yup.string().matches(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/," Password was not strong"),
            age:Yup.number().test("checkage","age is not correct",(x)=>{
                if(x>18 && x<=45){
                    return true
                }
                else{
                    return false
                }
            })


          }),


        onSubmit:(values)=>{
            console.log(values)
        }
    })
    return (
        <div>
              <form onSubmit={studentForm.handleSubmit}>
                <input  style={studentForm.touched.firstname && studentForm.errors.firstname && {border:"1px solid red"}} type="text" {...studentForm.getFieldProps("firstname")}/>
                <div style={{color:"red"}}>{ studentForm.touched.firstname && studentForm.errors.firstname}</div> <br/>

                <input  className={studentForm.touched.lastname && studentForm.errors.lastname  && "border border-danger"}type="text" {...studentForm.getFieldProps("lastname")} />
                <div style={{color:"red"}}> {studentForm.touched.lastname && studentForm.errors.lastname}</div><br/>

                <input type="text" {...studentForm.getFieldProps("password")}/>
                <div style={{color:"red"}}>{studentForm.touched.password && studentForm.errors.password}</div><br/>


                <input className={studentForm.touched.age && studentForm.errors.age  && "border border-danger"} type="text" name="age" {...studentForm.getFieldProps("age")}/>
                <div style={{color:"red"}}> {studentForm.touched.age && studentForm.errors.age}</div><br/>
                <button>show data</button>
            </form>
            {JSON.stringify(studentForm.errors)}
        </div>
    )
}
export default StudentForm