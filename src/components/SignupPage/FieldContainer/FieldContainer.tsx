import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {SignUpScreenParams} from '../../../types/Types';
import {styles} from './styles';

const FieldContainer: React.FC<SignUpScreenParams> = props => {
  const {Fields, getPageType, handlePageAlter} = props;
  return (
    <View style={styles.container}>
      <View style={styles.headerView}>
        <Text style={styles.headerText}>{getPageType}</Text>
      </View>

      {Fields.map((item, index) => {
        return (
          <View key={index} style={styles.textInputView}>
            <TextInput placeholder={item}></TextInput>
          </View>
        );
      })}
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>
          {getPageType === 'SignUp' ? 'Register' : 'Login'}
        </Text>
      </TouchableOpacity>
      <View style={styles.pageAlterView}>
        <Text style={styles.pageAlter}>{getPageType === 'SignUp' ? "Already have an Account?":"Don\'t have an account?"}</Text>
        <TouchableOpacity onPress={()=>{
          if(getPageType === 'SignUp')
          {
            handlePageAlter('Login');
          }
          else{
            handlePageAlter('SignUp')
          }
        }}>
          <Text style={styles.alterPageText}> {getPageType === 'SignUp' ?"Login":"SignUp"}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default FieldContainer;
