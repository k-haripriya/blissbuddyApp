import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {onboardingConstants} from '../../constants/OnboardingConstants';
import {styles} from './styles';
import GestureRecognizer from 'react-native-swipe-gestures';
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../res/RouterConstants';

 


const OnbordingScreen = () => {
  const navigation =  useNavigation();
  const [ getScreenNumber, setScreenNumber ] = useState(1);
  const data = (onboardingConstants as any)[`screen${getScreenNumber}`];
  const handleNext = () => {
    if(getScreenNumber<3)
    {
    setScreenNumber(getScreenNumber+1);
    }
  }

  const handleSkip = () =>{
    navigation.navigate(RouterConstants.SignUpScreen)
  }

  const config = {
    velocityThreshold: 0.3,
    directionalOffsetThreshold: 80
  };

  const onSwipe = (gestureName:any,) =>{
    const SWIPE_LEFT = 'swipe_left';
    const SWIPE_RIGHT = 'swipe_right';
    switch (gestureName) {
        
        case SWIPE_LEFT:
            if(getScreenNumber<3)
            {
                setScreenNumber(getScreenNumber+1)
                
            }
          break;
        case SWIPE_RIGHT:
            if(getScreenNumber>1)
            {
               setScreenNumber(getScreenNumber-1)
            }
          break;
      }
  }
  return (
    <GestureRecognizer
        onSwipeLeft={()=>onSwipe('swipe_left')}
        onSwipeRight={()=>onSwipe('swipe_right')}
        config={config}
    style={[styles.container, {backgroundColor: data.backgroundColor}]}>
        <View style={styles.topContainer}>
      <View >
        <Image source={data.blob} />
        <Image source={data.imaage} style={getScreenNumber==2 ? [styles.image1,{left:50,bottom:40}]:styles.image1} />
      </View>
      <View>
        <Text style={[styles.title, {color: data.fontColor}]}>
          {data.title}
        </Text>
        <Text style={[styles.des, {color: data.fontColor}]}>
          {data.description}
        </Text>
      </View>
      </View>
      <View style={styles.dotsView}>
        <View style={styles.allDots}>
        {Array.from({length: 3}).map((_, index) => (
          <View key={index} style={index+1===getScreenNumber? styles.activedots:styles.inactiveDots} />
        ))}
        </View>
        <TouchableOpacity style={styles.nextButton} onPress={()=>handleSkip()}>
        <Text style={[styles.nextText,{color:data.fontColor}]}>Skip</Text>
        </TouchableOpacity>
      </View>
    </GestureRecognizer>
  );
};

export default OnbordingScreen;
