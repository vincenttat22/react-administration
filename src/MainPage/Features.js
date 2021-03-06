import React from "react";

function Features() {
    function redirectUrlOnClick(url,e) {
        window.open('/'+url,'_blank')
    }
    return <div>
        <div className="toppanel">
            <div className="container-fluid" style={{maxWidth: "1000px", textAlign: "center", font: "message-box"}}>
                <h1>Integrate HelpDesk to your Business website</h1>
                <p style={{color: "lightgrey"}}>What you need is create an account with us, and place the snippet code that
                    we
                    provide then you're ready to use.</p>
                <button className="btn btn-warning" onClick={redirectUrlOnClick.bind(this,'signup')}>Sign up for free trail
                </button>
            </div>
        </div>
        <div className="toppanel">

        </div>
        <div className="midpanel">
            <div className="container-fluid " style={{textAlign: "center"}}>
                <div className="col-mid-12"><h1>How HelpDesk works</h1></div>
            </div>
            <div className="container-fluid swapElement" style={{maxWidth: "1000px",padding: "20px"}}>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 swapChild1">
                        <h4>Register a new account with us.</h4>
                        <p>It's easy to register a new account with us, no credit card payment requires.</p>
                    </div>
                    <div className="col-sm-6 col-lg-6 swapChild2 imgDiv"><img src="img/account.svg" alt="" /> </div>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: "1000px",padding: "20px"}}>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 imgDiv"><img
                        src="http://www.flaticon.com/premium-icon/icons/svg/296/296713.svg" alt="" />
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <h4>Copy the snippet which can be found after registration.</h4>
                        <p>Login account with your username and password, then you will find a snippet code in your console
                            page.
                            Copy
                            the code.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid swapElement" style={{maxWidth: "1000px",padding: "20px"}}>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 swapChild1">
                        <h4>Paste your snippet code to your website</h4>
                        <p>Paste your snippet before the closing &lt;/head&gt; tag on your HTML template</p>
                    </div>
                    <div className="col-sm-6 col-lg-6 swapChild2 imgDiv"><img
                        src="https://image.flaticon.com/icons/svg/143/143589.svg" alt=""/></div>
                </div>
            </div>
            <div className="container-fluid" style={{maxWidth: "1000px",padding: "20px"}}>
                <div className="row">
                    <div className="col-sm-6 col-lg-6 imgDiv"><img
                        src="https://image.flaticon.com/icons/svg/387/387581.svg" alt=""/>
                    </div>
                    <div className="col-sm-6 col-lg-6">
                        <h4>Ready to use.</h4>
                        <p>Congrats, you have fully integrated HelpDesk to your website. You can also edit your HelpDesk
                            information however you like.</p>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}

export default Features;
