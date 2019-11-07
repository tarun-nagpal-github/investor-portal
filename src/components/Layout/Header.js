
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Redirect } from "react-router";
import { withRouter } from "react-router-dom";


class Header extends Component {

    constructor(props) {
        super(props);

        this.state = {
            toggleactive: false,
            defaultValue: 1,
            redirectTo: false
        };
        this.togglebutton = this.togglebutton.bind(this);
        console.log(process.env.PUBLIC_URL);
        console.log(process.env.NODE_ENV);
    }
    togglebutton(toggleactive) {
        this.props.updateParent();
    };

    redirectTo = () => {
        console.log("REDIRECT TO");
        if (this.state.redirectTo) {
            console.log("REDIRECT TO FINALLY");
            return <Redirect to="/login" />
        }
    }

    logout = (event) => {
        let finalAuth = "Bearer " + window.localStorage.getItem('access_token');
        const headers = {
            'Content-Type': 'application/json-patch+json',
            "Authorization": finalAuth
        }
        axios.post('http://192.168.9.129/api/Auth/logout', "", {
            headers: headers
        }).then((response) => {
            window.localStorage.removeItem('access_token');
            this.props.history.push("login");
        }).catch((error) => {
            this.setState({ errors: [error] })
            console.log(error);
        });

        return <Redirect to="/login" />;
    }

    render() {
        this.redirectTo();
        const stylingHead = {
            "color": "green",
            "fontWeight": 700
        };

        return (
            <nav className="admin-header header-admin navbar navbar-default col-lg-12 col-12 p-0 fixed-top d-flex flex-row">

                <div className="text-left navbar-brand-wrapper">
                    <Link className="navbar-brand brand-logo" to="/"><img src="assets/images/hfh-logo.png" alt="" /></Link>
                    <Link className="navbar-brand brand-logo-mini" to="/"><img src="assets/images/favicon.png" alt="" /></Link>
                </div>
                {/* <!-- Top bar left --> */}
                <ul className="nav navbar-nav mr-auto">
                    <li className="nav-item">
                        <a className="button-toggle-nav inline-block ml-20 pull-left" onClick={this.togglebutton} href="javascript:void(0);"  ><i className="zmdi zmdi-menu ti-align-right"></i></a>
                    </li>
                </ul>

                {/* <!-- top bar right --> */}
                <ul className="nav navbar-nav ml-auto">

                    <li className="nav-item fullscreen">
                        <a id="btnFullscreen" className="nav-link" ><i className="ti-fullscreen"></i></a>
                    </li>
                    <li className="nav-item dropdown ">
                        <a className="nav-link top-nav" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <i className="ti-bell"></i>
                            <span className="badge badge-danger notification-status"> </span>
                        </a>

                        <div className="dropdown-menu dropdown-menu-right dropdown-big dropdown-notifications">
                            <div className="dropdown-header notifications">
                                <strong>Notifications</strong>
                                <span className="badge badge-pill badge-warning">05</span>
                            </div>

                            <div className="dropdown-divider"></div>
                            <a href="#" className="dropdown-item">Notification 1<small className="float-right text-muted time">Just now</small> </a>
                            <a href="#" className="dropdown-item">Notification 2<small className="float-right text-muted time">22 mins</small> </a>
                            <a href="#" className="dropdown-item">Notification 3<small className="float-right text-muted time">7 hrs</small> </a>
                            <a href="#" className="dropdown-item">Notification 4<small className="float-right text-muted time">1 days</small> </a>
                            <a href="#" className="dropdown-item">Notification 5<small className="float-right text-muted time">2 days</small> </a>
                        </div>

                    </li>
                    <li className="nav-item dropdown mr-30">
                        <a className="nav-link nav-pill user-avatar" data-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">
                            <img src="assets/images/profile-avatar.jpg" alt="avatar" />
                        </a>
                        <div className="dropdown-menu dropdown-menu-right">
                            <div className="dropdown-header">
                                <div className="media">
                                    <div className="media-body">
                                        <h5 className="mt-0 mb-0">Investor Portal</h5>
                                        <span>protal.investor@mail.com</span>
                                    </div>
                                </div>
                            </div>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i className="text-secondary ti-reload"></i>Activity</a>
                            <a className="dropdown-item" href="#"><i className="text-warning ti-user"></i>Profile</a>
                            <div className="dropdown-divider"></div>
                            <a className="dropdown-item" href="#"><i className="text-info ti-settings"></i>Settings</a>
                            <span style={{ cursor: "pointer" }} className="dropdown-item" onClick={this.logout}><i className="text-danger ti-unlock"></i>Logout</span>

                        </div>
                    </li>
                </ul>
            </nav>
            //   End Header

        );
    }
}

export default withRouter(Header);


