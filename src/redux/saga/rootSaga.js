import {takeLatest} from "redux-saga/effects";
import {ActionTypes} from '../reducer/AppReducer'
import {checkUserLogin, handleProcessLogin, handleProcessLogout} from "./handlers/loginHandler";
import {getCuisineHandler} from "./handlers/appHandler";

export function* watcherSaga() {
    yield takeLatest(ActionTypes.CHECKLOGINSTATUS,checkUserLogin);
    yield takeLatest(ActionTypes.PROCESSLOGIN,handleProcessLogin);
    yield takeLatest(ActionTypes.PROCESSLOGOUT,handleProcessLogout);
    yield takeLatest(ActionTypes.GETCUISINE,getCuisineHandler);
}
