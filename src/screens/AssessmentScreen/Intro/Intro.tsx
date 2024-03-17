import { View, Text, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Strings } from '../../../res/Strings'
import { Images } from '../../../../assets/Images/Images'

const Intro = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>{Strings.intro.header}</Text>
      <View>
      <Image source={Images.introbubble}/>
      <Image source={Images.intoimg} style={styles.introImage}/>
      </View>
      <Text style={styles.des}>
        {Strings.intro.des}
      </Text>
      <TouchableOpacity style={styles.buttonView}>
        <Text style={styles.buttontext}>{Strings.intro.start}</Text>
      </TouchableOpacity>
    </View>
  )
}

export default Intro