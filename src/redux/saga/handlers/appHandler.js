import {call,put} from "redux-saga/effects";
import {getCuisineRequest} from "../requests/appRequest";
import {ActionCreators} from "../../reducer/AppReducer";


export function* getCuisineHandler() {
    try {
        const response = yield call(getCuisineRequest);
        yield put(ActionCreators.setCuisine(response.data));
    } catch (error) {
        console.log(error)
    }
}



