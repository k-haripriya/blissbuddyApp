import { View, Text, Image, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'
import { getCurrentMood, postCurrentMood } from '../../../Api/Apicalls'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'

const MoodTracker = () => {
  const user = useSelector((state:RootState)=>state.setuser)
  const String1 = 'Tell us how you\'re feeling today'
  const [ getKey, setKey ] = useState('')
  const [ getShow, setShow ] = useState(false)
  const values = [
    {
        icon:Images.depressed,
        key:'depressed',
    },
    {
        icon:Images.anxious,
        key:'anxious',
    },
    {
        icon:Images.doubtful,
        key:'doubtful',
    },
    {
        icon:Images.normal,
        key:'normal',
    },
    {
        icon:Images.happy1,
        key:'happy',
    },
    {
        icon:Images.joyful,
        key:'joyful'
    }
  ]
  const postApicall = async () =>{
    try{
      const res = await postCurrentMood(user.userId,getKey)
      if(res?.status ===201)
      {
        getApiCall()
      }

    }catch(err)
    {
      console.log(err)
    }
  }

  const getApiCall = async() =>{
    try{
      const res = await getCurrentMood(user.userId)
      if(res?.data?.length === 0)
      {
        setShow(false)
      }
      else
      {
        setShow(true)
      }

    }catch(err)
    {
      console.log(err);
    }
  }
  useEffect(()=>{
    getApiCall()
  })
  return (
   !getShow ? <View style={styles.container}>
      <Text style={styles.title}>{String1}</Text>
      <View style={styles.starView}>
        {
            values.map((item,index)=>{
                return(
                    <TouchableOpacity key={index} style={getKey===item.key ? [styles.emojiView,styles.activeEmoji]:styles.emojiView} onPress={()=>setKey(item.key)}>
                        <Image source={item.icon}></Image>
                        </TouchableOpacity>
                )
            })
        }
      </View>
      <TouchableOpacity style={styles.submitbtn} onPress={()=>postApicall()}>
        <Text style={styles.title}>Submit</Text>
      </TouchableOpacity>
    </View> :<></>
  )
}

export default MoodTracker