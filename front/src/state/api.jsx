import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
// import dotenv from "dotenv"
// dotenv.config()
export const api = createApi({
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:3000" }),
    reducerPath: "adminApi",
    tagTypes: ["User", "Products","Customer"],
    endpoints: (build) => ({
        getUser: build.query({
            query: (id) => `general/user/${id}`,
            providesTags: ["User"],
        }),
        getProducts: build.query({
            query: () => "client/products",
            providesTags: ["Products"]
        }),
        getCustomers: build.query({
            query: () => "client/customers",
            providesTags:["Customers"]
        })
    })
})


export const { useGetUserQuery, useGetProductsQuery, useGetCustomersQuery } = api