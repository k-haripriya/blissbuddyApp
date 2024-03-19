import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/Common/NavBar/NavBar'
import { Images } from '../../../assets/Images/Images'
import { useNavigation } from '@react-navigation/native'
import { getRecommendationsApi } from '../../Api/Apicalls'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ExerciseComponent from '../../components/RecommendtionScreen/ExerciseComponent/ExerciseComponent'

const RecommendationScreen = () => {
  const [ getData, setData ] = useState([]);
  const navigation = useNavigation();
  const handleNavigation = () =>{
    navigation.goBack();
  }
  const user = useSelector((state:RootState)=>state.setuser)
  const Recommendations = async() =>{
    try{
      const res = await getRecommendationsApi(user.userId)
      console.log(res?.data?.results)
      setData(res?.data?.results)
    }catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
    Recommendations();
  },[])
  return (
    <>
    <NavBar title='Recommendations' icon={Images.left} handleNavigation={handleNavigation}/>
    <ScrollView>
      {getData?.map((item,index)=>{
        return(<View key={index}>
          <ExerciseComponent getData={item}/>
        </View>)
      })}
    </ScrollView>
    </>
  )
}

export default RecommendationScreen