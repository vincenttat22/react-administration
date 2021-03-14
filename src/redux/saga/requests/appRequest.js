import axios from 'axios';


export function getCuisineRequest() {
    return axios.request({
        method:"get",
        url:"/getCuisine"
    })
}



