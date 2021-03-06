import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css'
import  './css/MainPage.css'
import  './css/pricing.css'
import  './css/feature.css'
import  './css/login.css'

import {BrowserRouter} from "react-router-dom";
import MainBody from "./MainPage/Body";
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import store from "./Store";


ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <MainBody />
        </BrowserRouter>
    </Provider>,
  document.getElementById('root')
);


reportWebVitals();
