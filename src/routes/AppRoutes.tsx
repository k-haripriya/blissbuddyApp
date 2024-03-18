import { View, Text } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from '../screens/SplashScreen/SplashScreen';
import OnbordingScreen from '../screens/OnboardingScreen/OnbordingScreen';
import { RouterConstants } from '../res/RouterConstants';
import SignUpScreen from '../screens/SignUpScreen/SignUpScreen';
import { NavigationStackParams } from '../types/Types';
import Intro from '../screens/AssessmentScreen/Intro/Intro';
import Question from '../screens/AssessmentScreen/Question/Question';
import MainScreen from '../screens/MainScreen/MainScreen';

const Stack = createNativeStackNavigator();


const AppRoutes:React.FC<NavigationStackParams> = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouterConstants.SignUpScreen
      } >
        <Stack.Screen name={RouterConstants.SplashScreen} component={SplashScreen} options={{headerShown:false}} />
        <Stack.Screen name={RouterConstants.OnboardingScreen} component={OnbordingScreen} options={{headerShown:false}} />
        <Stack.Screen name={RouterConstants.SignUpScreen} component={SignUpScreen} options={{headerShown:false}} />
        <Stack.Screen name={RouterConstants.Intro} component={Intro} options={{headerShown:false}} />
        <Stack.Screen name={RouterConstants.Question} component={Question} options={{headerShown:false}} />
        <Stack.Screen name={RouterConstants.MainScreen} component={MainScreen} options={{headerShown:false}} />





      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppRoutes