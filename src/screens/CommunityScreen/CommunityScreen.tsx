import {View, Text, Image, TouchableOpacity, Modal, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import NavBar from '../../components/Common/NavBar/NavBar';
import {Images} from '../../../assets/Images/Images';
import {useNavigation} from '@react-navigation/native';
import {RouterConstants} from '../../res/RouterConstants';
import SwitchComponent from '../../components/RecommendtionScreen/SwitchComponent/SwitchComponent';
import {enrollCommunityApi, getCommunityList, getMyCommunityList} from '../../Api/Apicalls';
import {CommunityType} from '../../types/Types';
import {styles} from './styles';
import { useSelector } from 'react-redux';
import { RootState } from '../../redux/store';
import ChatModal from '../../components/CommunityScreen/ChatModal/ChatModal';
import AddCommunity from '../../components/CommunityScreen/AddCommunity/AddCommunity';

const CommunityScreen = () => {
  const user = useSelector((state:RootState)=>state.setuser)
  const keys = ['All Community', 'My Community'];
  const [getRefresh,setRefresh]= useState(false)
  const [getModal,setModal] = useState(false);
  const [getSelectedItem,setSelectedItem] = useState<CommunityType>()
  const [getDisable,setDisable] = useState(true)


  const [getKey, setKey] = useState('All Community');
  const [allCommunity, setAllCommunity] = useState<CommunityType[]>();
  const [ mycommunity,setMyCommunity ] = useState<CommunityType[]>();
  const [getaddcomunity,setaddcommunity] = useState(false);

  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.goBack();
  };

  const getAllCommunity = async () => {
    try {
      const res = await getCommunityList();
      setAllCommunity(res?.data);
    } catch (err) {
      console.log(err);
    }
  };

  const getMyCommunity = async() =>{
    try{
      const res = await getMyCommunityList(user.userId);
      setMyCommunity(res?.data);
    }catch(err){

    }
  }

  const communityEnroll = async(id:number) =>{
    try{
      const res = await enrollCommunityApi(id,user.userId)
      setRefresh(!getRefresh);

    }catch(err)
    {
      console.log(err);
    }
  }

  useEffect(() => {
    getAllCommunity();
    getMyCommunity();
  }, [getRefresh,getaddcomunity]);
  return (
    <View style={styles.pageContainer}>
      <NavBar
        title="Community"
        icon={Images.left}
        handleNavigation={handleNavigation}
      />
      
      <SwitchComponent getKey={getKey} setKey={setKey} keys={keys} />
      <ScrollView style={{paddingBottom:500}}>
      {getKey==="All Community" && allCommunity?.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.container} onPress={()=>{
            setModal(true)
            setSelectedItem(item);
            if(mycommunity?.some((community) => community.id === item.id))
              {
                setDisable(false)
              }
              else{
                setDisable(true)
              }
            }}>
            <View style={styles.imageandname}>
              <View style={styles.imageView}>
                <Image source={Images.communityicon} />
              </View>
              <View>
                <Text style={styles.communityName}>{item.community_name}</Text>
                <Text style={styles.des} numberOfLines={2}>{item.description}</Text>
              </View>
            </View>
            { <TouchableOpacity style={styles.button} disabled= {mycommunity?.some((community) => community.id === item.id)? true:false} onPress={()=>{
              communityEnroll(item.id)
              }} >
              <Text style={styles.joinButton}>{!mycommunity?.some((community) => community.id === item.id) ?"Join":"Joined"}</Text>
            </TouchableOpacity>}

          </TouchableOpacity>
        );
      })}
      {getKey==="My Community" && mycommunity?.map((item, index) => {
        return (
          <TouchableOpacity key={index} style={styles.container} onPress={()=>{
            setModal(true);
            setSelectedItem(item);
            if(mycommunity?.some((community) => community.id === item.id))
              {
                setDisable(false)
              }
              else{
                setDisable(true)
              }
          }}>
            <View style={styles.imageandname}>
              <View style={styles.imageView}>
                <Image source={Images.communityicon} />
              </View>
              <View>
                <Text style={styles.communityName}>{item.community_name}</Text>
                <Text style={styles.des} numberOfLines={2}>{item.description}</Text>
              </View>
            </View>
            

          </TouchableOpacity>
        );
      })}

    

      {
        getaddcomunity && <AddCommunity setAddCommunity={setaddcommunity}/>
      }
      

      {
        getModal && getSelectedItem && <ChatModal getKey={getKey} community={getSelectedItem} setModal={setModal} getDisable={getDisable}/>
      }
      </ScrollView>
      <TouchableOpacity style={styles.addButton} onPress={()=>setaddcommunity(true)}>

    <Image source ={Images.plus} />

    </TouchableOpacity>
    </View>
  );
};

export default CommunityScreen;
