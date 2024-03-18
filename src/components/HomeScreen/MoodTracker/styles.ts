import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        backgroundColor:Colors.moodTracker,
        marginHorizontal:20,
        borderRadius:30,
        padding:20,
        alignItems:'center',
        justifyContent:'space-between',
        elevation:5,
        marginBottom:500,
        marginTop:10
       

    },
    title:{
        // width:200,
        lineHeight:20,
        fontSize:16,
        textAlign:'center',
        color:Colors.black,
        fontWeight:'600'
    },
    starView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:10
    },
    emojiView:{
        padding:5,
        borderRadius:30
    },
    activeEmoji:{
        backgroundColor:Colors.highlightEmoji
    },
    submitbtn:{
        padding:10,
        backgroundColor:Colors.red1,
        borderRadius:30
    }
})