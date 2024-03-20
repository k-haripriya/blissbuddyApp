import { StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

export const styles = StyleSheet.create({
    pageContainer:{
        flex:1,
        backgroundColor:'#FFF9EF'
    },

    container:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding:15,
        backgroundColor:'#F3E7D5',
        margin:10,
        borderRadius:3,
        elevation:5,
        borderColor:Colors.border,
        
    },
    imageandname:{
        flexDirection:'row',
        alignItems:'center',
    },
    imageView:{
        padding:5,
        paddingHorizontal:10,
        marginRight:20,
        backgroundColor:Colors.white,
        borderRadius:50,
        elevation:5
    },
    button:{
        padding:10,
        paddingHorizontal:20,
        borderColor:Colors.border,
        borderWidth:1,
        borderRadius:20,
        backgroundColor:Colors.white
    },
    communityName:{
        fontWeight:'800',
        color:Colors.black,
        fontSize:16
    },
    des:{
        color:Colors.black,
        fontSize:12,
        width:200

    },
    joinButton:{
        color:Colors.black,
        fontWeight:'700'

    },
    addButton:{
        padding:10,
        position:'absolute',
        bottom:120,
        right:30,
        borderRadius:30,
        backgroundColor:Colors.black,
        elevation:5
    },
    
})