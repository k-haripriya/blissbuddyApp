export const API = {
    baseURL:'http://192.168.0.209:8000',


    signup:'/auth/users/',
    login:'/app/login/',
    userinfo:'/userinfo/create/',
    addStreak :'/trackers/addstreak/',
    updateStreak: '/trackers/streak/',
    addwater: '/trackers/addwater/',
    getwater:'/trackers/getwater/',
    sleepduration: '/trackers/tracksleep/',
    sleepaverage:'/trackers/getAverageSleep/',
    checksleep :'/trackers/checksleep/',
    moodtracker:'/trackers/trackmood/',
    getcurrentmood :'/trackers/getMood/',
    getRecommendations :'/exercise/recommendations/',
    getchapters:'/exercise/list/',
    getPodcastrecommendation: '/exercise/reccomendPodcasts/',
}