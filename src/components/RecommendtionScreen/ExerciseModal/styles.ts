import { StyleSheet } from "react-native";
import { Colors } from "../../../res/Colors";

export const styles = StyleSheet.create({
    difficultyView:{
        margin:10
    },
    container: {
        position: 'relative',
        width: '100%',
        height: '100%',
    },
    header:{
        fontWeight:'700',
        fontSize:18,
        color:Colors.black
    },
    value:{
        fontWeight:'400'
    },
    des:{
        textAlign:'justify',
        marginHorizontal:10
    },
    calView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        margin:10
    },
    title:{
        fontSize:18,
        color:Colors.black,
        fontWeight:'500'
    },
    value1:{
        fontWeight:'400',
        color:Colors.black

    },
    cal:{
        alignItems:'center'
    },
    chaptersView:{
        padding:10,
        borderWidth:1,
        borderColor:Colors.border,
        margin:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'

    },
    chapterimg:{
        height:50,
        width:50,
        borderRadius:50
    },
    nameView:{
        marginLeft:20
    },
    chapterName:{
        fontWeight:'700',
        fontSize:16,
        // color:Colors.black
    },
    timerbutton:{
        backgroundColor:'#E8E8E8',
        padding:10,
        borderRadius:10
    },
    videoView:{
    }

      
})