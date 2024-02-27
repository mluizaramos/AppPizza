import React, {useState} from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import styles from "./styles";

export default function Login({navigation}){
    const [user, setUser] = useState("")
    const [pass, setPass] = useState("")

    function logar(){
        if (user == "lin"  && pass == "123"){
            navigation.navigate("Home")
        } else{
            console.log("Não logou")
        }
    }

    return(
        <View style={styles.container}>
            <View> 
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.boxbox}>
                <TextInput
                    placeholder="User"
                    style={styles.box}
                    onChangeText={setUser}
                    value={user}
                />
            </View>
            <View style={styles.boxbox}>
                <TextInput
                    placeholder="Password"
                    style={styles.box}
                    onChangeText={setPass}
                    value={pass}
                    secureTextEntry={true}
                    />
            </View>
            
            <View style={styles.button2}>
                <Pressable
                    style={styles.button}
                    onPress={()=>{logar()}}>
                    <Text style={styles.textButton}>Login</Text>
                </Pressable>
            </View>
        </View>
    )
}