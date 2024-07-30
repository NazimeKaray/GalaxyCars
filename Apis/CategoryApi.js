import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const CategoryApi=createApi({
    reducerPath:"CategoryApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://4a29-213-153-146-39.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllCategory:builder.query({
            query:()=>({
                url:"Category",
                method:"GET"
            })
        }),
        CreateCategory:builder.mutation({
            query:(categoryModel)=>({
                url:"",
                method:"POST",
                body:categoryModel
            })
        }),
        RemoveCategory:builder.mutation({
            query:(categoryId)=>({
                url:`Category/${categoryId}`,
                method:"DELETE"
            })
        }),
        UpdateCategory:builder.mutation({
            query:(model)=>({
                url:`Category/${model.categoryId}`,
                method:"PUT",
                body:model.categoryModel
            })
        }),
        GetVehiclesByCategoryId:builder.query({
            query:(categoryId)=>({
                url:`Category/GetVehicles/${categoryId}`,
                method:"GET"
            })
        })
    })
})

export const {useGetAllCategoryQuery,useCreateCategoryMutation, useRemoveCategoryMutation,useUpdateCategoryMutation, useGetVehiclesByCategoryIdQuery}=CategoryApi
export default CategoryApi