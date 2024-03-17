import { View, Text, Image, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Images } from '../../../assets/Images/Images'
import { styles } from './styles'
import { Strings } from '../../res/Strings'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../res/RouterConstants'

const SplashScreen = () => {
  const [ getStart, setStart ] = useState(true);
  const navigation = useNavigation();

  useEffect(()=>{
    setTimeout(()=>{
      setStart(!getStart);
   
    },1000)
    setTimeout(()=>{
      navigation.navigate(RouterConstants.OnboardingScreen );
   
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