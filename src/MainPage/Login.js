import logo from '../logo.svg';
import serialize from 'form-serialize'
import {useDispatch, useSelector} from "react-redux";
import {processLogin} from '../redux/duck/HandleLogin'
import React, {useEffect, useState} from "react";
import {generatePath} from "react-router";

function Login(props) {
    const dispatch = useDispatch();
    const loginDetail = useSelector((state)=> state.handleLogin);
    if (loginDetail.auth) {
        const userProfile = JSON.parse(localStorage.getItem("userProfile"));
        props.history.push(`/User/${userProfile.id}`)
    } else {
        console.log(loginDetail.msg);
    }

    function SubmitLogin(event) {
        event.preventDefault();
        const body = serialize(event.target, {hash: true, empty: true})
        dispatch(processLogin(body));
    }
    // useEffect(() => {
    //     console.log(Object.getOwnPropertyNames(userProfile))
    //
    //     if(Object.getOwnPropertyNames(userProfile).length > 0) {
    //         console.log(auth,userProfile)
    //         const path = generatePath("/MyAccount/:id",userProfile.id)
    //         props.history(path);
    //     }
    // }, [userProfile,auth,props]);


    return (<div className="row justify-content-md-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="jumbotron form-group">
                <div className="login-page">
                    <img style={{width: "200px"}} src={logo} alt=""/>
                    <p><strong style={{fontSize: "35px"}}>Sign in</strong> with your Healthi network Account.</p>
                    <div className="form">
                        <form id="Form" className="login-form" onSubmit={SubmitLogin}>
                            <input id="username" name="username" type="text" placeholder="Enter your email or phone number"/>
                            <input id="password" name="password" type="password" placeholder="Password"/>
                            <button id="btn-submit" type="submit" className="login-button">login</button>
                            <p id="add_err" style={{fontSize: "small"}}>{loginDetail.msg}</p>
                            <a href="./" style={{fontSize: "medium"}} alt="" >Forgot password?</a>
                        </form>
                    </div>
                    <div>
                        <h3>Try HelpDesk</h3>
                        <h5><strong>Free for 1 month</strong></h5>
                        <h5>Special offer. Get your first month on us, then just $9.95 per month.</h5>
                        <a id="btn-subscribe" href="/Register" alt="" className="login-button">Subscribe</a>
                    </div>
                </div>


                <div style={{padding: "20px"}}></div>
            </div>
        </div>
    </div>);
}

export default Login;
