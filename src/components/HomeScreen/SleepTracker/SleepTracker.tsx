import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'

const SleepTracker = () => {
  const [ getRating, setRating ] = useState(0);
  const string1 = 'Hi Haripriya, Did you Sleep weel last Night? Rate your Sleep quality'
  const stars = [1,2,3,4,5]
  const handleRating =(item:number)=>{
    setRating(item);
  }
  return (
    <View style={styles.container}>
      <View style={styles.moonView}>
      <Image source={Images.moon} style={styles.img}/>
      <Text style={styles.text}>{string1}</Text>
      </View>
      <View style={styles.starView}>
       { stars.map((item,index)=>{
          return(<TouchableOpacity key={index} onPress={()=>handleRating(item)}>
            {item>getRating ? <Image source={Images.star}/>:<Image source={Images.starcolor}/>}
          </TouchableOpacity>)
        })}

      </View>
      <View style={styles.submitbtn}>
        <Text style={styles.title}>Submit</Text>
      </View>
    </View>
  )
}

export default SleepTracker