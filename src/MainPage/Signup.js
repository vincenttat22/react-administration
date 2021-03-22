import {useDispatch, useSelector} from "react-redux";
import {ActionCreators} from '../redux/reducer/AppReducer'
import Header from "./Header";
import React, {useEffect, useState} from "react";
import Footer from "./Footer";
import ReCAPTCHA from "react-google-recaptcha";
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.min.css';
import serialize from "form-serialize";
import alertify from 'alertifyjs';
import md5 from 'md5';
import moment from 'moment';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

React.Component.prototype.$md5 = md5;

function Signup(props) {
    const [error, setError] = useState("");
    const [passwordError, setPasswordError] = useState("");
    const recaptchaRef = React.createRef();
    const [startDate, setStartDate] = useState(new Date());

    const dispatch = useDispatch();

    const signUpDetail = useSelector((state) => state.appReducer);
    useEffect(() => {
        setError(signUpDetail.msg);
    }, [signUpDetail]);

    function submitSignup(event) {
        event.preventDefault();
        const recaptchaValue = recaptchaRef.current.getValue();
        const body = serialize(event.target, {hash: true, empty: true})
        if(recaptchaValue==="") {
            alertify.error("Please, enter your captcha.")
            return false;
        }
        if(!validatePassword(body)) {
            return false;
        }
        body.md5Password = md5(body.password);
        body.dob = moment(body.dob, "DD/MM/YYYY").format('YYYY-MM-DD');
        dispatch(ActionCreators.processSignup(props.history,body));
    }

    function validatePassword(body) {
        let b = true;
        if(body.password !== body.confirmPassword) {
            setPasswordError("Password enter did not match. Please try again.");
            b = false;
        } else {
            setPasswordError("");
            if(body.password.length < 7) {
                setPasswordError("Password must be at least 7 letters & digits long.");
                b = false;
            }
            let hasCaptical = false;
            let hasLowercase = false;
            for (let i = 0; i < body.password.length; i++) {
                let p = body.password.charAt(i);
                if (p === p.toUpperCase())
                {
                    hasCaptical = true;
                }else if (p === p.toLowerCase())
                {
                    hasLowercase = true;
                }
            }
            if(!hasCaptical || !hasLowercase) {
                setPasswordError("Password contains at least 1 upper case letter and 1 lower case letter.");
                b = false;
            }
        }
        return b;
    }


    return (<div>
        <Header/>
        <div className="container-fluid toppanel">
            <div className="row">
            <div className="col-lg-8 col-md-7" style={{"textAlign": "center"}}>
                <div className="regisLogo">
                    <img style={{maxWidth: "400px",margin: "60px auto"}}
                         src="https://image.flaticon.com/icons/svg/387/387602.svg"
                         className="img-responsive"
                         alt=""/>
                </div>
            </div>
            <div className="col-lg-4 col-md-5">
                <div className="jumbotron form-group" style={{color:"black"}}>
                    <form onSubmit={submitSignup}>
                        <label>Name</label>
                        <input type="text" name="first_name" className="form-control" placeholder="First name" required/>
                        <input type="text" name="last_name" className="form-control" placeholder="Last name" required/>
                        <label>Email</label>
                        <input type="email" name="email" className="form-control" placeholder="Email" required/>
                        <p style={{color: "red",fontSize: "14px"}}>{error}</p>
                        <label>Mobile</label>
                        <PhoneInput country={'au'} inputClassName={"form-control"} inputStyle={{width: "100%"}} inputProps={{name: 'tel', required: true}} />
                        <label>Password</label>
                        <input type="password" name="password" className="form-control" placeholder="Password" required/>
                        <label>Confirm password</label>
                        <input type="password" name="confirmPassword" className="form-control" placeholder="Re-enter password" required/>
                        <p style={{color: "red",fontSize: "15px"}}>{passwordError}</p>
                        <label>Gender</label><br/>
                        <select className="form-control" name="gender" style={{width:"130px"}}>
                            <option>Male</option>
                            <option>Female</option>
                        </select>
                        <label>Date of birth</label>
                        <div style={{width:"130px"}}>
                            <DatePicker name="dob" selected={startDate} dateFormat="dd/MM/yyyy" onChange={date => setStartDate(date)} isClearable placeholderText="dd/mm/yyyy" className="form-control"/>
                        </div>


                        <div style={{margin:"5px 0"}}>
                            <ReCAPTCHA sitekey="6LeinBsUAAAAALWcqVRKFDJDLeb3_T62uJcTxiKZ"  ref={recaptchaRef} />
                        </div>
                        <button className="login-button" type="submit">Sign Up</button>
                    </form>
                </div>
            </div>
            </div>
        </div>
        <Footer/>
    </div>);
}

export default Signup;
