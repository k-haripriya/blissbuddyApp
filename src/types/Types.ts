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