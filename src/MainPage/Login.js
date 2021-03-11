import logo from '../logo.svg';
import serialize from 'form-serialize'
import {useDispatch, useSelector} from "react-redux";
import {processLogin} from '../redux/reducer/HandleLogin'
import Header from "./Header";
import React, {useEffect} from "react";
import Footer from "./Footer";

function Login(props) {
    const dispatch = useDispatch();
    const loginDetail = useSelector((state) => state.handleLogin);
    function SubmitLogin(event) {
        event.preventDefault();
        const body = serialize(event.target, {hash: true, empty: true})
        dispatch(processLogin(body));
    }

    useEffect(() => {
        if (loginDetail.auth) {
            // const userProfile = JSON.parse(localStorage.getItem("userProfile"));
            props.history.push(`app`)
        }
    }, [loginDetail.auth,props]);


    return (<div>
        <Header/>
        <div className="row justify-content-md-center">
            <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="jumbotron form-group" style={{marginBottom:"0"}}>
                    <div className="my-login-page">
                        <img style={{width: "200px"}} src={logo} alt=""/>
                        <p><strong style={{fontSize: "35px"}}>Sign in</strong> with your Healthi network Account.</p>
                        <div className="form">
                            <form id="Form" className="login-form" onSubmit={SubmitLogin}>
                                <input id="username" name="username" type="text"
                                       placeholder="Enter your email or phone number"/>
                                <input id="password" name="password" type="password" placeholder="Password"/>
                                <button id="btn-submit" type="submit" className="login-button">login</button>
                                <p id="add_err" style={{fontSize: "small"}}>{loginDetail.msg}</p>
                                <a href="./" style={{fontSize: "medium"}} alt="">Forgot password?</a>
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
