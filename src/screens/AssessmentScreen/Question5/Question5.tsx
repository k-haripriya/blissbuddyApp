import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
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
import DropDownPicker from 'react-native-dropdown-picker';
import {Colors} from '../../../res/Colors';
import { useDispatch } from 'react-redux';
import { updateCurrentMood } from '../../../redux/slices/userInfo';

const Question5 = () => {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState('0');
  const [items, setItems] = useState([
    {label: 'Depressed', value: '10'},
    {label: 'Anxious', value: '20'},
    {label: 'Doubtful', value: '30'},
    {label: 'Normal', value: '40'},
    {label: 'Happy', value: '50'},
    {label: 'Joyful', value: '60'},
  ]);
  const dispatch = useDispatch();
  useEffect(()=>{
    const selectedLabel = items.find(item => item.value === value)?.label;
    if (selectedLabel) {
      dispatch(updateCurrentMood(selectedLabel)); }
  },[value])

  return (
    <View style={styles.questionContainer}>
      <Text style={styles.question}>{Strings.questions.Question6}</Text>
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        style={{
          borderColor: Colors.white,
          elevation: 5,
          backgroundColor: Colors.sandal,
        }}
        containerStyle={{
          width: 300,
        }}
        textStyle={{
          fontSize: 18,
          fontWeight: '700',
        }}
      />
      <Speedometer value={parseInt(value)} max={60} angle={160}>
        <Background angle={180} />
        <Arc />
        <Needle />
        <Progress />
        <Marks />
        <Indicator fixValue={true}></Indicator>
      </Speedometer>
    </View>
  );
};

export default Question5;
