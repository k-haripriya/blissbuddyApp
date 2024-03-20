import { View, Text, Modal, Image } from 'react-native'
import React from 'react'
import { ExerciseModalType, PodcastModalType } from '../../../types/Types'
import NavBar from '../../Common/NavBar/NavBar';
import { Images } from '../../../../assets/Images/Images';
import { styles } from './styles';

const PodcastModal:React.FC<PodcastModalType> = (props) => {
    const {item,setModal} = props;
    const handleNavigation = ()=>{
        setModal(false)
      }
  return (
    <Modal>
      <NavBar icon={Images.left}  title={item.podacast_name} handleNavigation={handleNavigation}/>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri:item.long_img}} style={styles.image}/>

        </View>
        <View>
          <Text>{item.podacast_name}</Text>
          <Text>{item.artist_name}</Text>
        </View>
        
      </View>


    </Modal>
  )
}

export default PodcastModal