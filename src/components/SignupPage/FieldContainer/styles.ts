import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container: {
        alignSelf:'center',
        paddingHorizontal:30,
        paddingVertical:10,
        backgroundColor:Colors.signupGreen2,
        borderRadius:30
    },
    headerView:{
        padding:5,
        // borderBottomWidth:1,
        // borderBottomColor:Colors.textColor,
    },
    headerText:{
        fontSize:25,
        fontFamily:'Ubuntu-Medium',
        textAlign:'center'
    },
    textInputView:{
        marginVertical:10,
        paddingRight:200,
        paddingLeft:10,
        backgroundColor:Colors.white,
        borderRadius:10
    },
    button:{
        padding:10,
        backgroundColor:Colors.signupGreen3,
        borderRadius:10,
        marginVertical:10,
    },
    buttonText:{
        textAlign:'center',
        color:Colors.black,
        fontSize:18,
        fontWeight:'bold'
    },
    pageAlterView:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'center'
    },
    pageAlter:{
        textAlign:'center'
    },
    alterPageText:{
        fontSize:16,
        fontWeight:'900'
    }
})