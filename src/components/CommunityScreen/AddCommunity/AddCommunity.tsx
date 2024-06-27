import { View, Text, Modal, TextInput, Image, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { styles } from './styles'
import { Images } from '../../../../assets/Images/Images'
import { addcommunityType } from '../../../types/Types'
import { createcommunityApi } from '../../../Api/Apicalls'

const AddCommunity :React.FC<addcommunityType>= (props) => {
    const fields = ['Community Name','Admin Name','Description']
    const [getdata,setdata] = useState({"Admin Name": '',
    "Community Name": "",
    "Description": ""})
    const handleInputChange = (field:string,value:string) =>{
        setdata({...getdata,[field]:value})
    }

    const handleSubmit = async () =>{
        try{
            // console.log(getdata)
            const res = await createcommunityApi(getdata)
            
                props.setAddCommunity(false)
            

        }catch(err)
        {
            console.log(err)
        }
    }
  return (
    <Modal transparent={true}>
          <View style={styles.modalView}>
            
            <View style={styles.popupContainer}>
                <TouchableOpacity style={styles.backview} onPress={()=>props.setAddCommunity(false)}>
                    <Image source={Images.backabutton}/>
                </TouchableOpacity>

              <View style={styles.titleView}>
                <Text style={styles.title}>
                  Add a New Community
                </Text>
              </View>
              <View>
                {
                    fields.map((item,index)=>{
                        return(<View>
                            <TextInput style={styles.textinput} placeholder={`Enter ${item}`} onChangeText={(newtext)=>handleInputChange(item,newtext)}/>
                            </View>)
                    })
                }
                
              </View>
              <TouchableOpacity style={styles.addButton} onPress={()=>handleSubmit()}>
                <Text style={styles.add}>Add Community</Text>
              </TouchableOpacity>

            </View>

          </View>

        </Modal>
  )
}

export default AddCommunity