import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { addwaterApi, getWaterApi } from '../../../Api/Apicalls'

const WaterTracker = () => {
  const user = useSelector((state:RootState)=>state.setuser)
  const [ getdata, setdata ] = useState(0)
  const addwaterApicall = async () =>{
    try{
      const res = await addwaterApi(user.userId)
      if(res?.status === 201)
      {
        getwaterApicall();
      }
    }catch(err)
    {
      console.log(err);
    }
  }
  const getwaterApicall = async () =>{
    try{
      const res = await getWaterApi(user.userId)
      setdata(res?.data?.count)

    }catch(err)
    {
      console.log(err)
    }
  }
  useEffect(()=>{
    getwaterApicall()
  },[])
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Water Tracker</Text>
      <View style={styles.cupView}>
        <Image source={Images.cup} />
        <TouchableOpacity style={styles.addView} onPress={()=>addwaterApicall()}>
        <Image source={Images.plus} />
        </TouchableOpacity>
      </View>
      <View style={styles.resultView}>
            <Text style={styles.result}>{getdata} glasses</Text>
      </View>
    </View>
  )
}

export default WaterTracker