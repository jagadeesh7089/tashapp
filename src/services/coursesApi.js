import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/courses/' }),
  endpoints: (builder) => ({
    getAllcourses: builder.query({
      query: () => `/`,
    }),
    addPost: builder.mutation({
      query(newpost) {
        return {
          url: `/`,
          method: 'POST',
          body:newpost
        }
      },
    }),
    deletePost: builder.mutation({
      query(postid) {
        return {
          url: `/${postid}`,
          method: 'DELETE',
          
        }
      },
    }),
  }),
})
export const {useGetAllcoursesQuery,useAddPostMutation,useDeletePostMutation,useLazyGetAllcoursesQuery} = coursesApi