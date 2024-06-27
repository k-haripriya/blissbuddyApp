import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';
import { Images } from '../../../../assets/Images/Images';
import { useDispatch } from 'react-redux';
import { updateGender } from '../../../redux/slices/userInfo';

const Question2 = () => {
  const [ getGender, setGender ] = useState('');
  const dispatch = useDispatch();

  const handleGender = (name:string) =>{
    setGender(name);
    dispatch(updateGender(name))
    
  }
  const gender = [{name:'Male',image:Images.male,icon:Images.maleIcon}, {name:'Female',image:Images.female,icon:Images.femaleIcon}];
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.question2}</Text>
      {gender.map((genders, index) => {
        return (
          <TouchableOpacity key={index} style={getGender === genders.name ? [styles.genderContainer,styles.activegenderContainer]:styles.genderContainer} onPress={()=>handleGender(genders.name)}>
            <Image source={genders.image}/>
            <View style={styles.iconConatiner}>
            <Text style={styles.genderText}>I am a {genders.name}</Text>
            <Image source={genders.icon}/>
            </View>
          </TouchableOpacity>
        );
      })}
    </View>
  );
};

export default Question2;
