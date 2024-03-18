import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'

const MoodTracker = () => {
  const String1 = 'Tell us how your feeling Today'
  const [ getKey, setKey ] = useState('')
  const values = [
    {
        icon:Images.depressed,
        key:'depressed',
    },
    {
        icon:Images.anxious,
        key:'anxious',
    },
    {
        icon:Images.doubtful,
        key:'doubtful',
    },
    {
        icon:Images.normal,
        key:'normal',
    },
    {
        icon:Images.happy1,
        key:'happy',
    },
    {
        icon:Images.joyful,
        key:'joyful'
    }
  ]
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{String1}</Text>
      <View style={styles.starView}>
        {
            values.map((item,index)=>{
                return(
                    <TouchableOpacity key={index} style={getKey===item.key ? [styles.emojiView,styles.activeEmoji]:styles.emojiView} onPress={()=>setKey(item.key)}>
                        <Image source={item.icon}></Image>
                        </TouchableOpacity>
                )
            })
        }
      </View>
      <View style={styles.submitbtn}>
        <Text style={styles.title}>Submit</Text>
      </View>
    </View>
  )
}

export default MoodTracker