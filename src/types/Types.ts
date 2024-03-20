
export type NavigationStackParams = {
    SplashScreen:undefined,
    SignUpScreen:undefined,
    OnboardingScreen:undefined,
    Intro:undefined,
    Question:undefined,
    MainScreen:undefined
}

export type SignUpScreenParams = {
    Fields: string[],
    getPageType: string,
    handlePageAlter:Function,
    handleInputChange:Function,
    handleSubmit:Function
}

export interface QuestionComponents {
    [key: number]: React.ComponentType<any>; 
  }

  export type BottomTabsParams = {
    HomeScreen:undefined,
    ProfileScreen:undefined,
    CommunityScreen:undefined,
    RecommendationScreen:undefined,
}
export type TabsType = {
    route: keyof BottomTabsParams,
    component: React.ComponentType<any>,
    name:string
}

export type NavBarType = {
    icon:any,
    title: string,
    header?: string, 
    handleNavigation :Function
}

export type UserDataType = {
    Email:string,
    Name:string,
    Password:string
}

export type  userInfoType ={
    goal: string;
    gender: string;
    age: number;
    weight: number;
    current_mood: string;
    past_medical_help: string;
    physical_stress: boolean;
    sleepquality: string;
    medications: string;
    stress_level: number;
}

export type streaksType = {
    getStreak: number
}

export type exerciseType = {
    id: number,
    exercise_name: string,
    difficulty: string,
    no_of_chapters: number,
    duration: number,
    repeat: number,
    calories: number,
    short_img: string,
    long_img: string,
    hashtag_id: number,
    des:string
}
export type podcastType = {
    id:number,
    podacast_name:string,
    podcast_description:string,
    audio:string,
    short_img: string,
    long_img: string,
    hashtag_id: number,
    artist_name:string
}

export type hashtagType = {
    hashtag_name:string,
    id:number
}

export type RecommendationType = {
    exercises: exerciseType[]; 
    hashtag: hashtagType; 
};

export type PodcastRecommendationType = {
    podcasts:podcastType[],
    hashtag:hashtagType
}

export type ExerciseComponentType = {
    getData: RecommendationType;
};

export type ExerciseModalType = {
    getId:number,
    setModal:Function
}

export type chaptersType = {
    chapter_name:string;
    exercise_id:number;
    id:number;
    video:string
}

export type ChapterandExerciseType = {
    exercise:exerciseType,
    chapters:chaptersType[]
}

export type SwitchComponentType ={
    getKey:string,
    setKey:Function,
    keys:Array<string>,
}

export type PodcastComponentType = {
    item:PodcastRecommendationType
}

export type PodcastModalType = {
    item:podcastType,
    setModal:Function
}
