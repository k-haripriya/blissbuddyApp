import { View, Text, Image } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../assets/Images/Images'
import { Strings } from '../../res/Strings'
import FieldContainer from '../../components/SignupPage/FieldContainer/FieldContainer'

const SignUpScreen = () => {
  const [ getPageType, setPageType ] = useState('SignUp')
  let Fields = ['Email', 'Name','Password']

  if(getPageType === 'SignUp')
  {
    Fields = ['Email', 'Name','Password']
  }
  else
  {
    Fields = ['Email','Password']
  }

  const handlePageAlter = (name:string) =>{
    
      setPageType(name);
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Images.signup} style={styles.image} />
        <Text style={styles.des}>{Strings.signup.des}</Text>

      </View>
      <View style={styles.slant}/>
      <View style={getPageType === 'SignUp'? styles.bottomContainer: styles.bottomContainer2}>
        <FieldContainer Fields={Fields} getPageType={getPageType} handlePageAlter={handlePageAlter}/>
      </View>

    </View>
  )
}

export default SignUpScreen