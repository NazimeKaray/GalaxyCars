import { configureStore } from "@reduxjs/toolkit";
import CategoryApi from "../Apis/CategoryApi";
import VehicleApi from "../Apis/VehicleApi";
import { vehicleReducer } from "./redux/vehicleSlice";
import { categoryReducer } from "./redux/categorySlice";

export const store= configureStore({
    reducer:{
        vehicleStore:vehicleReducer,
        categoryStore:categoryReducer,
        [CategoryApi.reducerPath]:CategoryApi.reducer,
        [VehicleApi.reducerPath]:VehicleApi.reducer

    },middleware:(GetDefaultMiddleware)=>GetDefaultMiddleware().concat(CategoryApi.middleware,VehicleApi.middleware)
})