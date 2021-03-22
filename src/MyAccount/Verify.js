import '@fortawesome/fontawesome-svg-core';
import React from "react";
import '../css/App.css'

function Verify(props) {
    return (<>
        <div className="content-header">
            <div className="container-fluid">
                <div className="row justify-content-md-center">
                    <div className="col-sm-4 justify-content-lg-center">
                        <h1 className="m-0">Please verify your Email address</h1>
                        <p>A verification mail was sent to aa@ac.com. Please click the Email verification link to verify your email address.</p>
                        <p>If you haven't received the Email, please hit resend button below.</p>
                        <button className="btn btn-primary">Resend</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}


export default Verify;
