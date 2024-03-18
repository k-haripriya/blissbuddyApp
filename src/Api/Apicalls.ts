import axios from 'axios';
import { API } from './API';
import { UserDataType, userInfoType } from '../types/Types';

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

export const login = async (userData:UserDataType) =>{
    try{
        const payload = {
            email:userData.Email,
            password:userData.Password
        }
        const response = await axios.post(API.baseURL + API.login, payload);
        return response;
    }catch(err)
    {
        return err;
    }
}
export const userinfo = async (user:number,data:userInfoType)=>{
    try{
        const payload = {
            user:user,
            goal:data.goal,
            gender:data.gender,
            age:data.age,
            weight:data.weight,
            current_mood:data.current_mood,
            past_medical_help:data.past_medical_help,
            physical_stress:data.physical_stress,
            sleep_quality:data.sleepquality,
            medications:data.medications,
            stress_level:data.stress_level,
        }
        const response = await axios.post(API.baseURL + API.userinfo, payload);
        return response;
    }catch(err)
    {
        return err;
    }
}