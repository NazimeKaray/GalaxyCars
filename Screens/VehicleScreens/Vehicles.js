import { Text,View,StyleSheet } from "react-native-paper"
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/CategoryApi";

function Vehicles({route,Navigation}){
    const selectedCategoryId=route.params?.id;
   
    console.log("selectedCategoryId")
    console.log(selectedCategoryId)
    const {data,isLoading}=useGetVehiclesByCategoryIdQuery(selectedCategoryId)
    if(isLoading){ 
        return( 
            <>
            <Text>
                Loading...
            </Text>
            </>
        )
    }
    return(
        <></>
    )
}


export default Vehicles