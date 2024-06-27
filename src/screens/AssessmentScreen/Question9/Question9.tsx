import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useDebugValue, useState } from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';
import {Images} from '../../../../assets/Images/Images';
import { useDispatch } from 'react-redux';
import { updateMedications } from '../../../redux/slices/userInfo';

const Question9 = () => {
  const [ getTitle, setTitle ] = useState('');
  const [ getKey, setKey ] = useState('');

  const dispatch = useDispatch();

  const handleAnswers = (title:string,key:string)=>{
    setTitle(title);
    setKey(key)
    dispatch(updateMedications(title));
  }
  const answers = [
    {
      title: 'Prescribed Medications',
      icon: Images.docpres,
      key: 'Yes',
    },
    {
      title: 'Over the counter Supplements',
      icon: Images.pill,
      key: 'Yes',
    },
    {
      title: 'I\'m not taking any',
      icon: Images.nomed,
      key: 'No',
    },
    {
      title: 'Prefer not to say',
      icon: Images.unavailable,
      key: 'Yes',
    },
  ];
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question9}</Text>
      <View style={styles.medcontainer}>
      {
        answers.map((item,index)=>{
            return(
                <TouchableOpacity key={index} style={getTitle === item.title ? [styles.medView,styles.activemedView]:styles.medView} onPress={()=>handleAnswers(item.title,item.key)}>
                    <Image source={item.icon}/>
                    <Text style={styles.medText}>{item.title}</Text>

                </TouchableOpacity>
            )
        })
      }
      </View>
    </View>
  );
};

export default Question9;
