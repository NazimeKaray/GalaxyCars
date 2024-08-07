import React from "react";
import {  Text, View, StyleSheet } from 'react-native';
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/CategoryApi";
import { FlatList } from "react-native-gesture-handler";


function Vehicles({route,Navigation}){
    const selectedCategoryId=route.params?.id;
   
    
    const {data,isLoading}=useGetVehiclesByCategoryIdQuery(selectedCategoryId)
    console.log("selectedCategoryId")
    
 
    if(isLoading){ 
        return(  
            <>
            <Text>
                Loading...
            </Text>
            </>
        )
    }
    

if(data.vehicles!==undefined){
    return(
        <>
        <FlatList data={data.vehicles} keyExtractor={(item) => item.id.toString()}
             renderItem={({item})=> (
                <View>
                    <Text>
                        {item.brand}
                    </Text>
                </View> 
             ) } ></FlatList>
        </>
    )
}
}

export default Vehicles