import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    exercisecard:{
        padding:10,    
        marginVertical:10    
    },
    imageView:{
        padding:5,
        borderWidth:1,
        // borderRadius:10,
        borderColor: '#A8A8A8',
        backgroundColor:'white',
        elevation:5
    },
    image:{
        width:120,
        height:120,
        borderRadius:5
    },
    descriptionView:{
       paddingVertical:6,
       paddingHorizontal:5,
       borderTopWidth:1,
       marginTop:10,
       borderColor: '#A8A8A8'
    },
    exerciseTitle:{
        fontWeight:'700',
        color:Colors.black,
    },
    description:{
        fontSize:10
    },
    hashtagName:{
        marginHorizontal:10,
        fontWeight:'700',
        color:Colors.black
    },
})