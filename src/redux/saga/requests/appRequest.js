import axios from 'axios';
const apiURL = "http://api.vincentlab.xyz:3001";


export function getCuisineRequest() {
    return axios.request({
        method:"get",
        url:apiURL+"/getCuisine"
    })
}

export function addCuisineRequest(params) {
    const data = new FormData();
    for (let [key, value] of Object.entries(params)) {
        if(key === 'file') {
            value.forEach(function (file){
                console.log(file)
                data.append('file', file)
            })
        } else {
            // console.log(key,value)
            data.append(key, value)
        }
    }
    return axios.post(apiURL+'/addCuisine', data)
}



