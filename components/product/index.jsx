import {View, Text, Pressable, Image} from "react-native";
import styles from "./styles";

export default function Product({navigation, route}){

    const {id, valor, pizza, imagem} = route.params
    return(
        <View style={styles.container}>
            <View> 
                <Text style ={styles.text}>Product</Text>
                <Image source ={{uri:imagem}} style={{width:150, height:150}}></Image>
            </View>
        </View>
    )
}