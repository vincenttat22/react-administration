
function Home() {
  return <div>
    <div className="toppanel">
      <div className="container-fluid" style={{maxWidth: "1000px"}}>
        <div className="row">
          <div className="col-lg-6 col-sm-12">
            <img src='/Img/computer.png' className="img-responsive" alt=""/>
          </div>
          <div className="col-lg-6 col-sm-12 slogan">
            <h1>HelpDesk Sandbox</h1>
            <h2>Work dependently on any sites</h2>
            <button className="btn btn-warning">Sign up for
              free
              trail
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="toppanel">
    </div>
    <div className="midpanel">
      <div className="container-fluid" style={{maxWidth: "1000px"}}>
        <h2 className="text-center home-title">Why HelpDesk Sandbox</h2>
        <div className="row">

          <div className="col-md-6 col-lg-6">
            <h3><img width="20px" src="https://image.flaticon.com/icons/svg/291/291201.svg" alt=""/> Talk to
              your
              users
              right on the browser.
              Real-time.</h3>
            <p>With Push Notifications, you don’t have to wait for your users to open their inbox to read a
              notification. It will be displayed right on their browser. Real-time.</p>
          </div>
          <div className="col-md-6 col-lg-6">
            <h3><img width="20px" src="https://image.flaticon.com/icons/svg/291/291201.svg" alt=""/> Reach
              your
              users
              anywhere on the web.</h3>
            <p>Push alerts and notifications to different browsers and devices seamlessly. Engage your
              subscribers even when they are not present on your website.</p>
          </div>
          <div className="col-md-6 col-lg-6">
            <h3><img width="20px" src="https://image.flaticon.com/icons/svg/291/291201.svg" alt=""/> Build
              an
              audience.
              Without a mobile app.
            </h3>
            <p>Push Notifications work on all devices. For all
              websites. You can build a mobile audience
              on your mobile website itself without investing
              resources in building a mobile app.</p>
          </div>
          <div className="col-md-6 col-lg-6">
            <h3><img width="20px" src="https://image.flaticon.com/icons/svg/291/291201.svg" alt=""/> Get
              higher
              opt-in
              rates. Expand your
              marketing list.</h3>
            <p>With Push Notifications from PushCrew, you
              can expect to get an opt-in rate of up to 25%
              easily. Some of our early adopters even saw
              opt-in rates as high as 40%!</p>
          </div>
          <div className="col-md-6 col-lg-6">
            <h3><img width="20px" src="https://image.flaticon.com/icons/svg/291/291201.svg" alt=""/> Get
              higher
              click-rates than emails. And
              more pageviews.</h3>
            <p>Since Push Notifications are short and direct, you
              can expect to get really high click-rates. On an
              average, the click-rate hovers between 20% and
              25% (10x of email click-rate).</p>
          </div>
          <div className="col-md-6 col-lg-6">
            <h3><img width="20px" src="https://image.flaticon.com/icons/svg/291/291201.svg" alt=""/> Send
              personalized
              pushes. Make more
              revenue.</h3>
            <p>Push Notifications are clickable. So you can
              send people directly to any URL on your website
              (or outside your domain) based on their
              interests or actions on your website.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="midpanel2">
      <div className="container-fluid">
        <h2 className="text-center home-title">Works on</h2>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-6 col-md-4 col-lg-2 text-center single_for transition "
                 style={{textAlign: "center"}}>
              <img className="img-responsive2" alt="" src="img/edge_256x256.png"
                   data-rjs="2"/>
              <h3>Edge</h3>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-2 text-center single_for transition ">
              <img className="img-responsive2" alt="" src="img/safari_256x256.png"
                   data-rjs="2"/>
              <h3>Safari</h3>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-2 text-center single_for transition ">
              <img className="img-responsive2" alt="" src="img/chrome_256x256.png"
                   data-rjs="2"/>
              <h3>Chrome</h3>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-2 text-center single_for transition ">
              <img className="img-responsive2" alt="" src="img/firefox_256x256.png"
                   data-rjs="2"/>
              <h3>Firefox</h3>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-2 text-center single_for transition ">
              <img className="img-responsive2" alt="" src="img/opera_256x256.png"
                   data-rjs="2"/>
              <h3>Opera</h3>
            </div>
            <div className="col-xs-6 col-md-4 col-lg-2 text-center single_for transition ">
              <img className="img-responsive2" alt="" src="img/adblock_256x256.png"
                   data-rjs="2"/>
              <h3>Adblock</h3>
            </div>
          </div>
        </div>
        <hr/>
      </div>

    </div>
  </div>;
}

export default Home;
