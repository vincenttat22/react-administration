import {takeLatest} from "redux-saga/effects";
import {checkUserLogin, handleProcessLogin, handleProcessLogout} from "./handlers/loginHandler";
import {CHECKLOGINSTATUS, PROCESSLOGIN, PROCESSLOGOUT} from '../reducer/HandleLogin'
import {GETKEY} from '../reducer/AppReducer'
import {getKeyHandler} from "./handlers/appHandler";

export function* watcherSaga() {
    yield takeLatest(CHECKLOGINSTATUS,checkUserLogin);
    yield takeLatest(PROCESSLOGIN,handleProcessLogin);
    yield takeLatest(PROCESSLOGOUT,handleProcessLogout);
    yield takeLatest(GETKEY,getKeyHandler);
}
