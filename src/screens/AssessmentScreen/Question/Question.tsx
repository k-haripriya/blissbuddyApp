import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import { styles } from '../styles'
import { Images } from '../../../../assets/Images/Images'
import Question1 from '../Question1/Question1'
import Question2 from '../Question2/Question2'
import Question3 from '../Question3/Question3'

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
      <Question3/>
      <View style={styles.continueButtonView}>
        <Text style={styles.continueText}>Continue</Text>
      </View>
    </View>
  )
}

export default Question