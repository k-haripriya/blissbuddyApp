import { View, Text, Image } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'
import { updateStreak } from '../../../Api/Apicalls'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { streaksType } from '../../../types/Types'

const Streaks = () => {

  const user = useSelector((state:RootState)=>state.setuser)
  const [ getStreak, setStreak ] = useState(0);
  const StreakApiCall = async () =>{
    const response = await updateStreak(user.userId);
    setStreak(response?.data?.Streak)

  }


  useEffect(()=>{
    StreakApiCall()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Streaks</Text>
      <View style={styles.imgContainer}>
        <Image source={Images.flame}/>
      </View>
      <View style={styles.resultView}>
            <Text style={styles.result}> {getStreak} days</Text>
      </View>
    </View>
  )
}

export default Streaks