const apiURL = "http://api.vincentlab.xyz:3001";
export function checkUserLoginRequest() {
    return fetch(apiURL+"/checkLogin")

}
export function processVerifyEmailRequest(loginData) {
    return  fetch(apiURL+'/processVerifyEmail',{method:"POST",body:JSON.stringify(loginData)})
    // return axios.post(apiURL+'/processVerifyEmail', loginData)
}
export function proccessLoginRequest(loginData) {
    return  fetch(apiURL+'/processLogin',{method:"POST",body:JSON.stringify(loginData)})
}

export function proccessSignupRequest(signupData) {
    return  fetch(apiURL+'/processSignup',{method:"POST",body:JSON.stringify(signupData)})
}

export function processLogoutRequest() {
    return fetch(apiURL+"/logout")
}
