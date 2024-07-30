import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
export const VehicleApi=createApi({
    reducerPath:"vehicleApi",
    baseQuery:fetchBaseQuery({
        baseUrl:'https://4a29-213-153-146-39.ngrok-free.app/api/',
    }),
    endpoints:(builder)=>({
        GetAllVehicle:builder.query({
            query:()=>({
                url:"Vehicle/GetAllVehicle",
                method:"GET"
            })
        }),
        CreateVehicle:builder.mutation({
            query:(vehicleModel)=>({
                url:"Vehicle/CreateVehicle",
                method:"POST",
                body:vehicleModel
            })
        }),
        RemoveVehicle:builder.mutation({
            query:(vehicleId)=>({
                url:`Vehicle/DeleteVehicle/${vehicleId}`,
                method:"DELETE"
            })
        }),
        UpdateVehicle:builder.mutation({
            query:(model)=>({
                url:`Vehicle/UpdateVehicle/${model.vehicleId}`,
                method:"PUT",
                body:model.vehicleModel
            })
        }),
        GetVehicleById:builder.query({
            query:(vehicleId)=>({
                url:`Vehicle/Vehicle/${vehicleId}`,
                method:"GET"
            })
        })
    })
})

export const {useGetAllVehicleQuery,useCreateVehicleMutation, useRemoveVehicleMutation,useUpdateVehicleMutation}=VehicleApi
export default VehicleApi