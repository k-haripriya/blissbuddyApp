import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.violet,
        marginHorizontal:20,
        borderRadius:30,
        padding:20,
        alignItems:'center',
        justifyContent:'space-between',
        elevation:5,
        marginBottom:10

    },
    title:{
        fontSize:14,
        fontWeight:'700',
        color:Colors.black
    },
    moonView:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    text:{
        width:200,
        lineHeight:20,
        fontSize:16,
        textAlign:'center',
        color:Colors.black,
        fontWeight:'700'
    },
    img:{
        marginTop:-20,
    },
    starView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    submitbtn:{
        padding:10,
        backgroundColor:Colors.introBackground,
        borderRadius:30,
        marginTop:10
    },
    averageSleepHours:{
        flex:1,
        backgroundColor:Colors.introBackground,
        paddingVertical:10,
        paddingHorizontal:30,
        borderRadius:30,
        marginTop:10,
        alignItems:'center',
        justifyContent:'center',
    }
})