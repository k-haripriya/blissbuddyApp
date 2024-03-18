import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.blue2,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:30,
        height:170,
        width:190,
        elevation:5
    },
    title:{
        fontSize:18,
        fontWeight:'900',
        color:Colors.black
    },
    cupView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        marginTop:15,
        marginLeft:-25
    },
    addView:{
        padding:8,
        backgroundColor:Colors.blue3,
        borderRadius:30,
        marginLeft:-10
    },
    resultView:{
        marginTop:20,
        paddingVertical:10,
        paddingHorizontal:40,
        backgroundColor:Colors.blue3,
        borderRadius:30
    },
    result:{
        color:Colors.black,
        fontSize:16
    }
})