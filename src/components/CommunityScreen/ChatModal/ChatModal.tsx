import { View, Text, Modal, Image, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ChatModalType, ChatType } from '../../../types/Types'
import NavBar from '../../Common/NavBar/NavBar'
import { Images } from '../../../../assets/Images/Images'
import { getMessagesApi, sendMessageApi, userName } from '../../../Api/Apicalls'
import { styles } from './styles'
import { useSelector } from 'react-redux'
import { RootState } from '../../../redux/store'
import { setuser } from '../../../redux/slices/setUserSlice'

const ChatModal:React.FC<ChatModalType> = (props) => {
    const { getKey, community,setModal,getDisable} = props;
    const user = useSelector((state:RootState)=>state.setuser)
    const [names, setNames] = useState<string[]>([]);
    const [getMessagetobeSent, setMessagetobeSent ] = useState('');

    
    const [ getMessages, setMessages ] = useState<ChatType[]>()
    const handleNavigation = () =>{
        setModal(false)
    }

    const getMessageApiCall =async () =>{
        try{
            const res = await getMessagesApi(community.id)
            res?.data.sort((a: { id: number }, b: { id: number }) => a.id - b.id);
            setMessages(res?.data)

        }catch(err)
        {
            console.log(err)
        }
    }

    const getName = async(userId:number) =>{
        try{
        const res = await userName(userId);
        let fullName = res?.data?.full_name
        const firstName = fullName ? fullName.split(' ')[0] : '';
        return firstName;


        }catch(err)
        {
            console.log(err)
        }
    }
    const getNames = async (messages: ChatType[]) => {
        const namePromises = messages.map(async (message) => {
            const name = await getName(message.fromUser);
            return name;
        });
        const resolvedNames = await Promise.all(namePromises);
        setNames(resolvedNames);
    }

    const SendmessageApiCall = async()=>{
        const payload = {
            message:getMessagetobeSent,
            fromUser:user.userId,
            toUser:1,
            isReply:false,
            community_id:community.id


        }
        const res = await sendMessageApi(payload)
        if(res?.status === 201)
        {
            getMessageApiCall();
            setMessagetobeSent('');
        }
        
    }
    useEffect(() => {
        if (getMessages) {
            getNames(getMessages);
        }
    }, [getMessages]);

    useEffect(()=>{
        getMessageApiCall()
    },[])
  return (
    <Modal>
        <NavBar icon={Images.left} title={community.community_name} handleNavigation={handleNavigation}/>
        <ScrollView contentContainerStyle={styles.container} scrollEnabled={true}>
            <View>
            {
                getMessages?.map((item,index)=>{
                    return(
                    <View key={index} style={user.userId === item.fromUser ? [styles.from]:styles.to}>
                        <View style={ user.userId === item.fromUser ? [styles.chatContainer,styles.fromContainer]:styles.chatContainer}>
                        <Text>{item.message}</Text>
                    </View>
                    <View style={user.userId === item.fromUser ? styles.fromNameView:styles.nameView}>
                        <Image source={Images.profile} style={styles.profileIcon}/>
                        <Text style={styles.name}>{user.userId !== item.fromUser && names[index]}</Text>
                        </View>
                    </View>)
                })
            }
            </View>

        </ScrollView>
        {!getDisable && <View style={styles.messageInput}>
            <TextInput style={styles.textinput} placeholder='Enter your message ...' onChangeText={(newtext)=>setMessagetobeSent(newtext)} value={getMessagetobeSent}></TextInput>
            <TouchableOpacity style={styles.send} onPress={()=>SendmessageApiCall()}>
                <Image source={Images.sent} style={styles.sendIcon}/>

            </TouchableOpacity>

        </View>}
    </Modal>
  )
}

export default ChatModal