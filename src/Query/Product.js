import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { postsApi } from "../services/postApi";

export const postApi=createApi({
    reducerPath:"postApi",
    baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000/post'}),
    endpoints:(builder)=>({
        getallposts:builder.query({
            query:()=>'/'
        }),

        addpost:builder.mutation({
            query(posts){
                return {
                    url:'/',
                    method:'POST',
                    body:posts
                }
            }
        }),

        updatepost:builder.mutation({
            query(posts){
                return {
                    url:`/${posts.id}`,
                    method:'PUT',
                    body:posts
                }
            }
        }),

        deleteposts:builder.mutation({
            query(postsid){
                return {
                    url:'/postsid',
                    method:'DELETE',

                }
            }
        }),

        updatepost:builder.mutation({
            query(posts){
                return {
                    url:`/${posts.id}`,
                    method:"PATCH",
                    body:posts
                }
            }
        }),

    }),
})

export const {}=postsApi


//   export const productApi=createApi({
//     reducerPath:'productApi',
//     baseQuery:fetchBaseQuery({baseUrl:'http://localhost:4000/products'}),
//     endpoints:(builder)=>({
//         getallproducts:builder.query({
//             query:()=>{'/'}
//         }),

//         addproducts:builder.mutation({
//             query(product){
//                 return {
//                     url:'/',
//                     method:'POST',
//                     body:product,

//                 }
//             }
//         }),

//         updateproduct:builder.mutation({
//             query(post){
//                 return {
//                     url:`/${post.id}`,
//                     method:'PUT',
//                     body:post
//                 }

//             }
//         }),

//         deleteproduct:builder.mutation({
//             query(id){
//                 return {
//                     url:`/${id}`,
//                     method:'DELETE',
//                 }
//             }
//         }),

//         modifyproduct:builder.mutation({
//             query(product){
//                 return {
//                     url:`${product.id}`,
//                     method:'PATCH',
//                     body:product
//                 }

//             }
//         })
//     })
//   })

//  export  const {}=productApi









