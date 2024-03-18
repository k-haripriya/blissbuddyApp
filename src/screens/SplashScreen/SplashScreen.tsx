import { View, Text, Image, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Images } from '../../../assets/Images/Images'
import { styles } from './styles'
import { Strings } from '../../res/Strings'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../res/RouterConstants'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

const SplashScreen = () => {
  const [ getStart, setStart ] = useState(true);
  const navigation = useNavigation();
  const user = useSelector((state:RootState)=>state.setuser)

  useEffect(()=>{
    setTimeout(()=>{
      setStart(!getStart);
   
    },1000)
    setTimeout(()=>{
      if(user)
      {
        navigation.navigate(RouterConstants.MainScreen);
      }
      else{
        navigation.navigate(RouterConstants.OnboardingScreen);
      }
   
    },2000)

    
  },[])

  

  
  return (
    <SafeAreaView style={styles.flexContainer}>
      <View style={getStart ? styles.initialContainer:styles.container}>
        <View style={[styles.imageContainer,styles.blob]}>
            <Image source={Images.logo} />
            
         
        </View>
      <Text style={getStart?styles.appTextInitial:styles.appText}>{Strings.Common.appName}</Text>


      </View>

    </SafeAreaView>
  )
}

export default SplashScreen