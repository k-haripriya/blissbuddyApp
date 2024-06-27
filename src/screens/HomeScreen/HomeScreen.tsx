import {View, Text, ScrollView} from 'react-native';
import React, { useEffect, useState } from 'react';
import NavBar from '../../components/Common/NavBar/NavBar';
import {Images} from '../../../assets/Images/Images';
import {useNavigation} from '@react-navigation/native';
import {RouterConstants} from '../../res/RouterConstants';
import ImageSliderComponent from '../../components/HomeScreen/ImageSlider/ImageSliderComponent';
import {styles} from './styles';
import WaterTracker from '../../components/HomeScreen/WaterTracker/WaterTracker';
import Streaks from '../../components/HomeScreen/Streaks/Streaks';
import SleepTracker from '../../components/HomeScreen/SleepTracker/SleepTracker';
import MoodTracker from '../../components/HomeScreen/MoodTracker/MoodTracker';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import { updateStreak } from '../../Api/Apicalls';

const HomeScreen = () => {
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate(RouterConstants.ProfileScreen);
  };
  
  return (
    <View>
    <NavBar
        icon={Images.customer}
        title={'Hi Haripriya'}
        handleNavigation={handleNavigation}
      />
    <ScrollView style={{}}>
      
      <View style={styles.imgcontainer}>
        <ImageSliderComponent />
      </View>
      <Text style={styles.trackersText}> Your Trackers</Text>
      <View style={styles.trackerView}>
        <WaterTracker />
        <Streaks />
      </View>
        <SleepTracker />
        <MoodTracker/>
    </ScrollView>
    </View>
  );
};

export default HomeScreen;
