import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'

const WaterTracker = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tracker</Text>
      <View style={styles.cupView}>
        <Image source={Images.cup} />
        <TouchableOpacity style={styles.addView}>
        <Image source={Images.plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.resultView}>
            <Text style={styles.result}>6 glasses</Text>
      </View>
    </View>
  )
}

export default WaterTracker