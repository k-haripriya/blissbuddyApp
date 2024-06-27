import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import { Images } from '../../../../assets/Images/Images'
import { styles } from './styles'

const Loader = () => {
  return (
    <Modal transparent={true}>
        <View style={styles.container}>
            <Image source={Images.loader} style={styles.img}/>
        </View>

    </Modal>
  )
}

export default Loader