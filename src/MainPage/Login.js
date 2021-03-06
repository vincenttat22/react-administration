import logo from '../logo.svg';

function Login() {
    return (<div className="row justify-content-md-center">
        <div className="col-lg-12 col-md-12 col-sm-12">
            <div className="jumbotron form-group">
                <div className="login-page">
                    <img style={{width: "200px"}} src={logo} alt=""/>
                    <p><strong style={{fontSize: "35px"}}>Sign in</strong> with your Healthi network Account.</p>
                    <div className="form">
                        <form id="Form" className="login-form">
                            <input id="username" name="username" type="text"
                                   placeholder="Enter your email or phone number"/>
                            <input id="password" name="password" type="password" placeholder="Password"/>
                            <button id="btn-submit" type="submit" className="login-button">login</button>
                            <p id="add_err" style={{fontSize: "small"}}></p>
                            <a href="" style={{fontSize: "medium"}}>Forgot password?</a>
                        </form>
                    </div>
                    <div>
                        <h3>Try HelpDesk</h3>
                        <h5><strong>Free for 1 month</strong></h5>
                        <h5>Special offer. Get your first month on us, then just $9.95 per month.</h5>
                        <a id="btn-subscribe" href="/Register" className="login-button">Subscribe</a>
                    </div>
                </div>


                <div style={{padding: "20px"}}></div>
            </div>
        </div>
    </div>);
}

export default Login;
