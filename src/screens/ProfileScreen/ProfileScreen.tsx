import { View, Text, Image, TextInput, ScrollView, TouchableOpacity } from 'react-native'
import React from 'react'
import NavBar from '../../components/Common/NavBar/NavBar'
import { Images } from '../../../assets/Images/Images'
import { useNavigation } from '@react-navigation/native'
import { styles } from './styles'

const ProfileScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () =>{
    navigation.goBack();
  }
  const fields = ['Name','Age','Weight','Current Mood','Sleep Duration','Stress Level']
  const renderField = () =>{

  }
  return (
    <View style={{flex:1}}>
    <NavBar title='My Profile' icon={Images.left} handleNavigation={handleNavigation}/>
    <Image source={Images.nature} style={styles.image}/>
    <View style={styles.imageView}>
      <Image source={Images.male} style={{height:100,width:100}}/>
    </View>
    <ScrollView style={styles.fieldContainer} showsVerticalScrollIndicator={false}>
    {
      fields.map((item,index)=>{
        return(
          <View key={index}>
            <Text style={styles.title}>{item}</Text>
          <View style={styles.inputView}>
            <TextInput style={styles.input} placeholder={` Enter Your ${item}`}/>
          </View>
          </View>
        )
      })
    }
    <View style={{paddingBottom:500}}>
    <TouchableOpacity style={styles.editButton}>
      <Text style={styles.editbuttonText}>Edit</Text>

    </TouchableOpacity>
    </View>
    </ScrollView>
    </View>
  )
}

export default ProfileScreen