import {View, Text, Modal, Image, ScrollView, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {
  ChapterandExerciseType,
  ExerciseModalType,
  chaptersType,
  exerciseType,
} from '../../../types/Types';
import {getChaptersApi} from '../../../Api/Apicalls';
import Loader from '../../Common/Loader/Loader';
import {capitalizeFirstLetter} from '../../../utils/common/Functions';
import {styles} from './styles';
import Video from 'react-native-video';
import NavBar from '../../Common/NavBar/NavBar';
import { Images } from '../../../../assets/Images/Images';

const ExerciseModal: React.FC<ExerciseModalType> = props => {
  const {getId,setModal} = props;
  const [getExercise, setExercise] = useState<exerciseType>();
  const [getChapters, setChapters] = useState<chaptersType[]>();
  const [getLoader, setLoader] = useState(true);
  const [getTimer , setTimer ] = useState(30);
  const [ getcId, setcId] = useState(0);
  const [ getVideoModl, setVideoModal ] = useState(false)
  const [getSource,setSource] = useState('')

  const getChaptersApiCall = async () => {
    try {
      setLoader(true);
      const res = await getChaptersApi(getId);
      setExercise(res?.data?.exercise);
      setChapters(res?.data?.chapters)
      setLoader(false);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getChaptersApiCall();
  }, []);
  const handleTimer = (id:number) =>{
    setcId(id);
    if (getTimer === 30) {
        const intervalId = setInterval(() => {
          setTimer((prevTimer) => {
            if (prevTimer === 0) {
              clearInterval(intervalId); 
              return 30; 
            } else {
              return prevTimer - 1; 
            }
          });
        }, 1500); 
      }
  }

  const handleNavigation = ()=>{
    setModal(false)
  }
  
  
  return (
    <Modal>
      <NavBar icon={Images.left}  title={getExercise ?getExercise?.exercise_name:''} handleNavigation={handleNavigation}/>
      {getLoader ? (
        <Loader />
      ) : (
        <View style={styles.container}>
          <Image
            source={{uri: getExercise?.long_img}}
            style={{width: '100%', height: '25%'}}
          />
          <View style={styles.difficultyView}>
            <Text style={styles.header}>
              Difficulty:{' '}
              <Text style={styles.value}>
                {getExercise && capitalizeFirstLetter(getExercise?.difficulty)}
              </Text>
            </Text>
            <Text style={styles.header}>
              Chapters:
              <Text style={styles.value}>{getExercise?.no_of_chapters}</Text>
            </Text>
          </View>
          <Text style={styles.des}>{getExercise?.des}</Text>
          <View style={styles.calView}>
            <View style={styles.cal}>
            <Text style={styles.value1}>
                {getExercise?.calories}
            </Text>
            <Text style={styles.title}>
                Calories
            </Text>
            </View>
            <View style={styles.cal}>
            <Text style={styles.value1}>
                {getExercise?.duration}
            </Text>
            <Text style={styles.title}>
                Duration
            </Text>
            </View>
            <View style={styles.cal}>
            <Text style={styles.value1}>
                {getExercise?.repeat}*
            </Text>
            <Text style={styles.title}>
                Repeat
            </Text>
            </View>
          </View>
          <ScrollView showsVerticalScrollIndicator={false}>
          {
            getChapters?.map((item,index)=>{
                return(<View style={styles.chaptersView}>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                    <Image source={{uri:getExercise?.short_img}} style={styles.chapterimg}/>
                    <View style={styles.nameView}>
                    <Text style={styles.chapterName}>{item.chapter_name}</Text>
                    <TouchableOpacity onPress={()=>{
                        setSource(item.video)
                        setVideoModal(true)}
                        }>
                        <Text>
                            See video {'>'}
                        </Text>
                    </TouchableOpacity>

                    </View>
                    </View>
                    <TouchableOpacity style={styles.timerbutton} onPress={()=>handleTimer(index)}>
                        <Text>{getTimer} secs</Text>

                    </TouchableOpacity>
                </View>)
            })
          }
          
          </ScrollView>
        </View>
      )}
       {getVideoModl && (
        <Modal visible={getVideoModl} animationType="slide">
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={() => setVideoModal(false)}>
              <Text style={{ textAlign: 'right', margin: 10 }}>Close</Text>
            </TouchableOpacity>
            <Video source={{ uri: getSource }} style={{ flex: 1 }} />
          </View>
        </Modal>
      )}
    </Modal>
  );
};

export default ExerciseModal;
