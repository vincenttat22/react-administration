import React from "react";
import './footer.css'


function MainFooter() {
    return (
        <div style={{background:"#25AAE1"}}>
            <div className="container-fluid">
                <footer>
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-md-3 col-sm-6 footer-col">
                                <div className="logofooter"> Claydata</div>
                                <p><i className="fa fa-map-marker"></i> Suite 304, 156 Pacific Highway, St Leonards, NSW
                                </p>
                                <p><i className="fa fa-phone"></i> Phone : +61294393944.</p>
                                <p><i className="fa fa-envelope"></i> E-mail : support@claydata.com</p>
                            </div>

                            <div className="col-md-3 col-sm-6 footer-col">
                                <h6 className="heading7">Find Us</h6>
                                <img className="gmap" width="600"
                                     src="https://maps.googleapis.com/maps/api/staticmap?center=Albany,+NY&zoom=13&scale=false&size=250x300&maptype=roadmap&format=png&visual_refresh=true"
                                     alt="Google Map of Albany, NY"/>
                            </div>

                            <div className="col-md-3 col-sm-6 footer-col">
                                <h6 className="heading7">LATEST POST</h6>
                                <div className="post">
                                    <p>facebook crack the movie advertisment code:what it means for
                                        you <span>August 3,2015</span></p>
                                    <p>facebook crack the movie advertisment code:what it means for
                                        you <span>August 3,2015</span></p>
                                    <p>facebook crack the movie advertisment code:what it means for
                                        you <span>August 3,2015</span></p>
                                </div>

                            </div>

                            <div className="col-md-3 col-sm-6 footer-col">
                                <h6 className="heading7">Social Media</h6>
                                <ul className="list-inline">
                                    <li><i className="fa fa-linkedin social-icon linked-in" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-facebook social-icon facebook" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-twitter social-icon twitter" aria-hidden="true"></i></li>
                                    <li><i className="fa fa-google-plus social-icon google" aria-hidden="true"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                </footer>

                <hr/>

                <div className="row">
                    <div className="col-md-12">
                        <div className="col-md-8">

                            <a href="terms-and-conditions">Terms of Service</a>

                            <a href="privacy">Privacy</a>

                            <a href="security">Security</a>

                        </div>
                        <div className="span4">
                            <p className="muted pull-right">© 2017 Claydata. All rights reserved</p>
                        </div>
                    </div>
                </div>

                <div className="modal fade" id="loadingModal" role="dialog" style={{marginTop: "200px"}}>
                    <div className="modal-dialog">
                        <div className="modal-body" style={{color: "white",textAlign: "center"}}>
                            <i className="fa fa-spinner fa-spin" style={{fontSize:"24px"}}></i>
                            <p>Loading HelpDesk, Please wait...</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default MainFooter;
