import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.fire,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        height:170,
        width:190,
        elevation:5,
        paddingVertical:15
        
    },
    title:{
        fontSize:18,
        fontWeight:'900',
        color:Colors.black
    },
    imgContainer:{
        backgroundColor:Colors.fire2,
        marginTop:20,
        padding:8,
        borderRadius:30
        
    },
    resultView:{
        marginTop:20,
        paddingVertical:10,
        paddingHorizontal:40,
        backgroundColor:Colors.fire2,
        borderRadius:30
    },
    result:{
        color:Colors.black,
        fontSize:16
    }
})