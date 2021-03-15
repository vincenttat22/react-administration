
import {withRouter} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faComment,faTimes,faSearch,faBell,faEnvelope,faUser,faFile,faBars } from '@fortawesome/free-solid-svg-icons'


function MainHeader(props) {

    return (
        <nav className="main-header navbar navbar-expand navbar-white navbar-light" style={{position:"fixed",width:"-webkit-fill-available"}}>
            <ul className="navbar-nav">
                <li className="nav-item">
                    <div className="nav-link" onClick={props.OnCollapseSidebar} role="button"><FontAwesomeIcon icon={faBars} /></div>
                </li>
            </ul>

            <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                    <div className="navbar-search-block">
                        <form className="form-inline">
                            <div className="input-group input-group-sm">
                                <input className="form-control form-control-navbar" type="search" placeholder="Search"
                                       aria-label="Search" />
                                    <div className="input-group-append">
                                        <button className="btn btn-navbar" type="submit">
                                            <FontAwesomeIcon icon={faSearch} />
                                        </button>
                                        <button className="btn btn-navbar" type="button" data-widget="navbar-search">
                                            <FontAwesomeIcon icon={faTimes} />
                                        </button>
                                    </div>
                            </div>
                        </form>
                    </div>
                </li>
                <li className="nav-item dropdown">
                    <div className="nav-link" data-toggle="dropdown" >
                        <FontAwesomeIcon icon={faBell} />
                        <span className="badge badge-warning navbar-badge">15</span>
                    </div>
                    <div className="dropdown-menu dropdown-menu-lg dropdown-menu-right">
                        <span className="dropdown-item dropdown-header">15 Notifications</span>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item">
                            <FontAwesomeIcon icon={faEnvelope} /> 4 new messages
                            <span className="float-right text-muted text-sm">3 mins</span>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item">
                            <FontAwesomeIcon icon={faUser} /> 8 friend requests
                            <span className="float-right text-muted text-sm">12 hours</span>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item">
                            <FontAwesomeIcon icon={faFile} /> 3 new reports
                            <span className="float-right text-muted text-sm">2 days</span>
                        </div>
                        <div className="dropdown-divider"></div>
                        <div className="dropdown-item dropdown-footer">See All Notifications</div>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link" data-widget="control-sidebar" data-slide="true" role="button">
                        {/*<i className="far fa-comments"></i>*/}
                        <FontAwesomeIcon icon={faComment} />
                        <span className="badge badge-danger navbar-badge">3</span>
                    </div>
                </li>
            </ul>
        </nav>
    );
}

export default withRouter(MainHeader);
