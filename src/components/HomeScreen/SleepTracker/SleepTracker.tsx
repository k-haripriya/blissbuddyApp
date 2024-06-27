import { View, Text, Image, TouchableOpacity, TextInputBase } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'
import { getAverageSleeptracker, getTodaysSleepEntry, sleeptrackerApi } from '../../../Api/Apicalls'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const SleepTracker = () => {
  const [ getRating, setRating ] = useState(0);
  const [ showRating, setShowRating ] = useState(false);
  const [ getAverage, setAverage ] = useState(0);

  const string1 = 'Hi Haripriya, Did you Sleep well last Night? Rate your Sleep quality'
  const string2 ="Your Sleeping average for the past 3 days"
  const stars = [2,4,5,6,8]

  const handleRating =(item:number)=>{
    setRating(item);
  }
  const user = useSelector((state:RootState)=>state.setuser)
  const getAverageSleepApicall =async () =>{
    try{
      const res = await getAverageSleeptracker(user.userId)
      console.log(res?.data?.average);
      setAverage(res?.data?.average)
    }catch(err)
    {
      console.log(err)
    }
  }
  const checksleep = async () =>{
    try{
      const res = await getTodaysSleepEntry(user.userId)
      setShowRating(res?.data.today_entries_exist)
      if(res?.data.today_entries_exist)
      {
        getAverageSleepApicall();
      }
    }catch(err)
    {
      console.log(err)
    }
  }

  const postSleep = async()=>{
    try{
      const res = await sleeptrackerApi(user.userId,getRating)
      if(res?.status === 201 )
      {
        getAverageSleepApicall()
        checksleep()
      }
    }catch(err)
    {
      console.log(err)
    }
  }

  useEffect(()=>{
    checksleep()
  },[])
  return (
    <View style={styles.container}>
      <View style={styles.moonView}>
      <Image source={Images.moon} style={styles.img}/>
      <Text style={styles.text}>{!showRating ?string1:string2}</Text>
      </View>
      <View style={styles.starView}>
       { !showRating ? stars.map((item,index)=>{
          return(<TouchableOpacity key={index} onPress={()=>handleRating(item)}>
            {item>getRating ? <Image source={Images.star}/>:<Image source={Images.starcolor}/>}
          </TouchableOpacity>)
        }):(
          <View style={styles.averageSleepHours}>
            <Text style={styles.title}>{getAverage} hrs</Text>
          </View>
        )}

      </View>
     { !showRating && <TouchableOpacity style={styles.submitbtn} onPress={()=>postSleep()}>
        <Text style={styles.title}>Submit</Text>
      </TouchableOpacity>}
    </View>
  )
}

export default SleepTracker