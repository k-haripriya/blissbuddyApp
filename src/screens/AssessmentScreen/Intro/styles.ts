import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.introBackground,
        justifyContent:'space-between',
        alignItems:'center',
        padding:30
    },
    headerText:{
        fontSize:28,
        fontFamily:'Ubuntu-Medium',
        color:Colors.introTextColor
    },
    introImage:{
        position:'absolute',
        left:-15
    },
    des:{
      textAlign:'center',
      marginHorizontal:50,
      fontSize:22,
    //   fontFamily:'Ubuntu-Regular',
      lineHeight:40,
      fontWeight:'bold',
      color:Colors.white

    },
    buttonView:{
        paddingHorizontal:50,
        paddingVertical:10,
        backgroundColor:Colors.introButton,
        borderRadius:10
    },
    buttontext:{
        // fontFamily:'Ubuntu-Medium',
        fontSize: 20,
        fontWeight:'bold',
        color:Colors.introTextColor
    }
})