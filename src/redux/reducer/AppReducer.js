const SETKEYS = "SETKEYS";
export const GETKEY = "GETKEY";



export const setKeys = function (data) {
    return {type:SETKEYS,data}
}

export const getKey = function () {
    return {type:GETKEY}
}

const initialState = {
    auth: false,
    msg: "",
    keys:[]
};

function AppReducer(state = initialState,action) {
    switch (action.type) {
        case SETKEYS:
            return {...state,...action.data };
        default:
            return state
    }
}
export default AppReducer;
