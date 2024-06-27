import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';
import {Images} from '../../../../assets/Images/Images';
import { useDispatch } from 'react-redux';
import { updateGoal } from '../../../redux/slices/userInfo';

const Question1 = () => {
 
const dispatch = useDispatch();

const [getAnswer, setAnswer] = useState('');

const handleAnswers = (item:string)=>{
    setAnswer(item);
    dispatch(updateGoal(item));
}
  const answerList = [
    {answer: 'I wanna reduce stress', icon: Images.heart},
    {answer: 'I wanna try AI therapy', icon: Images.bot},
    {answer: 'I want to cope up with trauma', icon: Images.flag},
    {answer: 'I want to be a better peson', icon: Images.lol},
    {answer: 'Just Trying the app', icon: Images.tasks},
  ];
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.question1}</Text>
      <View>
        {answerList.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={item.answer === getAnswer ?[styles.answerView,styles.activeAnswerView]:styles.answerView} onPress={()=>handleAnswers(item.answer)}>
              <Image source={item.icon} />
              <Text style={getAnswer === item.answer ?[styles.answersList,styles.activeAnswerList]:styles.answersList}>{item.answer}</Text>
              <View style={getAnswer === item.answer ?[styles.radioButton,styles.activeButton]:styles.radioButton}>
                <View style={getAnswer === item.answer ? styles.activeradioButton:styles.radioButtonInactive}></View>
              </View>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Question1;
