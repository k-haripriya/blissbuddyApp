import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import Video from 'react-native-video'
import CheckBox from '@react-native-community/checkbox'
import { SwitchComponentType } from '../../../types/Types'

const SwitchComponent:React.FC<SwitchComponentType> = (props) => {
  const { getKey, setKey,keys } = props
  return (
    <View style={styles.container}>
        {
            keys.map((item,index)=>{
                return(
                    <TouchableOpacity style={getKey === item ? [styles.toogleButton,styles.activeContainer]:styles.toogleButton} key={index} onPress={()=>setKey(item)}>
                        <View style={styles.radio}>
                            <View style={getKey === item ? [styles.innerRadio,styles.activeButton]:styles.innerRadio}></View>
                        </View>
                        <Text style={getKey === item ? [styles.text,styles.activeText]:styles.text}>{item}</Text>
                    </TouchableOpacity>

                )
            })
        }
      
    </View>
  )
}

export default SwitchComponent