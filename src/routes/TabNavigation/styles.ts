import { StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

export const styles = StyleSheet.create(
    {
        tabview:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center',
        },
        activeButton:{
            padding:10,
            backgroundColor:Colors.white,
            borderRadius:25,
            elevation:5,
        },
    }
)
