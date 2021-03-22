import axios from 'axios';
const apiURL = "//api.vincentlab.xyz:3001";
export function checkUserLoginRequest() {
    return fetch(apiURL+"/checkLogin")

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
