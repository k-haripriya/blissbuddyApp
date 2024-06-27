import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React, { useState } from 'react'
import { PodcastComponentType, hashtagType, podcastType } from '../../../types/Types'
import { styles } from './styles'
import PodcastModal from '../PodcastModal/PodcastModal'

const PodcastComponent:React.FC<PodcastComponentType> = (props) => {
    const {item}=props
    const hashtag: hashtagType = item?.hashtag;
  let podcasts: podcastType[] = item?.podcasts;
  const [getModal,setModal]= useState(false);
  const [ getId, setId ] = useState<podcastType>();

  const handleModal = (item:podcastType) =>{
    setId(item);
    setModal(true);
  }

  return (
    <View>
      <Text style={styles.hashtagName}>Exercises for {hashtag.hashtag_name}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {podcasts.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.exercisecard} onPress={()=>handleModal(item)}>
              <View style={styles.imageView}>
                <Image source={{uri: item.short_img}} style={styles.image} />

                <View style={styles.descriptionView}>
                  <Text style={styles.exerciseTitle}>{item.podacast_name}</Text>
                  <Text style={styles.description}>{item.artist_name.toUpperCase()}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {
        getModal && getId && <PodcastModal item={getId} setModal={setModal}/>
      }
    </View>
  )
}

export default PodcastComponent