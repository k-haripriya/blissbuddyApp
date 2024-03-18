import { View, Text, TouchableOpacity, Image, RootTagContext } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { Images } from '../../../../assets/Images/Images'
import Question1 from '../Question1/Question1'
import Question2 from '../Question2/Question2'
import Question3 from '../Question3/Question3'
import Question4 from '../Question4/Question4'
import Question5 from '../Question5/Question5'
import Question6 from '../Question6/Question6'
import Question7 from '../Question7/Question7'
import Question8 from '../Question8/Question8'
import Question9 from '../Question9/Question9'
import Question10 from '../Question10/Question10'
import { QuestionComponents } from '../../../types/Types'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { userinfo } from '../../../Api/Apicalls'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../../res/RouterConstants'

const Question = () => {
  const [ getQuestionNumber, setQuestionNumber ] = useState(1);
  const data = useSelector((state:RootState) =>state.userInfo)
  const user = useSelector((state:RootState)=>state.setuser)
  const navigation = useNavigation();
  const handleQuestionNumber =async() =>{
    if(getQuestionNumber!=10)
    {
    setQuestionNumber(getQuestionNumber+1);
    }
    else{
      try{
        const res:any = await userinfo(user,data)
        if(res?.status==201)
        {
          navigation.navigate(RouterConstants.MainScreen)
        }

      }catch(err)
      {
        console.log(err);
      }
    }
  }

  const handleBack = ()=>{
    if(getQuestionNumber>1)
    {
      setQuestionNumber(getQuestionNumber-1);
    }
  }
  const questionComponents:QuestionComponents = {
    1: Question1,
    2: Question2,
    3: Question3,
    4: Question4,
    5: Question5,
    6: Question6,
    7: Question7,
    8: Question8,
    9: Question9,
    10: Question10,
  };

  const QuestionComponent = questionComponents[getQuestionNumber];
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={()=>handleBack()}>
          <Image source={Images.backabutton}/>
        </TouchableOpacity>
        <Text style={styles.title}>Assessment</Text>
        <View style={styles.questionNumberView}>
          <Text style={styles.questionNumber}>{getQuestionNumber}/10</Text>
        </View>
      </View>
      <QuestionComponent/>
      <TouchableOpacity style={styles.continueButtonView} onPress={()=>handleQuestionNumber()}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Question