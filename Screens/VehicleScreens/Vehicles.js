import { Text,View,StyleSheet } from "react-native-paper"
import { useGetVehiclesByCategoryIdQuery } from "../../Apis/CategoryApi";

function Vehicles({route,Navigation}){
    const selectedCategoryId=route.Params?.id;
    const {data,isLoading}=useGetVehiclesByCategoryIdQuery(selectedCategoryId)
    console.log("selectedCategoryId")
    console.log(selectedCategoryId)
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