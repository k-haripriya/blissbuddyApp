import { View, Text } from 'react-native'
import React, { useEffect } from 'react'
import { TabNavigation } from '../../routes/TabNavigation/TabNavigation'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'
import { updateStreak } from '../../Api/Apicalls'

const MainScreen = () => {

  return (
      <TabNavigation/>
    
  )
}

export default MainScreen