import logo from '../logo.svg';
import React from "react";

class SeeInAction extends React.Component {
    constructor(props) {
        super(props);
        this.handleSeeInAction = this.handleSeeInAction.bind(this);
        this.state = {isInaction: false};
    }

    handleSeeInAction(e) {
        this.setState({isInaction: !this.state.isInaction})
    }

    render() {
        if (!this.state.isInaction) {
            return (<button className="btn btn-primary enableHD" onClick={this.handleSeeInAction}>See it in
                action</button>);
        } else {
            return (<button className="btn btn-danger disableHD" onClick={this.handleSeeInAction}><span
                className="glyphicon glyphicon-remove"></span> Disable HelpDesk </button>);
        }
    }
}


function MainHeader() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" style={{top: "0px"}}>
            <a className="navbar-brand" href="./" style={{marginTop: "-15px"}}><img style={{height: '40px'}}
                                                                                      src={logo} alt=""/></a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav"
                    aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="Pricing">Pricing</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Features">Features</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="Contact">Contact</a>
                    </li>
                    <li className="nav-item">
                        <SeeInAction/>
                    </li>
                    <li className="nav-item">
                        <a className="btn btn-default" href="Login" >My HelpDesk
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default MainHeader;
