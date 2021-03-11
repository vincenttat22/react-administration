import React from "react";
import Header from "./Header";
import Footer from "./Footer";

function Pricing() {
  function redirectUrlOnClick(url,e) {
    window.open('/'+url,'_blank')
  }
  return <div>
    <Header/>
    <div className="toppanel">
      <div className="container-fluid" style={{maxWidth: "1000px", textAlign: "center", font: "message-box"}}>
        <h1>Plans and <span style={{color: "yellow"}}>Pricing</span></h1>
        <p style={{color: "lightgrey"}}>Try HelpDesk sandbox free for 30 days, no credit card required</p>
        <button className="btn btn-warning" onClick={redirectUrlOnClick.bind(this,'signup')}>Sign up for free trail
        </button>
      </div>
    </div>
    <div className="midpanel">
      <div className="container-fluid" style={{maxWidth: "1000px", paddingTp: "20px"}}>
        <div className="columns">
          <ul className="price">
            <li className="header">Basic</li>
            <li className="grey">Free</li>
            <li>Booking request</li>
            <li>Email us</li>
            <li>Chat with us</li>
            <li>10 locations</li>
            <li className="grey" ng-show="basicOption"><i className="fa fa-check" aria-hidden="true"></i>
            </li>
            <li className="grey" ng-show="!basicOption">
              <button className="btn btn-primary">Start Free Trail</button>
            </li>
          </ul>
        </div>
        <div className="columns">
          <ul className="price">
            <li className="header" style={{backgroundColor: "#4CAF50"}}>Pro</li>
            <li className="grey">$ 9.99 / month</li>
            <li>Booking request (manageable)</li>
            <li>Email us</li>
            <li>Chat with us</li>
            <li>20 locations</li>
            <li className="grey" ng-show="proOption"><i className="fa fa-check" aria-hidden="true"></i></li>
            <li className="grey" ng-show="!proOption">
              <button className="btn btn-primary" ng-click="upToPro()">Start Free Trail</button>
            </li>
          </ul>
        </div>
        <div className="columns">
          <ul className="price">
            <li className="header">Premium</li>
            <li className="grey">$ 49.99 / month</li>
            <li>EMR integrated</li>
            <li>Booking request</li>
            <li>Direct booking</li>
            <li>Email us</li>
            <li>Chat with us</li>
            <li>Unlimited</li>
            <li className="grey" ng-show="premiumOption"><i className="fa fa-check" aria-hidden="true"></i>
            </li>
            <li className="grey" ng-show="!premiumOption">
              <button className="btn btn-primary">Start Free Trail</button>
            </li>
          </ul>
        </div>
      </div>
      <div className="container-fluid" style={{maxWidth: "1000px", paddingBottom: "20px"}}>
        <h2 className="text-center home-title" style={{fontWeight: "bold"}}>FAQs</h2>
        <div className="row">
          <div className="col-md-6 col-lg-6">
            <h3>Talk to your users right on the browser.</h3>
            <p>With Push Notifications, you don’t have to wait for your users to open their inbox to read a
              notification. It will be displayed right on their browser. Real-time.</p>
          </div>

          <div className="col-md-6 col-lg-6">
            <h3> Reach your users anywhere on the web.</h3>
            <p>Push alerts and notifications to different browsers and devices seamlessly. Engage your
              subscribers even when they are not present on your website.</p>
          </div>

          <div className="col-md-6 col-lg-6">
            <h3>Build an audience. Without a mobile app.</h3>
            <p>Push Notifications work on all devices. For all
              websites. You can build a mobile audience
              on your mobile website itself without investing
              resources in building a mobile app.</p>
          </div>

          <div className="col-md-6 col-lg-6">
            <h3>Get higher opt-in rates. Expand your marketing list.</h3>
            <p>With Push Notifications from PushCrew, you
              can expect to get an opt-in rate of up to 25%
              easily. Some of our early adopters even saw
              opt-in rates as high as 40%!</p>
          </div>


          <div className="col-md-6 col-lg-6">
            <h3>Get higher click-rates than emails. And more pageviews.</h3>
            <p>Since Push Notifications are short and direct, you
              can expect to get really high click-rates. On an
              average, the click-rate hovers between 20% and
              25% (10x of email click-rate).</p>
          </div>

          <div className="col-md-6 col-lg-6">
            <h3>Send personalized pushes. Make more revenue.</h3>
            <p>Push Notifications are clickable. So you can
              send people directly to any URL on your website
              (or outside your domain) based on their
              interests or actions on your website.</p>
          </div>

        </div>
      </div>
    </div>
    <Footer/>
  </div>;
}

export default Pricing;
