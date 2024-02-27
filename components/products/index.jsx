import React, {useState} from "react";
import {View, Text, SafeAreaView, Pressable, FlatList, Image} from "react-native";
import styles from "./styles";

export default function Products({navigation}){
    const lista = [
        {
            id: "1",
            nome:"Calabresa",
            valor:"R$ 55,00",
            foto: 'https://sgnh.com.br/wp-content/uploads/2021/07/pizza_calabresa.png'
        },
        {
            id: "2",
            nome:"Mussarela",
            valor:"R$ 60,00",
            foto: 'https://s3-sa-east-1.amazonaws.com/deliveryon-uploads/products/azpizza/3_5c3f315d8ed39.png'
        },
        {
            id: "3",
            nome:"Margarita",
            valor:"R$ 58,00",
            foto: 'https://paradisepizzaria.com.br/site/img/produtos/281473_1_g.png'
        },
        {
            id: "4",
            nome:"Brocolis",
            valor:"R$ 65,00",
            foto:'https://paradisepizzaria.com.br/site/img/produtos/281769_1_g.png'
        },
        {
            id: "5",
            nome:"Frango Catupiry",
            valor:"R$50,00",
            foto:'https://sgnh.com.br/wp-content/uploads/2021/07/pizza_frango.png'
        },
        {
            id: "6",
            nome:"Portguesa",
            valor:"R$50,00",
            foto:'https://sgnh.com.br/wp-content/uploads/2021/07/pizza_portuguesa.png'
        }
    ]

    return(
        <View style={styles.container}>
            <View> 
                <Text style={styles.title}>Pizzas</Text>
                <FlatList
                    data = {lista}
                    numColumns = {2}
                    renderItem={({item})=>
                        <View style={styles.produto}>
                            <Text style={styles.text2}>
                                Pizza {item.nome}
                            </Text>
                            <Pressable
                                onPress={()=>navigation.navigate('Product', {
                                    pizza: item.nome,
                                    valor: item.valor,
                                    imagem: item.foto,
                                    id: item.id
                                })}
                            >
                                <Image source={{ uri:item.foto }} style={{width:70, height:70}}></Image>
                            </Pressable>
                            
                            <Text style={styles.text2}>{item.valor}</Text>
                        </View>
                    }
                />
            </View>
        </View>
        
    )
}