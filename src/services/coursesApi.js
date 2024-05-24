import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/courses/' }),
  endpoints: (builder) => ({
    getAllcourses: builder.query({
      query: () => `/`,
    }),
    addPost: builder.mutation({
      query(newcourse) {
        return {
          url: `/`,
          method: 'POST',
          body:newcourse
        }
      },
    }),
    deletePost: builder.mutation({
      query(courseid) {
        return {
          url: `/${courseid}`,
          method: 'DELETE',
          
        }
      },
    }),
    updatePost: builder.mutation({
      query(course) {
        return {
          url: `/${course.id}`,
          method: 'PUT',
          body:course
          
        }
      },
    }),
  }),
})
export const {useGetAllcoursesQuery,
  useAddPostMutation,
  useDeletePostMutation,
  useLazyGetAllcoursesQuery,
  useUpdatePostMutation
} = coursesApi