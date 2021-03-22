import React, {useEffect} from "react";
import {Switch, Route} from "react-router-dom";
import 'react-intl-tel-input/dist/main.css'
import Home from "./Home";
import Pricing from "./Pricing";
import Features from "./Features";
import Contact from "./Contact";
import Login from "./Login";
import Signup from "./Signup";
import Page404 from "./Page404";
import VCode from "./vcode";
import MyAccount from "../MyAccount/App";
import {useDispatch} from "react-redux";
import {ActionCreators} from "../redux/reducer/AppReducer";

function MainBody(props) {
    const dispatch = useDispatch();
    useEffect(function (){
        dispatch(ActionCreators.checkLoginStatus())
    },[dispatch])
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/Pricing" component={Pricing} />
                <Route exact path="/Features" component={Features} />
                <Route exact path="/Contact" component={Contact} />
                <Route exact path="/Login" component={Login} />
                <Route exact path="/Signup" component={Signup} />
                <Route path="/vcode/:vcodeid?" component={VCode} />
                <Route path="/app" component={MyAccount} />
                <Route component={Page404} />
            </Switch>
        </div>
    );

}


export default MainBody;

