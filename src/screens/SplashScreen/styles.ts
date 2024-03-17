import { StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

export const styles = StyleSheet.create({
    flexContainer:{
        flex:1,
    },
    container:{
        flex:1,
        justifyContent:'center',
        backgroundColor:Colors.appTheme,
    },
    initialContainer:{
        flex:1,
        justifyContent:'center',
        backgroundColor:Colors.white
    },
    blob:{
        padding:25,
        backgroundColor:Colors.appTheme,
        borderRadius:350
    },
    imageContainer:{
        alignSelf:'center',    
    },
    appTextInitial:{
       position:'absolute',
       bottom:'10%',
       left:'25%',
       color:Colors.white
    },
    appText:{
        textAlign:'center',
        fontSize:36,
        color:Colors.white,
        fontFamily:'Ubuntu-Medium',
        elevation:1,
        textShadowColor: Colors.black, 
        textShadowOffset: { width: 2, height: 2 }, 
        textShadowRadius: 5, 
    },
    
})