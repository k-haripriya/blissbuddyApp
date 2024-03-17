import { StyleSheet } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";

export const styles = StyleSheet.create({
    container:{
        flex:1,
        
    },
    topContainer:{
        flex:1,
        justifyContent:'space-evenly',    
        alignItems:'center'
    },
    title:{
        // fontFamily:'Ubuntu-Medium',
        fontSize:32,
        fontWeight:'900',
        textAlign:'center',
        marginBottom:50

    },
    des:{
        fontSize:18,
        textAlign:'center',
        marginHorizontal:50
    },
    image1:{
        position:'absolute',
        left:35,
        bottom:20
    },
    dotsView:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginBottom:20,
        marginHorizontal:15
    },
    allDots:{
        flexDirection:'row',
        alignItems:'center'

    },
    activedots:{
       padding:10,
       backgroundColor:Colors.white,
       borderRadius:10 ,
       marginRight:10
    },
    inactiveDots:{
       padding:8,
       borderWidth:1,
       borderColor:Colors.white,
       borderRadius:10 ,
       marginRight:10
    },
    nextButton:{
        padding:10
    },
    nextText:{
        fontSize:18,
        fontWeight:'500'
    }
})