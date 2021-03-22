const initialState = {
    auth: undefined,
    is_verified: true,
    msg: "",
    userProfile: {},
    cuisine:[]
};


export const ActionTypes = {
    SETCUISINE:"SETCUISINE",
    GETCUISINE:"GETCUISINE",
    ADDCUISINE:"ADDCUISINE",
    CHECKLOGINSTATUS: "CHECKLOGINSTATUS",
    PROCESSLOGOUT: "PROCESSLOGOUT",
    PROCESSSIGNUP: "PROCESSSIGNUP",
    SETLOGINSTATUS: "SETLOGINSTATUS",
    PROCESSLOGIN: "PROCESSLOGIN",
    SETUSERPROFILE: "SETUSERPROFILE"

}

export const ActionCreators = {
    setCuisine: data => ({type:ActionTypes.SETCUISINE,data}),
    getCuisine: () => ({type:ActionTypes.GETCUISINE}),
    addCuisine: data => ({type:ActionTypes.ADDCUISINE,data}),
    processLogout: () => ({type:ActionTypes.PROCESSLOGOUT}),
    checkLoginStatus: () => ({type:ActionTypes.CHECKLOGINSTATUS}),
    setLoginStatus: (data) => ({type:ActionTypes.SETLOGINSTATUS,data}),
    processLogin: (loginData) => ({type:ActionTypes.PROCESSLOGIN,loginData}),
    processSignup: (history,signupData) => ({type:ActionTypes.PROCESSSIGNUP,history,signupData}),
    setUserProfile: (auth,user) => ({type:ActionTypes.SETUSERPROFILE,auth,user})
}


function AppReducer(state = initialState,action) {
    switch (action.type) {
        case ActionTypes.SETLOGINSTATUS:
            return {...state,...action.data};
        case ActionTypes.PROCESSLOGIN:
            return {...state,...action.loginData };
        case ActionTypes.SETUSERPROFILE:
            return {...state,auth:action.auth, ...action.user };
        default:
            return {...state,...action.data };
    }
}
export default AppReducer;
