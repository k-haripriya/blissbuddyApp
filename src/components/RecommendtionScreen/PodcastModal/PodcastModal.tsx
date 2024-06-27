import {View, Text, Modal, Image, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {ExerciseModalType, PodcastModalType} from '../../../types/Types';
import NavBar from '../../Common/NavBar/NavBar';
import {Images} from '../../../../assets/Images/Images';
import {styles} from './styles';
import SoundPlayer from 'react-native-sound-player';

const PodcastModal: React.FC<PodcastModalType> = props => {
  const {item, setModal} = props;
  const [getPlaying, setPlaying] = useState(false);
  const handleNavigation = () => {
    SoundPlayer.stop();
    setModal(false);
  };

  const images = ['play', 'replay', 'forward'];
  const playAudio = () => {
    try {
      SoundPlayer.playUrl(item.audio);
    } catch (e) {
      console.log(`cannot play the sound file`, item.audio, e);
    }
  };

  const pauseAudio = () => {
    try {
      SoundPlayer.pause();
    } catch (err) {
      console.log(err);
    }
  };
  const replay = async () => {
    try {
      SoundPlayer.seek(
        Math.max(0, (await SoundPlayer.getInfo()).currentTime - 5),
      );
    } catch (err) {
      console.log(err);
    }
  };

  const forward = async () => {
    try {
      SoundPlayer.seek(
        Math.max(0, (await SoundPlayer.getInfo()).currentTime + 5),
      );
    } catch (err) {
      console.log(err);
    }
  };
  
  

  return (
    <Modal>
      <NavBar
        icon={Images.left}
        title={item.podacast_name}
        handleNavigation={handleNavigation}
      />
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image source={{uri: item.long_img}} style={styles.image} />
        </View>
        <View style={styles.nameView}>
          <Text style={styles.podcast_name}>{item.podacast_name}</Text>
          <Text style={styles.artist_name}>{item.artist_name}</Text>
        </View>

        <View style={styles.buttonView}>
          <TouchableOpacity onPress={() => replay()} style={styles.buttonStyle}>
            <Image source={Images.replay} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              if (!getPlaying) {
                playAudio();
                setPlaying(!getPlaying);
              } else {
                pauseAudio();
                setPlaying(!getPlaying);
              }
            }} style={styles.buttonStyle}>
            <Image source={Images.play} />
          </TouchableOpacity>
          <TouchableOpacity onPress={() => forward()} style={styles.buttonStyle}>
            <Image source={Images.forward} />
          </TouchableOpacity>
        </View>
        <View>
          <Text>{item.podcast_description}</Text>
        </View>
      </View>
    </Modal>
  );
};

export default PodcastModal;
