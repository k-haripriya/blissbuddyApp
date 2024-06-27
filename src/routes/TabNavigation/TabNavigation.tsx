
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomTabsParams, TabsType} from '../../Types/Types';
import Icon from 'react-native-ionicons';
import {Image, TouchableOpacity, View} from 'react-native';
import { styles } from './styles';
import { useEffect, useRef } from 'react';
import * as Animatable from 'react-native-animatable';
import HomeScreen from '../../screens/HomeScreen/HomeScreen';
import CommunityScreen from '../../screens/CommunityScreen/CommunityScreen';
import ProfileScreen from '../../screens/ProfileScreen/ProfileScreen';
import RecommendationScreen from '../../screens/RecommendationScreen/RecommendationScreen';
import { Images } from '../../../assets/Images/Images';


const Tab = createBottomTabNavigator<BottomTabsParams>();

const Tabs: TabsType[] = [
  {route: 'HomeScreen', component: HomeScreen, name: Images.home},
  {route: 'RecommendationScreen', component: RecommendationScreen, name: Images.recc},
  {route: 'CommunityScreen', component: CommunityScreen, name: Images.community},
  {route: 'ProfileScreen', component: ProfileScreen, name: Images.profile},
];

const TabButton = (props:any) => {
    const { item, onPress, accessibilityState } = props;
    const focused = accessibilityState.selected;
    const viewRef = useRef<any>(null);

    useEffect(()=>
    {
        if(focused)
        {
            viewRef.current.animate({0:{scale:1, translateY:0},1:{scale:1.1, translateY:-5}})
        }
        else
        {
            viewRef.current.animate({0:{scale:1.1, translateY:-5 },1:{scale:1, translateY:0}})

        }
    },[focused]);

  return (
    <View style={styles.tabview}>
    <TouchableOpacity onPress={onPress} >
        <Animatable.View ref={viewRef} duration={200} >
          <View style={focused && styles.activeButton}>
          <Image source={item.name}/>
            
          </View>
        
      </Animatable.View>
    </TouchableOpacity>
    </View>
  );
};

export const TabNavigation = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeScreen"
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          height: 70,
          position: 'absolute',
          bottom: 20,
          left: 10,
          right: 10,
          borderRadius: 10,
        },
      }}>
      {Tabs.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton :(props)=> <TabButton {...props} item={item}/>,
            }}
          />
        );
      })}
    </Tab.Navigator>
  );
};
