import axios from 'axios';

export function getKeyRequest() {
    return axios.request({
        method:"get",
        url:"/getKeys"
    })
}



