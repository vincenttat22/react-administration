import axios from 'axios';


export function getCuisineRequest() {
    return axios.request({
        method:"get",
        url:"/getCuisine"
    })
}

export function addCuisineRequest(params) {
    // console.log(params);
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
    return axios.post('/addCuisine', data)
}



