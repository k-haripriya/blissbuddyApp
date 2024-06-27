import { View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../styles'
import { Strings } from '../../../res/Strings'
import { useDispatch } from 'react-redux'
import { updateStressLevel } from '../../../redux/slices/userInfo'

const Question10 = () => {
  const [ getRating, setRating ] = useState(1);
  const rating = [1,2,3,4,5]
  const dispatch = useDispatch()
  const handleRating = (rate:number) =>{
    setRating(rate)
    dispatch(updateStressLevel(rate))

  }
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question10}</Text>
      <Text style={styles.stressText}>{getRating + " "}</Text>
      <View style={styles.ratingView}>

        {rating.map((item,index)=>{
            return(
                <TouchableOpacity key={index}style={getRating === item ? [styles.ratingButton,styles.activeRatingButton]:styles.ratingButton} onPress={()=>{handleRating(item)}}>
                    <Text style={getRating === item ? [styles.ratingtext,styles.activeratingText]:styles.ratingtext}>{item}</Text>
                </TouchableOpacity>
            )
        })}

      </View>
    </View>
  )
}

export default Question10