import React, {useState} from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import styles from "./styles";

export default function Home({navigation}){
    return(
        <View style={styles.container}>
            <View> 
                <Text style={styles.title}>Home</Text>
            </View>
            <View style={styles.button2}>
                <Pressable
                    style={styles.button}
                    onPress={()=>navigation.navigate("Products")}>
                    <Text style={styles.textButton}>Produtos</Text>
                </Pressable>
            </View>
        </View>
    )
}