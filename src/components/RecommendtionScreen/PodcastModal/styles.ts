import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFF6D7',
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    imageContainer:{
        padding:10,
        backgroundColor:Colors.white,
        elevation:5
    },
    image:{
        width:300,
        height:300
    },
    nameView:{
        paddingHorizontal:30,
        paddingVertical:10,
        backgroundColor:Colors.white,
        borderRadius:20
    },
    podcast_name:{
        color:Colors.black,
        fontWeight:'900',
        fontSize:20

    },
    artist_name:{
        fontSize:16,
        color:Colors.black
    },
    buttonView:{
        flexDirection:'row',
        alignItems:'center',
    },
    buttonStyle:{
        padding:10,
        backgroundColor:'white',
        margin:10,
        borderRadius:50,
        // borderWidth:1,
        alignItems:'center',
        justifyContent:'center',
        elevation:5
    },
    

})