import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { Strings } from '../../../res/Strings'

const Question10 = () => {
  const [ getRating, setRating ] = useState(0);
  const rating = [1,2,3,4,5]

  const handleRating = (rate:number) =>{
    setRating(rate)
  }
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question10}</Text>
      <Text style={styles.stressText}>{getRating + " "}</Text>
      <View style={styles.ratingView}>

        {rating.map((item,index)=>{
            return(
                <TouchableOpacity style={getRating === item ? [styles.ratingButton,styles.activeRatingButton]:styles.ratingButton} onPress={()=>{handleRating(item)}}>
                    <Text style={getRating === item ? [styles.ratingtext,styles.activeratingText]:styles.ratingtext}>{item}</Text>
                </TouchableOpacity>
            )
        })}

      </View>
    </View>
  )
}

export default Question10