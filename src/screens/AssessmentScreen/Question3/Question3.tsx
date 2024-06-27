import {View, Text} from 'react-native';
import React, { useState } from 'react';
import {Picker} from 'react-native-wheel-pick';
import { styles } from '../styles';
import { Strings } from '../../../res/Strings';
import { Colors } from '../../../res/Colors';
import { useDispatch } from 'react-redux';
import { updateAge } from '../../../redux/slices/userInfo';

const Question3 = () => {
    const [ getAge, setAge ] = useState(0);
    const startValue = 10;
    const endValue = 100;
    const pickerData = [];

    const dispatch = useDispatch();

    for (let i = startValue; i <= endValue; i++) {
        pickerData.push(i);
    }
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.question3}</Text>
      <Picker
        textSize={50}
        style={{backgroundColor: Colors.quesBackground, width: 350, height: 400}}
        pickerData={pickerData}
        onValueChange={(value: number) => {
          setAge(value)
          dispatch(updateAge(value))

        }}
      />
    </View>
  );
};

export default Question3;
