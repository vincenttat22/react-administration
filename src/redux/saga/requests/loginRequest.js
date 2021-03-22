const apiURL = "http://api.vincentlab.xyz:3001";
export function checkUserLoginRequest() {
    return fetch("/checkLogin")

}
export function processVerifyEmailRequest(loginData) {
    return  fetch('/processVerifyEmail',{method:"POST",body:JSON.stringify(loginData)})
    // return axios.post(apiURL+'/processVerifyEmail', loginData)
}
export function proccessLoginRequest(loginData) {
    return  fetch('/processLogin',{method:"POST",body:JSON.stringify(loginData)})
}

export function proccessSignupRequest(signupData) {
    return  fetch('/processSignup',{method:"POST",body:JSON.stringify(signupData)})
}

export function processLogoutRequest() {
    return fetch("/logout")
}
