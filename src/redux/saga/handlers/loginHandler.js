import {call,put} from "redux-saga/effects";
import {checkUserLoginRequest,proccessLoginRequest} from "../requests/loginRequest";
import {setLoginStatus, setUserProfile} from "../../duck/HandleLogin";

export function* checkUserLogin() {
    try {
        const response = yield call(checkUserLoginRequest);
        const {auth,msg} = response.data;
        yield put(setLoginStatus(auth,msg));
    } catch (error) {
        console.log(error)
    }
}

export function* handleProcessLogin(action) {
    try {
        const response = yield call(proccessLoginRequest,action.loginData);
        const {auth,token,msg,userProfile} = response.data;
        if(auth) {
            localStorage.setItem("authKey",token);
            localStorage.setItem("userProfile",JSON.stringify(userProfile));
            yield put(setUserProfile(auth,userProfile));

        } else {
            yield put(setLoginStatus(auth,msg));
        }
    } catch (error) {
        console.log(error)
    }
}
