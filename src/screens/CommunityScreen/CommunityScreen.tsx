import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../../components/Common/NavBar/NavBar'
import { Images } from '../../../assets/Images/Images'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../res/RouterConstants'

const CommunityScreen = () => {

  const navigation = useNavigation();
  const handleNavigation = () =>{
    navigation.goBack();
  }
  return (
   <NavBar title='Community' icon={Images.left} handleNavigation={handleNavigation}/>
  )
}

export default CommunityScreen