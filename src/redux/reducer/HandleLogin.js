export const CHECKLOGINSTATUS = "CHECKLOGINSTATUS";
export const PROCESSLOGOUT = "PROCESSLOGOUT";
const SETLOGINSTATUS = "SETLOGINSTATUS";
export const PROCESSLOGIN = "PROCESSLOGIN";
const SETUSERPROFILE = "SETUSERPROFILE";



export const processLogout = function () {
    return {type:PROCESSLOGOUT}
};

export const checkLoginStatus = function () {
    return {type:CHECKLOGINSTATUS}
};

export const setLoginStatus = function (auth,msg) {
    return {type:SETLOGINSTATUS,auth,msg}
};
export const processLogin = function (loginData) {
    return {type:PROCESSLOGIN,loginData}
};


export const setUserProfile = function (auth,user) {
    return {type:SETUSERPROFILE,auth,user}
}


const initialState = {
    auth: true,
    msg: "",
    userProfile: {},
    keys:[]
};

function HandleLogin(state = initialState,action) {
    switch (action.type) {
        case SETLOGINSTATUS:
            return {...state,auth:action.auth,msg:action.msg};
        case PROCESSLOGIN:
            return {...state,...action.loginData };
        case SETUSERPROFILE:
            return {...state,auth:action.auth, ...action.user };
        default:
            return state
    }
}
export default HandleLogin;
