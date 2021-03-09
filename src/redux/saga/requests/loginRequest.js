import axios from 'axios';

const authHeader = {"x-access-token": localStorage.getItem("authKey")};

export function checkUserLoginRequest() {
    return axios.request({
        headers: authHeader,
        method:"get",
        url:"/checkLogin"
    })
}
export function proccessLoginRequest(loginData) {
    return axios.post('/processLogin', loginData)
}
