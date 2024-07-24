import { View, Text, Pressable, StyleSheet} from "react-native"
import{Card,Title,Paragraph} from "react-native-paper"
import { useNavigation } from "@react-navigation/native"

function CategoryItem({item}){

    const Navigation=useNavigation();
    const VehiclesByCategoryIdHandler=()=>{
        Navigation.navigate('Vehicles',{
            id:item.id
        })
    }
    return (
        <Pressable onPress={VehiclesByCategoryIdHandler}>
            <Card style={styles.card}>
                <Card.Content>
                    <Title>{item.categoryName}</Title>
                    <Paragraph>Description:{item.categoryDescription}</Paragraph>
                </Card.Content>
            </Card>
        </Pressable>
    )
}
export default CategoryItem
const styles=StyleSheet.create({
    card:{
        margin:12,
        alignItems:"center",
        textAlign:"left",
        backgroundColor:"pink"
    }
})