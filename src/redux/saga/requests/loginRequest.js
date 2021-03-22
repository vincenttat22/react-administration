import axios from 'axios';
const apiURL = "http://api.vincentlab.xyz:3001";
export function checkUserLoginRequest() {
    return axios.request({
        method:"get",
        url:"/checkLogin"
    })
}
export function processVerifyEmailRequest(loginData) {
    return axios.post(apiURL+'/processVerifyEmail', loginData)
}
export function proccessLoginRequest(loginData) {
    return axios.post(apiURL+'/processLogin', loginData)
}

export function proccessSignupRequest(signupData) {
    return axios.post(apiURL+'/processSignup', signupData)
}

export function processLogoutRequest() {
    return axios.request({
        method:"get",
        url:apiURL+"/logout"
    })
}
