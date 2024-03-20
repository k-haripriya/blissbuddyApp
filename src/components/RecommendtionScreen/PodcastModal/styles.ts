import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#efefef',
        justifyContent:'center',
    },
    imageContainer:{
        padding:10,
        backgroundColor:Colors.white,
        elevation:5
    },
    image:{
        width:200,
        height:200
    },

})