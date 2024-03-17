import { Colors } from "react-native/Libraries/NewAppScreen";
import { Images } from "../../assets/Images/Images";
import { Strings } from "../res/Strings";

export const onboardingConstants = {
    screen1:{
        imaage:Images.track,
        title:Strings.onBoarding.title1,
        description:Strings.onBoarding.des1,
        backgroundColor:"#EAB9B9",
        blob:Images.pinkblob,
        fontColor:'#702626'
    },
    screen2:{
        imaage:Images.exercise,
        title:Strings.onBoarding.title2,
        description:Strings.onBoarding.des2,
        backgroundColor:"#DAEAB9",
        blob:Images.yellowblob,
        fontColor:'#4E6441'
    },
    screen3:{
        imaage:Images.health,
        title:Strings.onBoarding.title3,
        description:Strings.onBoarding.des3,
        backgroundColor:'#B9D5EA',
        blob:Images.blueblob,
        fontColor:'#414B64'
    }
}