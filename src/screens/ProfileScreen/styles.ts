import { StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

export const styles = StyleSheet.create({
    image:{
        width:'100%',
        borderBottomLeftRadius:200,
        borderBottomRightRadius:200
    },
    imageView:{
        position:'absolute',
        left:'33%',
        top:250,
        backgroundColor:Colors.white,
        borderRadius:70,
        padding:15,
        elevation:5,
    },
    fieldContainer:{
        marginTop:60,
        // flex:1,
        paddingBottom:400

    },
    inputView:{
        padding:5,
        margin:10,
        elevation:5,
        backgroundColor:Colors.white,
        borderRadius:30,


    },
    input:{
        height:40,
        // borderWidth:1,

    },
    editButton:{
        alignSelf:'center',
        marginTop:30,
        padding:10,
        backgroundColor:Colors.continueButtonColor,
        paddingHorizontal:50,

    },
    editbuttonText:{
        color:Colors.white,
        fontWeight:'800',
        fontSize:18
    },
    title:{
        marginLeft:20,
        fontSize:18,
        color:Colors.black,
        fontWeight:'700'

    }
})