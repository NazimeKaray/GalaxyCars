import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoryList from "./CategoryList";
import Vehicles from "./VehicleScreens/Vehicles";
const Stack= createNativeStackNavigator();
export default function CategoryOverwiew(){
    return(
    
      <Stack.Navigator screenOptions={{headerShown:true}} >
      <Stack.Screen name='Category List' component={CategoryList}/>
      <Stack.Screen name='Vehicles' component={Vehicles}/>
    </Stack.Navigator>
    
    )
  }  