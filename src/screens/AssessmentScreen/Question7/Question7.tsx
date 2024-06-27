import {View, Text, TouchableOpacity, Image} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';
import {Colors} from '../../../res/Colors';
import { Images } from '../../../../assets/Images/Images';
import { useDispatch } from 'react-redux';
import { updatePhysicalStress } from '../../../redux/slices/userInfo';

const Question7 = () => {
  const [getAnswer, setAnswer ] = useState('');
  const dispatch = useDispatch();

  const handleAnswer = (ans:string) =>{
    setAnswer(ans);
    if(ans === 'Yes')
    {
      dispatch(updatePhysicalStress(true))
    }
    else
    {
      dispatch(updatePhysicalStress(false))

    }
  }
  const answers = [
    {
        key: 'Yes', 
        color: Colors.red1,
        des:"I am experiencing physical pain in different parts of the body.",
        img:Images.sad
    },
    {
        key: 'No', 
        color: Colors.yes,
        des:"I am not experiencing any physical pain.",
        img:Images.happy
    },
  ];
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question7}</Text>
      <View style={styles.phview}>
      {answers.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={[getAnswer === item.key ? [styles.phyyesno,styles.activeynbutton]:styles.phyyesno,{backgroundColor:item.color}]} onPress={()=>{
            handleAnswer(item.key)
          }}>
            <Image source={item.img}/>
            <View>
            <Text style={styles.ansText}>{item.key}</Text>
            <Text style={styles.anstext2}>{item.des}</Text>
            </View>
          </TouchableOpacity>
        );
      })}
      </View>
    </View>
  );
};

export default Question7;
