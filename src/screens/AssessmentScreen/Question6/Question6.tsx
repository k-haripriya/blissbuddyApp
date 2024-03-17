import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, { useState } from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';
import {Images} from '../../../../assets/Images/Images';
import { Colors } from '../../../res/Colors';

const Question6 = () => {
  const [ getAnswer, setAnswer ] = useState('');
  const answers = [{key:"Yes",color:Colors.yes},{key:"No",color:Colors.sandal}];
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question6I}</Text>
      <Image source={Images.doctor} style={styles.docimg} />
      <View style={styles.ynview}>
        {answers.map((item, index) => {
          return (
            <TouchableOpacity key={index} style={[getAnswer === item.key ? [styles.ynbutton,styles.activeynbutton]:styles.ynbutton,{backgroundColor:item.color}]} onPress={()=>setAnswer(item.key)} >
              <Text style={styles.ynText}>{item.key}</Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default Question6;
