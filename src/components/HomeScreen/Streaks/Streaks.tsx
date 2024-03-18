import { View, Text, Image } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'

const Streaks = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Streaks</Text>
      <View style={styles.imgContainer}>
        <Image source={Images.flame}/>
      </View>
      <View style={styles.resultView}>
            <Text style={styles.result}>5 days</Text>
      </View>
    </View>
  )
}

export default Streaks