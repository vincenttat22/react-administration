import {call,put} from "redux-saga/effects";
import {getCuisineRequest,addCuisineRequest} from "../requests/appRequest";
import {ActionCreators} from "../../reducer/AppReducer";


export function* getCuisineHandler() {
    try {
        const response = yield call(getCuisineRequest);
        yield put(ActionCreators.setCuisine(response.data));
    } catch (error) {
        console.log(error)
    }
}

export function* addCuisineHandler(action) {
    try {
        const response = yield call(addCuisineRequest,action.data);
        // yield put(ActionCreators.setCuisine(response.data));
    } catch (error) {
        console.log(error)
    }
}



