export type NavigationStackParams = {
    SplashScreen:undefined,
    SignUpScreen:undefined,
    OnboardingScreen:undefined,
    Intro:undefined,
    Question1:undefined
}

export type SignUpScreenParams = {
    Fields: string[],
    getPageType: string,
    handlePageAlter:Function
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