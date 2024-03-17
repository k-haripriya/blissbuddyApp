import { Dimensions, StyleSheet } from "react-native";
import { Colors } from "../../res/Colors";

const { width } = Dimensions.get('window');
const itemWidth = width / 2 - 20;

export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:Colors.quesBackground,
        justifyContent:'space-between'
    },
    header:{
        padding:10,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },  
    title:{
        fontSize:24,
        fontFamily:'Ubuntu-BoldItalic',
        color:Colors.black,
    },
    questionNumberView:{
        paddingHorizontal:20,
        paddingVertical:8,
        backgroundColor:Colors.quesColor2,
        borderRadius:20,

    },
    questionNumber:{
        fontSize:16,
        fontFamily:'Ubuntu-Medium'
    },
    continueButtonView:{
        padding:10,
        backgroundColor:Colors.continueButtonColor,
        marginHorizontal:30,
        marginVertical:10
    },
    continueText:{
        color:Colors.white,
        textAlign:'center',
        fontSize:22,
        fontWeight:'900'  
    },
    questionContainer:{
        flex:1,
        justifyContent:'space-evenly',
        alignItems:'center'
    },
    question:{
        fontSize:28,
        fontFamily:'Ubuntu-BoldItalic',
        color:Colors.black,
        textAlign:'center',
        marginHorizontal:20
    },
    answerView:{
        height:60,
        width:350,
        backgroundColor:Colors.white,
        margin:10,
        elevation:5,
        shadowColor:Colors.black,
        shadowOffset:{
            width:5,
            height:5
        },
        borderRadius:30,
        alignItems:'center',
        justifyContent:'space-between',
        flexDirection:'row',
        paddingHorizontal:20

    },
    answersList:{
        textAlign:'center',
        fontSize:16,
        color:Colors.black

    },
    activeAnswerView:{
        backgroundColor:Colors.continueButtonColor
    },
    activeAnswerList:{
        color:Colors.white,
        fontSize:16,
        fontWeight:'900',
    },
    radioButton:{
        borderWidth:1,
        padding:5,
        borderRadius:20
    },
    activeButton:{
        borderColor:Colors.white
    },
    radioButtonInactive:{
        padding:8
    },
    activeradioButton:{
        padding:8,
        backgroundColor:Colors.white,
        borderRadius:10
    },
    genderContainer:{
        paddingVertical:30,
        width:350,
        flexDirection:"row",
        backgroundColor:Colors.sandal,
        borderRadius:20,
        justifyContent:'space-between',
        paddingRight:30
    },
    activegenderContainer:{
        borderWidth:1,
        elevation:5,
        shadowColor:Colors.black,
        shadowOffset:{
            width:10,
            height:10
        }
    },
    iconConatiner:{
        justifyContent:'space-between',
        alignItems:'center'
    },
    genderText:{
        fontSize:18,
        fontFamily:'Ubuntu-Medium',
        color:Colors.black
    },
    inputBox:{
        backgroundColor:Colors.white,
        padding:10,
        marginTop:50,
        elevation:5,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        paddingHorizontal:20
    },
    textInput:{
        width:200,
        color:Colors.textColor,
        fontSize:16
    },
    value:{
       fontSize:22,
       color:Colors.black,
       fontWeight:'700' 
    },
    errorText:{
        color:Colors.continueButtonColor,
        fontWeight:'900',
        marginTop:10,
        fontSize:16
    },
    docimg:{
        alignSelf:'center',
        marginLeft:40
    },
    ynview:{
        flexDirection:'row'
    },
    ynbutton:{
        paddingVertical:10,
        paddingHorizontal:50,
        borderRadius:50,
        marginHorizontal:10
    },
    ynText:{
       fontSize:20,
       fontWeight:'500',
       color:Colors.black 
    }, 
    activeynbutton:{
        elevation:5,
        borderWidth:1,
        borderColor:Colors.black
    },
    phview:{
        marginHorizontal:80,
    },
    phyyesno:{
        flexDirection:'row',
        marginVertical:30,
        padding:30,
        justifyContent:"space-between",
        alignItems:'center'

    },
    ansText:{
        fontSize:22,
        fontWeight:'700',
    },
    anstext2:{
        fontSize:18,
        width:200
    },
    medcontainer:{
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
    },
    medView:{
        width:itemWidth,
        alignItems:'center',
        marginVertical:10,
        paddingVertical:30,
        backgroundColor:Colors.sandal,
        borderRadius:30
    },
    activemedView:{
        backgroundColor:Colors.sandal2,
        elevation:5
    },
    medText:{
        color:Colors.black,
        fontSize:16,
        textAlign:'center',
        margin:20
    },
    stressText:{
        fontSize:81,
        fontFamily:'Ubuntu-BoldItalic',
        color:Colors.black,
        // marginLeft:10
    },
    ratingView:{
        padding:10,
        backgroundColor:Colors.white,
        borderRadius:50,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between'
    },
    ratingButton:{
        padding:20,
        backgroundColor:Colors.white,
        borderRadius:30
    },
    activeRatingButton:{
        backgroundColor:Colors.red1,
    },
    ratingtext:{
        fontSize:32
    },
    activeratingText:{
        fontWeight:'900',
        fontSize:35
    }
    
})