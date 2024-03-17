import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
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

const Question = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <Image source={Images.backabutton}/>
        </TouchableOpacity>
        <Text style={styles.title}>Assessment</Text>
        <View style={styles.questionNumberView}>
          <Text style={styles.questionNumber}>1/14</Text>
        </View>
      </View>
      <Question10/>
      <TouchableOpacity style={styles.continueButtonView}>
        <Text style={styles.continueText}>Continue</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Question