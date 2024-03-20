import {View, Text, TouchableOpacity, Image, ScrollView} from 'react-native';
import React, { useState } from 'react';
import {
  ExerciseComponentType,
  exerciseType,
  hashtagType,
} from '../../../types/Types';
import {styles} from './styles';
import ExerciseModal from '../ExerciseModal/ExerciseModal';

const ExerciseComponent: React.FC<ExerciseComponentType> = props => {
  const {getData} = props;
  const hashtag: hashtagType = getData?.hashtag;
  let exercise: exerciseType[] = getData?.exercises;

  
  const [ getModal, setModal ] = useState(false)
  const [ getId, setId ] = useState(0);

  const handleModal = (id:number) =>{
    setId(id);
    setModal(true);
  }

  return (
    <View>
      <Text style={styles.hashtagName}>Exercises for {hashtag.hashtag_name}</Text>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {exercise.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={styles.exercisecard} onPress={()=>handleModal(item.id)}>
              <View style={styles.imageView}>
                <Image source={{uri: item.short_img}} style={styles.image} />

                <View style={styles.descriptionView}>
                  <Text style={styles.exerciseTitle}>{item.exercise_name}</Text>
                  <Text style={styles.description}>{item.difficulty.toUpperCase()}</Text>
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      {
        getModal && <ExerciseModal getId={getId} setModal={setModal}/>
      }
    </View>
  );
};

export default ExerciseComponent;
