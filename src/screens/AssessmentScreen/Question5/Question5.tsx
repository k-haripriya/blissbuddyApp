import {View, Text} from 'react-native';
import React from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';
import Speedometer, {
  Background,
  Arc,
  Needle,
  Progress,
  Marks,
  Indicator,
} from 'react-native-cool-speedometer';

const Question5 = () => {
  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question6}</Text>
      <Speedometer value={54} max={80} angle={160}>
        <Background angle={180} />
        <Arc />
        <Needle />
        <Progress />
        <Marks />
        <Indicator fixValue={false} />
      </Speedometer>
    </View>
  );
};

export default Question5;
