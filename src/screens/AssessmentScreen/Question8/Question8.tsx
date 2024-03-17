import {View, Text, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';

const Question8 = () => {
  const [ getAnswer, setAnswer ] = useState(0);
  const answers = [2,4,5,6,8]
  const handleAnswers= (text:number) =>{
    setAnswer(text)
  }
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question8}</Text>
      <View>
      {
        answers.map((item,index)=>{
            return(<TouchableOpacity style={getAnswer === item ? [styles.answerView,styles.activeAnswerView]:styles.answerView} key={index} onPress={()=>handleAnswers(item)}>
                <Text style={getAnswer === item ?[styles.answersList,styles.activeAnswerList]:styles.answersList}>{item + " hours"}</Text>
                <View style={getAnswer === item? [styles.radioButton,styles.activeButton]:styles.radioButton}>
                    <View style={styles.activeradioButton}/>
                </View>
                </TouchableOpacity>)
        })
      }
      </View>
      
    </View>
  );
};

export default Question8;
