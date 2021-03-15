import logo from '../logo.svg';
import serialize from 'form-serialize'
import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from '../redux/reducer/AppReducer'
import md5 from 'md5';
import Header from "./Header";
import React, {useEffect} from "react";
import Footer from "./Footer";

function Login(props) {
    const dispatch = useDispatch();
    const loginDetail = useSelector((state) => state.appReducer);
    function SubmitLogin(event) {
        event.preventDefault();
        const body = serialize(event.target, {hash: true, empty: true})
        body.password = md5(body.password)
        dispatch(ActionCreators.processLogin(body));
    }

    useEffect(() => {
        if (loginDetail !== undefined && loginDetail.auth) {
            // const userProfile = JSON.parse(localStorage.getItem("userProfile"));
            props.history.push(`app`)
        }
    }, [loginDetail,props]);


    return (<div>
        <Header/>
        <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="jumbotron form-group" style={{marginBottom:"0"}}>
                    <div className="my-login-page">
                        <img style={{width: "200px"}} src={logo} alt=""/>
                        <p><strong style={{fontSize: "35px"}}>Sign in</strong> with your Account.</p>
                        <div className="form">
                            <form id="Form" className="login-form" onSubmit={SubmitLogin}>
                                <input id="email" name="email" type="text"
                                       placeholder="Enter your email or phone number"/>
                                <input id="password" name="password" type="password" placeholder="Password"/>
                                <button id="btn-submit" type="submit" className="login-button">login</button>
                                <p id="add_err" style={{fontSize: "small"}}>{loginDetail.msg}</p>
                                <a href="./" style={{fontSize: "medium"}} alt="">Forgot password?</a>
                                <div style={{display:"inline-flex"}}>
                                    <p>Didn't have an account? </p><a href="/Signup" style={{fontSize: "medium",marginLeft:"5px"}} alt=""> Sign up now </a>
                                </div>
                            </form>
                        </div>
                    </div>


                    <div style={{padding: "20px"}}></div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default Login;
