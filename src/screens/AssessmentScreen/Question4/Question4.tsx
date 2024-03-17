import {View, Text, TextInput} from 'react-native';
import React, {useState} from 'react';
import {styles} from '../styles';
import {Strings} from '../../../res/Strings';

const Question4 = () => {
  const [inputValue, setInputValue] = useState({
    Weight: 0,
    Height: 0,
  });

  const calculateBMI = () =>{
    const heightInMeters = inputValue.Height / 100;
    
    const bmi = inputValue.Weight / (heightInMeters * heightInMeters);
    
    return bmi;
  }

  const handleTextInputChange = (key: string, value: string) => {
    const numberval = parseInt(value);
    let flag = false;
    const updatedQuestions = questions.map(question => {
        if (question.key === key && numberval>999) {
            flag = true;
            return { ...question, error: true };
        }
        return {...question,error:false};
    });

    setQuestions(updatedQuestions)
    if(!flag)
    {
        setInputValue({...inputValue,[key]:value})
    }
  };
  const [questions,setQuestions] =useState([
    {
      question: Strings.questions.question4,
      value: 'kg',
      key: 'Weight',
      error: false,
    },
    {
      question: Strings.questions.question5,
      value: 'cm',
      key: 'Height',
      error: false,
    },
  ]);
  return (
    <View style={styles.questionContainer}>
      {questions.map((item, index) => {
        return (
          <View key={index}>
            <Text style={styles.question}>{item.question}</Text>
            <View style={styles.inputBox}>
              <TextInput
                keyboardType={'numeric'}
                style={styles.textInput}
                placeholder={`Please Enter your ${item.key}`}
                onChangeText={(newText:string)=>{
                    handleTextInputChange(item.key,newText)
                }}
              />
              <Text style={styles.value}>{item.value}</Text>
            </View>
            {item.error && <Text style={styles.errorText}>{`*Please Enter a valid ${item.key}`}</Text>}
          </View>
        );
      })}
    </View>
  );
};

export default Question4;
