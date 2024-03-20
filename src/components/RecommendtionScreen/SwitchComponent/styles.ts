import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        // padding:10,
        flexDirection:'row',
        justifyContent:'center',
        borderTopWidth:1,
        borderColor:Colors.border,
        marginBottom:15
    },
    activeContainer:{
        borderBottomWidth:1,
        borderBottomColor:Colors.black

    },

    toogleButton:{
        width:'50%',
        padding:15,
        // margin:10,
        // borderWidth:1,
        // borderColor:Colors.border,
        // borderRadius:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.white,
        justifyContent:'center'
    }
    ,radio:{
        padding:3,
        borderColor:Colors.black,
        borderWidth:1,
        marginRight:10,
        borderRadius:20
    },
    innerRadio:{
        padding:5,
        // borderWidth:1,
    },
    activeButton:{
        backgroundColor:Colors.black,
        borderRadius:10,
    },
    text:{
        fontWeight:'500',
        fontSize:15,

    },
    activeText:{
        fontWeight:'700',
        color:Colors.black
    }
})