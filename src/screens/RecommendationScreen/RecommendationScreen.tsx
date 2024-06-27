import { View, Text, ScrollView } from 'react-native'
import React, { useEffect, useState } from 'react'
import NavBar from '../../components/Common/NavBar/NavBar'
import { Images } from '../../../assets/Images/Images'
import { useNavigation } from '@react-navigation/native'
import { getPodcastRecommendationsApi, getRecommendationsApi } from '../../Api/Apicalls'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import ExerciseComponent from '../../components/RecommendtionScreen/ExerciseComponent/ExerciseComponent'
import SwitchComponent from '../../components/RecommendtionScreen/SwitchComponent/SwitchComponent'
import PodcastComponent from '../../components/RecommendtionScreen/PodcastComponent/PodcastComponent'

const RecommendationScreen = () => {
  const [ getData, setData ] = useState([]);
  const [ getKey, setKey ] = useState('Exercises');
  const [ getPodcasts, setPodcasts ] = useState([])
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
  const PodcastsRecommendations = async() =>{
    try{
      const res = await getPodcastRecommendationsApi(user.userId)
      console.log(res?.data?.results)
      setPodcasts(res?.data?.results)
    }catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
    
    Recommendations();
    PodcastsRecommendations();
  },[getKey])
  return (
    <>
    <NavBar title='Recommendations' icon={Images.left} handleNavigation={handleNavigation}/>
    <SwitchComponent getKey={getKey} setKey={setKey} keys={['Exercises','Podcasts']}/>
    <ScrollView>
    {getKey === 'Exercises' ?
      (getData?.map((item,index)=>{
        return(<View key={index}>
          
          <ExerciseComponent getData={item} />
        </View>)
      })):(getPodcasts?.map((item,index)=>{
        return(<View key={index}>
          
          <PodcastComponent item={item} />
        </View>)
      }))}
    </ScrollView>
    </>
  )
}

export default RecommendationScreen