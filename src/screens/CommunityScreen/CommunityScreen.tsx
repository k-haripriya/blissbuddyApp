import {View, Text} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Common/NavBar/NavBar';
import {Images} from '../../../assets/Images/Images';
import {useNavigation} from '@react-navigation/native';
import {RouterConstants} from '../../res/RouterConstants';
import SwitchComponent from '../../components/RecommendtionScreen/SwitchComponent/SwitchComponent';
import { getCommunityList } from '../../Api/Apicalls';

const CommunityScreen = () => {
  const keys = ['All Community', 'My Community'];

  const [getKey, setKey] = useState('All Community');

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.goBack();
  };

  const getAllCommunity =async () => {
    try {
      const res = await getCommunityList();
      console.log(res?.data);
    } catch (err) {
      console.log(err)
    }
  };

  useEffect(() => {
    getAllCommunity()
  }, []);
  return (
    <View>
      <NavBar
        title="Community"
        icon={Images.left}
        handleNavigation={handleNavigation}
      />
      <SwitchComponent getKey={getKey} setKey={setKey} keys={keys} />
    </View>
  );
};

export default CommunityScreen;
