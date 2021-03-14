const initialState = {
    auth: true,
    msg: "",
    userProfile: {},
    cuisine:[]
};


export const ActionTypes = {
    SETCUISINE:"SETCUISINE",
    GETCUISINE:"GETCUISINE",
    CHECKLOGINSTATUS: "CHECKLOGINSTATUS",
    PROCESSLOGOUT: "PROCESSLOGOUT",
    SETLOGINSTATUS: "SETLOGINSTATUS",
    PROCESSLOGIN: "PROCESSLOGIN",
    SETUSERPROFILE: "SETUSERPROFILE"

}

export const ActionCreators = {
    setCuisine: data => ({type:ActionTypes.SETCUISINE,data}),
    getCuisine: () => ({type:ActionTypes.GETCUISINE}),
    processLogout: () => ({type:ActionTypes.PROCESSLOGOUT}),
    checkLoginStatus: () => ({type:ActionTypes.CHECKLOGINSTATUS}),
    setLoginStatus: (auth,msg) => ({type:ActionTypes.SETLOGINSTATUS,auth,msg}),
    processLogin: (loginData) => ({type:ActionTypes.PROCESSLOGIN,loginData}),
    setUserProfile: (auth,user) => ({type:ActionTypes.SETUSERPROFILE,auth,user})
}


function AppReducer(state = initialState,action) {
    switch (action.type) {
        case ActionTypes.SETLOGINSTATUS:
            return {...state,auth:action.auth,msg:action.msg};
        case ActionTypes.PROCESSLOGIN:
            return {...state,...action.loginData };
        case ActionTypes.SETUSERPROFILE:
            return {...state,auth:action.auth, ...action.user };
        default:
            return {...state,...action.data };
    }
}
export default AppReducer;
