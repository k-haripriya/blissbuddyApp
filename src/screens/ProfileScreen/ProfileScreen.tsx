import { View, Text } from 'react-native'
import React from 'react'
import NavBar from '../../components/Common/NavBar/NavBar'
import { Images } from '../../../assets/Images/Images'
import { useNavigation } from '@react-navigation/native'

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () =>{
    navigation.goBack();
  }
  return (
    <NavBar title='My Profile' icon={Images.left} handleNavigation={handleNavigation}/>
  )
}

export default ProfileScreen