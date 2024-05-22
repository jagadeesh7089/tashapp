import React, { useEffect } from "react";
import { useDeletePostMutation, useGetAllpostsQuery, useLazyGetAllpostsQuery } from "../../services/postApi";
import { useNavigate } from "react-router-dom";
function Posts(){
   var navigate= useNavigate()
    var {isLoading,data}=useGetAllpostsQuery()
    var [deletePostFn]=useDeletePostMutation()
    var [removePostFn]=useLazyGetAllpostsQuery()

    function deleteHandler(id){
        deletePostFn(id).then(()=>{
            removePostFn()
        })
    }
    console.log(data)

    function editpost(post){
        navigate('/editpost',{state:post})

    }
    useEffect(()=>{
        removePostFn()
    },[])

    
    return (
        <div className="border border-warning p-2">
            <h1>Posts</h1>
        
            {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}

            <ol>
                {
                    !isLoading &&(
                        data?.map(p=>{
                            return <li className="w-25 d-flex justify-content-between p-2 bg-info-subtle m-2" >
                                    <div className="w-50 ">{p.title} -{p.author}</div>
                                   <button onClick={()=>{deleteHandler(p.id)}} className="btn btn-danger w-25">Delete</button>&nbsp;
                                   <button className=" btn btn-warning px-4 w-25" onClick={()=>{editpost(p)}}>Edit</button>
                                </li>
                        })
                    )
                }
            </ol>
           
        </div>
    )
}
export default Posts