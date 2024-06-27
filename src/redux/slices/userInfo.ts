import { PayloadAction, createSlice } from "@reduxjs/toolkit";


interface InitialState {
    goal: string;
    gender: string;
    age: number;
    weight: number;
    current_mood: string;
    past_medical_help: boolean;
    physical_stress: boolean;
    sleepquality: string;
    medications: string;
    stress_level: number;
}
const initialState: any  = {
    goal:"",
    gender:"",
    age:0,
    weight:0,
    current_mood:"",
    past_medical_help:false,
    physical_stress:false,
    sleepquality:"",
    medications:"",
    stress_level:0

    
};

export const userInfo:any= createSlice ({
    name:'userInfo',
    initialState,
    reducers:{
        updateGoal: (state, action: PayloadAction<string>) => {
            state.goal = action.payload;
        },
        updateGender: (state, action: PayloadAction<string>) => {
            state.gender = action.payload;
        },
        updateAge: (state, action: PayloadAction<number>) => {
            state.age = action.payload;
        },
        updateWeight: (state, action: PayloadAction<number>) => {
            state.weight = action.payload;
        },
        updateCurrentMood: (state, action: PayloadAction<string>) => {
            state.current_mood = action.payload;
        },
        updatePastMedicalHelp: (state, action: PayloadAction<boolean>) => {
            state.past_medical_help = action.payload;
        },
        updatePhysicalStress: (state, action: PayloadAction<boolean>) => {
            state.physical_stress = action.payload;
        },
        updateSleepQuality: (state, action: PayloadAction<string>) => {
            state.sleepquality = action.payload;
        },
        updateMedications: (state, action: PayloadAction<string>) => {
            state.medications = action.payload;
        },
        updateStressLevel: (state, action: PayloadAction<number>) => {
            state.stress_level = action.payload;
        },
        
        
    }
})

export const { updateGoal,updateAge,updateCurrentMood,updateGender, updateMedications,updatePastMedicalHelp,updatePhysicalStress,updateSleepQuality,updateStressLevel,updateWeight } = userInfo.actions;

export default userInfo.reducer;