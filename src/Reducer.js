const initialState = {
    user: {is_login:0},
    count: 0
}

let Users = [{
    first_name:"Bob",
    last_name:"Chan",
    email:"bobchan@gmail.com"
},{
    first_name:"Kenny",
    last_name:"Lee",
    email:"kennylee@gmail.com"
},{
    first_name:"Caitlyn",
    last_name:"Brown",
    email:"caitlynbrown@gmail.com"
}]

export default (state = initialState,action) => {
    if(action.type == "CHECKLOGIN") {
        Users.filter(user => {
            if(user.email == "")
            console.log(user)
        })
    }
    return state;
}
