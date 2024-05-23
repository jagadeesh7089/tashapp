import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const coursesApi = createApi({
  reducerPath: 'coursesApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4000/courses/' }),
  endpoints: (builder) => ({
    getAllcourses: builder.query({
      query: () => `/`,
    }),
  }),
})
export const {useGetAllcoursesQuery} = coursesApi