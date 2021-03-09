import {takeLatest} from "redux-saga/effects";
import {checkUserLogin, handleProcessLogin} from "./handlers/loginHandler";
import {CHECKLOGINSTATUS,PROCESSLOGIN} from '../duck/HandleLogin'

export function* watcherSaga() {
    yield takeLatest(CHECKLOGINSTATUS,checkUserLogin);
    yield takeLatest(PROCESSLOGIN,handleProcessLogin);
}
