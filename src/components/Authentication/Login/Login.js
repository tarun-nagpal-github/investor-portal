import React from 'react';
import { auth } from '../../Firebase';
import { Link } from 'react-router-dom';
import validators from '../../../validators';
import { Container, Row, Col, CardBody, Card, Alert } from 'reactstrap';
import { Redirect } from "react-router";
import axios from 'axios';


import './login.css';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      error: null,
      redirectTo: false,
      errors: [],
    };
    this.validators = validators;
    this.onchange = this.onchange.bind(this);

    this.displayValidationErrors = this.displayValidationErrors.bind(this);
    this.updateValidators = this.updateValidators.bind(this);
  }

  componentDidMount = () => {
    const isLoggedIn = window.localStorage.getItem('access_token');
    if (isLoggedIn) {
      this.setState({ redirectTo: true });
      console.log(isLoggedIn);
    }
  }
  onchange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
    this.updateValidators([event.target.name], event.target.value);
  }
  updateValidators(fieldName, value) {
    this.validators[fieldName].errors = [];
    this.validators[fieldName].state = value;
    this.validators[fieldName].valid = true;
    this.validators[fieldName].rules.forEach((rule) => {
      if (rule.test instanceof RegExp) {
        if (!rule.test.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      } else if (typeof rule.test === 'function') {
        if (!rule.test(value)) {
          this.validators[fieldName].errors.push(rule.message);
          this.validators[fieldName].valid = false;
        }
      }
    });
  }
  isFormValid() {
    let status = true;
    Object.keys(this.validators).forEach((field) => {
      if (field == 'email' || field == 'password') {
        if (!this.validators[field].valid) {
          status = false;
        }
      }
    });
    return status;
  }
  isArrayNotEmpty = (records) => {
    return Array.isArray(records) && records.length > 0;
  }


  errorList = (errors) => {
    if (!this.isArrayNotEmpty(errors)) {
      return null;
    }

    var items = [];
    errors.forEach((err, i) => {
      items.push(
        <li className="ml-2" key={i}>
          {err}
        </li>
      );
    });
    return (
      <div>
        <Alert color="danger">{items}</Alert>
      </div>
    );
  }


  displayValidationErrors(fieldName) {
    const validator = this.validators[fieldName];
    const result = '';
    if (validator && !validator.valid) {
      const errors = validator.errors.map((info, index) => {
        return <span className="error" key={index}>* {info}<br /></span>
      });
      return (
        <div className="col s12 row">
          {errors}
        </div>
      );
    }
    return result;
  }

  redirectTo = () => {
    if (this.state.redirectTo) {
      return <Redirect to="/" />
    }
  }


  // const msg = async () => {
  //   const msg = await scaryClown();
  //   console.log('Message:', msg);
  // }


  login = (event) => {
    const headers = {
      'Content-Type': 'application/json-patch+json',
      // 'Authorization': 'JWT fefege...'
    }

    const data = {
      "email": this.state.email,
      "password": this.state.password
    };


    axios.post('http://192.168.9.129/api/Auth/login', data, {
      headers: headers
    }).then((response) => {
      if (response.status == 200) {
        window.localStorage.setItem('access_token', response.data.data.access_token);
        this.setState({
          redirectTo: true
        });
      }
    }).catch((error) => {
      this.setState({ errors: [error.response.data.message] })
      console.log(error.response.data.message);
    });

  }
  render() {
    return (
      <React.Fragment>

        <section className="height-100vh d-flex align-items-center page-section-ptb login" >
          {this.redirectTo()}

          <Container >
            <Row>
              <Col>
                {this.errorList(this.state.errors)}
              </Col>
            </Row>
            <Row className="justify-content-center no-gutters vertical-align">


              <Col lg={4} md={6} className="login-fancy-bg bg">

                {/* <div className="login-fancy">
                  <h2 className="text-white mb-20">Investor Portal</h2>
                  <p className="mb-20 text-white">Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                  <ul className="list-unstyled  pos-bot pb-30">
                    <li className="list-inline-item"><p className="text-white"> Terms of Use</p> </li>
                    <li className="list-inline-item"><p className="text-white"> Privacy Policy</p></li>
                  </ul>
                </div> */}

                <div class="login-fancy" style={{ textAlign: "center", marginTop: "30%" }}>
                  <img src="assets/images/hfh-logo.png" alt="" style={{ height: "90px" }} />
                </div>
              </Col>
              <Col lg={4} md={6} className="bg-white">
                <div className="login-fancy pb-40 clearfix">
                  <h3 className="mb-30">Sign In To Admin</h3>
                  <div className="section-field mb-20">
                    <label className="mb-10" htmlFor="name">Email </label>
                    <input id="email" className="web form-control" type="text" placeholder="Email" value={this.state.email} name="email" onChange={this.onchange} />
                    {this.displayValidationErrors('email')}
                  </div>
                  <div className="section-field mb-20">
                    <label className="mb-10" htmlFor="Password">Password* </label>
                    <input id="password" className="Password form-control" type="password" placeholder="Password" value={this.state.password} name="password" onChange={this.onchange} />
                    {this.displayValidationErrors('password')}
                  </div>
                  <div className="section-field">
                    <div className="remember-checkbox mb-30">
                      <input type="checkbox" className="form-control" name="two" id="two" />
                      <label htmlFor="two"> Remember me</label>

                    </div>
                  </div>
                  <a onClick={this.login} className={`btn btn-primary   ${this.isFormValid() ? '' : 'disabled'}`}>
                    <span className="text-white">Log in</span>
                    <i className="fa fa-check text-white" />
                  </a>
                  {/* <p className="mt-20 mb-0 remember-checkbox">Don't have an account? <Link to="/register" > Create one here </Link></p> */}
                </div>
              </Col>
            </Row>
          </Container >

        </section >
      </React.Fragment >
    );
  }
}
export default Login;