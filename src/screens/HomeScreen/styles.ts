import { StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

export const styles = StyleSheet.create({
    imgcontainer:{
        marginTop:-30,
    },
    trackersText:{
        fontSize:22,
        color:Colors.black,
        textAlign:'center',
        fontWeight:'700'
    },
    trackerView:{
        flexDirection:'row',
        marginHorizontal:10,
        marginVertical:20,
        justifyContent:'space-between',
        // alignItems:'center'
    }
})