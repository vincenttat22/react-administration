import {call,put} from "redux-saga/effects";
import {getKeyRequest} from "../requests/appRequest";
import {setKeys} from "../../reducer/AppReducer";

export function* getKeyHandler() {
    try {
        const response = yield call(getKeyRequest);
        yield put(setKeys(response.data));
    } catch (error) {
        console.log(error)
    }
}



