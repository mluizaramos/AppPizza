import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#a83232",
        alignItems:"center",
        justifyContent:"center",
        width: "100%",
    },
    title:{
        fontSize:30,
        fontWeight:"bold",
        color:"#fff",
        marginBottom:15
    },
    box:{
        width:"100%",
        height:"75%",
        borderRadius:7,
        padding:10,
        backgroundColor:"#fff",
        fontSize:17,
        color:"#888",
        marginTop:10
    },
    boxbox:{
        width:"70%",
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
    }
})

export default styles