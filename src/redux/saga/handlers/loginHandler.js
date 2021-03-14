import {call,put} from "redux-saga/effects";
import {checkUserLoginRequest,proccessLoginRequest,processLogoutRequest} from "../requests/loginRequest";
import {ActionCreators} from "../../reducer/AppReducer";

export function* checkUserLogin() {
    try {
        const response = yield call(checkUserLoginRequest);
        const {auth,msg} = response.data;
        yield put(ActionCreators.setLoginStatus(auth,msg));
    } catch (error) {
        console.log(error)
    }
}

export function* handleProcessLogout() {
    try {
        const response = yield call(processLogoutRequest);
        const {auth,msg} = response.data;
        localStorage.removeItem("userProfile");
        yield put(ActionCreators.setLoginStatus(auth,msg));
    } catch (error) {
        console.log(error)
    }
}

export function* handleProcessLogin(action) {
    try {
        console.log(action)
        const response = yield call(proccessLoginRequest,action.loginData);
        const {auth,msg,userProfile} = response.data;
        if(auth) {
            localStorage.setItem("userProfile",JSON.stringify(userProfile));
            yield put(ActionCreators.setUserProfile(auth,userProfile));
        } else {
            yield put(ActionCreators.setLoginStatus(auth,msg));
        }
    } catch (error) {
        console.log(error)
    }
}
