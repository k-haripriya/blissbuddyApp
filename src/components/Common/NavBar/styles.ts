import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.white,
        paddingVertical:20,
        paddingHorizontal:10,
        elevation:5,
        flexDirection:'row',
        alignItems:'center',
       
    },
    headerText:{
        fontSize:18,
        fontWeight:'700',
        color:Colors.black
    },
    titleText:{
        fontSize:16,
        fontWeight:'500',
        color:Colors.black
    },
    iconView:{
        padding:2,
        marginRight:20,
        
    }
})