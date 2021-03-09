import {applyMiddleware, combineReducers, createStore} from "redux";
import handleLoginReducer from './duck/HandleLogin';
import createSagaMiddleware from 'redux-saga';
import {watcherSaga} from "./saga/rootSaga";
const reducers = combineReducers({
    handleLogin: handleLoginReducer
});

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
const ConfigureStore = createStore(reducers,{},applyMiddleware(...middlewares));
sagaMiddleware.run(watcherSaga);

export default ConfigureStore;
