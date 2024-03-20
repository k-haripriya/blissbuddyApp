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

export const addStreak = async (user:number) =>{
    const payload = {
        "user_id":user,
        "Streak":1
    }
    try{
        const response = await axios.post(API.baseURL + API.addStreak, payload);
        return response;

    }catch(err)
    {
        console.log(err);
    }
}

export const updateStreak = async (user:number) =>{
    try{
        const response = await axios.put(API.baseURL + API.updateStreak + user);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const addwaterApi = async (user:number) =>{
    const payload = {
        user_id:user
    }
    try{
        const response = await axios.post(API.baseURL + API.addwater , payload);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getWaterApi = async (user:number) =>{
    try{
        const response = await axios.get(API.baseURL + API.getwater + user);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const sleeptrackerApi = async (user:number,data:number) =>{
    const payload = {
        user_id:user,
        sleep_duration:data
    }
    try{
        const response = await axios.post(API.baseURL + API.sleepduration ,payload);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

 export const getAverageSleeptracker = async(user:number) =>{
    try{
        const response = await axios.get(API.baseURL + API.sleepaverage + user);
        return response;
    }
    catch(err)
    {
        console.log(";;;;",err);
    }
}

export const getTodaysSleepEntry = async(user:number ) =>{
    try{
        const response = await axios.get(API.baseURL + API.checksleep + user);
        return response;
    }
    catch(err)
    {
        console.log(";;;;",err);
    }
}

export const postCurrentMood = async(user:number,text:string ) =>{
    const payload = {
        user_id:user,
        mood:text
    }
    try{
        const response = await axios.post(API.baseURL + API.moodtracker , payload);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getCurrentMood = async(user:number ) =>{
    
    try{
        const response = await axios.get(API.baseURL + API.getcurrentmood+ user);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getRecommendationsApi = async(user:number)=>{
    
    try{
        const response = await axios.get(API.baseURL + API.getRecommendations + user);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

export const getChaptersApi = async(exercise:number) =>{
    try{
        const response = await axios.get(API.baseURL + API.getchapters + exercise);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}
export const getPodcastRecommendationsApi = async(user:number)=>{
    
    try{
        const response = await axios.get(API.baseURL + API.getPodcastrecommendation + user);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}
export const getCommunityList = async()=>{
    
    try{
        const response = await axios.get(API.baseURL + API.getCommunity);
        return response;
    }
    catch(err)
    {
        console.log(err);
    }
}

