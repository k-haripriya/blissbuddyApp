import { View, Text, Image, Alert } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../assets/Images/Images'
import { Strings } from '../../res/Strings'
import FieldContainer from '../../components/SignupPage/FieldContainer/FieldContainer'
import { addStreak, login, signup, updateStreak } from '../../Api/Apicalls'
import { useNavigation } from '@react-navigation/native'
import { RouterConstants } from '../../res/RouterConstants'
import Loader from '../../components/Common/Loader/Loader'
import { useDispatch } from 'react-redux'
import { setuser } from '../../redux/slices/setUserSlice'

const SignUpScreen = () => {
  const [ getPageType, setPageType ] = useState('SignUp')
  let Fields = ['Email', 'Name','Password']
  const [ getIsLoading, setIsLoading ] = useState(false);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  const [ getUserData, setUserData ] = useState({
    "Email":"",
    "Name":"",
    "Password":"",
  })

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

  const handleInputChange = (field:string, text:string) =>{
    setUserData({...getUserData,[field]:text})
  }

  const handleSubmit = async () =>{
    if(getPageType === 'SignUp')
    {
      try{
        setIsLoading(true);
        const res:any = await signup(getUserData);
        console.log(res?.data?.id);
        dispatch(setuser( res?.data?.id));
        setIsLoading(false);
        if(res?.status === 201)
        {
          const response = await addStreak(res?.data?.id)
          console.log(response?.status)
          navigation.navigate(RouterConstants.Intro)
        }
        else{
          Alert.alert("Please enter valid details")
        }

      }catch(err)
      {
        console.log("Error in calling signup",err)
       
      }
    }
    else if(getPageType === "Login")
    {
      try{
        setIsLoading(true);
        const res:any = await login(getUserData);
        setIsLoading(false);
        if(res?.status === 200)
        {
          dispatch(setuser(res.data.id));
          const response = await updateStreak(res.data.id);
          navigation.navigate(RouterConstants.MainScreen)
        }
        else{
          Alert.alert("Please enter valid details")
        }

      }catch(err)
      {
        console.log("Error in calling signup",err)
       
      }
    }

  }

  return (
    <>
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <Image source={Images.signup} style={styles.image} />
        <Text style={styles.des}>{Strings.signup.des}</Text>

      </View>
      <View style={styles.slant}/>
      <View style={getPageType === 'SignUp'? styles.bottomContainer: styles.bottomContainer2}>
        <FieldContainer Fields={Fields} getPageType={getPageType} handlePageAlter={handlePageAlter} handleInputChange={handleInputChange} handleSubmit={handleSubmit}/>
      </View>
      
    </View>
    {
      getIsLoading && <Loader/>
    }
    </>

  )
}

export default SignUpScreen