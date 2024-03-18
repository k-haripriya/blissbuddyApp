import axios from 'axios';
import { API } from './API';
import { UserDataType } from '../types/Types';

export const signup = async (userData:UserDataType) =>{
    try{
        const payload = {
            email:userData.Email,
            password:userData.Password,
            first_name:userData.Name,
            last_name:userData.Name,
            re_password:userData.Password
        }
        const response = await axios.post(API.baseURL + API.signup, payload);
        return response;
    }catch(err)
    {
        return err;
    }
}