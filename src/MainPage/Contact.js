import React from "react";
import IntlTelInput from "react-intl-tel-input";
import Header from "./Header";
import Footer from "./Footer";

function Contact() {
    return <div>
        <Header/>
        <div className="midpanel">
            <div className="container-fluid midMobileMode">
                <div className="row">
                    <div className="col-lg-5 col-md-5 col-sm-12">
                        <div className="jumbotron form-group">
                            <form>
                                <h3>Get in touch with us today.</h3>
                                <input type="text" className="form-control" placeholder="Name"/>
                                <br/>
                                <input type="text" className="form-control" placeholder="Email"/>
                                <br/>
                                <IntlTelInput preferredCountries={['au']} onPhoneNumberChange="" onPhoneNumberBlur="" inputClassName={"form-control"} style={{width:"100%"}} fieldName={"tel"} />
                                <br/>
                                <br/>
                                <textarea rows="6" cols="50" className="form-control" placeholder="Message"></textarea>
                                <br/>
                                <div className="g-recaptcha" data-sitekey="6LeinBsUAAAAALWcqVRKFDJDLeb3_T62uJcTxiKZ"></div>
                                <br/>
                                <button id="btn-subscribe" className="btn btn-primary" type="submit">Submit</button>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-7 col-md-7 col-sm-12">
                        <div className="cont-info">
                            <h3>We'd Love to Connect</h3>
                            <p>Please drop us a line to find out more about what our products can do for you. Fill out the
                                form and
                                our Support Team will get in touch with you shortly. We look forward to hearing from
                                you.</p>
                            <h3>Questions?</h3>
                            <p>Call us at +61 2 94393944.</p>
                            <h3>Office Locations</h3>
                            <p>Suite 304, 156 Pacific Highway, St Leonards, NSW </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Footer/>
    </div>;
}

export default Contact;
