import {takeLatest} from "redux-saga/effects";
import {ActionTypes} from '../reducer/AppReducer'
import {checkUserLogin, handleProcessLogin, handleProcessLogout, handleProcessSignup} from "./handlers/loginHandler";
import {addCuisineHandler, getCuisineHandler} from "./handlers/appHandler";

export function* watcherSaga() {
    yield takeLatest(ActionTypes.CHECKLOGINSTATUS,checkUserLogin);
    yield takeLatest(ActionTypes.PROCESSLOGIN,handleProcessLogin);
    yield takeLatest(ActionTypes.PROCESSSIGNUP,handleProcessSignup);
    yield takeLatest(ActionTypes.PROCESSLOGOUT,handleProcessLogout);
    yield takeLatest(ActionTypes.GETCUISINE,getCuisineHandler);
    yield takeLatest(ActionTypes.ADDCUISINE,addCuisineHandler);
}
