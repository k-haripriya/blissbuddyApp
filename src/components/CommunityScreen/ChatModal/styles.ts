import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF8EE',
        justifyContent:'flex-end',
        
    },
    chatContainer:{
        padding:10,
        maxWidth:200,
        backgroundColor:'#FFEFD0',
        margin:10,
        borderWidth:1,
        borderColor:'#efefef',
        borderRadius:10,
        elevation:5,
        // marginVertical:5
        // paddingHorizontal:30
    },
    fromContainer:{
        backgroundColor:Colors.sandal,

    },
    from:{
        alignSelf:'flex-end',
        alignItems:'flex-end',

    },
    to:{
        alignSelf:'flex-start',
        
    },
    profileIcon:{
        height:20,
        width:20
    },
    nameView:{
        flexDirection:'row',
        alignItems:'center',
    },
    fromNameView:{
        flexDirection:'row-reverse',
        alignItems:'center',
    },
    name:{
        fontSize:10,
        marginHorizontal:5,


    },
    messageInput:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.sandal,
        // marginTop:5
        
    },
    textinput:{
        flex:1,
        borderColor:Colors.border,
        borderWidth:1,
        backgroundColor:Colors.white
    },
    send:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.border,
        // borderRadius:100,
        backgroundColor:Colors.white,
        marginLeft:10,
        // elevation:5
    },
    sendIcon:{
        height:30,
        width:30
    }
})