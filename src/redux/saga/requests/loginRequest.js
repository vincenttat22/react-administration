import axios from 'axios';

export function checkUserLoginRequest() {
    return axios.request({
        method:"get",
        url:"/checkLogin"
    })
}
export function proccessLoginRequest(loginData) {
    return axios.post('/processLogin', loginData)
}

export function proccessSignupRequest(signupData) {
    return axios.post('/processSignup', signupData)
}

export function processLogoutRequest() {
    return axios.request({
        method:"get",
        url:"/logout"
    })
}
