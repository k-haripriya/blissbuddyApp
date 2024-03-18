import { View, Text, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'
import { NavBarType } from '../../../types/Types'

const NavBar:React.FC<NavBarType> = (props) => {
  const { icon, title,header,handleNavigation } = props; 
  return (
    <View style={styles.container}>
        <TouchableOpacity style={styles.iconView} onPress={()=>handleNavigation()}>
        <Image source={icon}/>
        </TouchableOpacity>
        <View>
        {header && <Text style={styles.headerText}>Header</Text>}
        <Text style={styles.titleText}>{title}</Text>
        </View>
    </View>
  )
}

export default NavBar