import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#8a2c2c",
        alignItems:"center",
        justifyContent:"center",
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        marginTop:15,
        marginBottom:15,
        alignItems:'center',
        textAlign:'center'
    },
    button:{
        backgroundColor: "#fff",
        width:"70%",
        height:"70%",
        marginTop:20,
        borderRadius:7,
        padding:10,
    },
    textButton:{
        textAlign: "center",
        color:"#a83232",
        fontSize:20,
        fontWeight:"bold",
    },
    button2:{
        width:"100%",
        alignItems:"center",
        justifyContent:"center"
    },
    produto:{
        width:150,
        height:210,
        color: '#fff',
        padding:10,
        margin: 20,
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor:'#a83232',
        boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)',
        borderRadius: 5
    },
    text:{
        fontSize: 40,
        fontWeight:'bold',
        marginTop:30,
        alignItems:'center',
        textAlign:'center'
    },
    text2:{
        fontSize:20,
        color: '#fff',
        alignItems:'center',
        textAlign:'center',
        marginTop:10,
        marginBottom:10
    }
})

export default styles