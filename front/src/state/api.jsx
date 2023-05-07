import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import dotenv from "dotenv"
// dotenv.config()
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000"}),
    reducerPath: "adminApi",
    tagTypes: ["User"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/:id`,
            providesTags:["User"]
        })
    })
})


export const {useGetUserQuery} = api