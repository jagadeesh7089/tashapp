import React from "react";
import { useGetAllpostsQuery } from "../../services/postApi";
function Posts(){
    var {isLoading,data}=useGetAllpostsQuery()
    console.log(data)

    
    return (
        <div>
            <h1>Posts</h1>
        
            {isLoading && (<button class="btn btn-primary" disabled>
  <span class="spinner-grow spinner-grow-sm"></span>
  Loading..
</button>)}

            <ul>
                {
                    !isLoading &&(
                        data?.map(p=>{
                            return <li>{p.title}</li>
                        })
                    )
                }
            </ul>
           
        </div>
    )
}
export default Posts