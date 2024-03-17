import { StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    topContainer:{
        
        backgroundColor:Colors.signupGreen,
        height:'65%',
    },
    slant:{
        marginTop:-50,
        backgroundColor:Colors.signupGreen,
        height:'15%',
        width:'110%',
        transform: [{ skewY: '15deg' }],

    },
    image:{
        alignSelf:'center'
    },
    des:{
        color:Colors.textColor,
        fontSize:20,
        lineHeight:40,
        fontFamily:'Ubuntu-Medium',
        textAlign:'center',
    },
    bottomContainer:{
        marginTop:-180
    },
    bottomContainer2:{
        marginTop:-120
    }
})