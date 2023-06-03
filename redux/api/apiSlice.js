import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:"https://admin.goabroadconsult.com"
    // baseUrl: "http://127.0.0.1:8000/api",
    // baseUrl:"https://eduker-server.onrender.com",
  }),
  tagTypes: [],
  keepUnusedDataFor: 600,
  endpoints: (builder) => ({

    getBlogs: builder.query({
      query: () => "/get-blogs",
    }),

    // // single blog
    getBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),

    getEvents: builder.query({
      query: () => "/events",
    }),

    // single event
    getEvent: builder.query({
      query: (id) => `/event/${id}`,
    }),


    getCourses: builder.query({
      query: () => "/courses",
    }),

    getTeams: builder.query({
      query: () => "/teams",
    }),
    // single blog
    getBlog: builder.query({
      query: (id) => `/blog/${id}`,
    }),
    // single team
    getTeam: builder.query({
      query: (id) => `/team/${id}`,
    }),
    
    // single course
    getCourse: builder.query({
      query: (id) => `/courseDetails/${id}`,
    }),
    // category get
    getCategory: builder.query({
      query: (category) => `/category/${category}`,
    }),
    // getMyCourses: builder.query({
    //   query: (email) => `/myOrder/${email}`,
    // }),
  }),
});

export const {
  useGetBlogsQuery,
  useGetBlogQuery,
  useGetEventsQuery,
  useGetEventQuery,
  useGetCoursesQuery,
  useGetMyCoursesQuery,
  useGetTeamsQuery,
  useGetTeamQuery,
  useGetCourseQuery,
  useGetCategoryQuery,
} = apiSlice;
