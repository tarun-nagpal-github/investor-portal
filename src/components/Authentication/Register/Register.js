import React from 'react';
import { auth,db} from '../../Firebase';
import validators from '../../../validators';
import { Link } from 'react-router-dom';
import './register.css';
import {Row,Col,Container} from 'reactstrap';
class Register extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            firstname: '',
            lastname: '',
            email: '',
            password: '',
            error: null,
        };
        this.validators = validators;
        this.onchange=this.onchange.bind(this);
        this.register=this.register.bind(this);
        this.displayValidationErrors = this.displayValidationErrors.bind(this);
        this.updateValidators = this.updateValidators.bind(this);
    }
    onchange(event){
        this.setState({
           [event.target.name]:event.target.value
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
          if (!this.validators[field].valid) {
            status = false;
          }
        });
        return status;
    }
    displayValidationErrors(fieldName) {
      const validator = this.validators[fieldName];
      const result = '';
      if (validator && !validator.valid) {
        const errors = validator.errors.map((info, index) => {
          return <span className="error" key={index}>* {info}<br/></span>
        });
  
        return (
          <div className="col s12 row">
            {errors}
          </div>  
        );
      }
      return result;
    }
     register(event) {
        const {
          firstname,
          lastname,
          email,
          password,
        } = this.state;
        auth.doCreateUserWithEmailAndPassword(email, password)
          .then(authUser => {
            db.doCreateUser(authUser.user.uid, firstname,lastname, email)
            .then(() => {
              this.setState(() => ({
                firstname:firstname,
                lastname,lastname,
                email:email,
                password:password,
              }));
              this.props.history.push("/login");
            })
            .catch(error => {
              alert('Something went wrong');
            });
          })
          .catch(error => {
            alert('Something went wrong');
          });
          event.preventDefault();
    }
    render(){
        return(
            <section className="height-100vh d-flex align-items-center page-section-ptb login" style={{backgroundImage: 'url(assets/images/register-bg.jpg)'}}>
              <Container>
                <Row className="no-gutters">
                  <Col lg={4} md={6} className="offset-lg-1 login-fancy-bg bg parallax" style={{backgroundImage: 'url(assets/images/register-inner-bg.jpg)'}}>
                    <div className="login-fancy">
                      <h2 className="text-white mb-20">Investor Portal</h2>
                      <p className="mb-20 text-white">Create tailor-cut websites with the exclusive multi-purpose responsive template along with powerful features.</p>
                      <ul className="list-unstyled pos-bot pb-30">
                        <li className="list-inline-item"><p className="text-white"> Terms of Use</p> </li>
                        <li className="list-inline-item"><p className="text-white"> Privacy Policy</p></li>
                      </ul>
                    </div> 
                  </Col>
               
                    <Col lg={4} md={6} className=" bg-white">
                      <div className="login-fancy pb-40 clearfix">
                        <h3 className="mb-30">Signup</h3>
                        <Row>
                          <div className="section-field mb-20 col-sm-6">
                            <label className="mb-10" htmlFor="fname">First name* </label>
                            <input id="firstname" value={this.state.firstname} className="web form-control" type="text" placeholder="First name" name="firstname" onChange={this.onchange} />
                            { this.displayValidationErrors('firstname') }
                          </div>
                          <div className="section-field mb-20 col-sm-6">
                            <label className="mb-10" htmlFor="lname">Last name* </label>
                            <input id="lastname" value={this.state.lastname} className="web form-control" type="text" placeholder="Last name" name="lastname" onChange={this.onchange} />
                            { this.displayValidationErrors('lastname') }
                          </div>
                        </Row>
                        <div className="section-field mb-20">
                          <label className="mb-10" htmlFor="email">Email* </label>
                          <input type="email" value={this.state.email} placeholder="Email*" id="email" className="form-control" name="email" onChange={this.onchange} />
                          { this.displayValidationErrors('email') }
                        </div>
                        <div className="section-field mb-20">
                          <label className="mb-10" htmlFor="password">Password* </label>
                          <input className="Password form-control" value={this.state.password} id="password" type="password" placeholder="Password" name="password" onChange={this.onchange} />
                          { this.displayValidationErrors('password') }
                        </div>
                        { <a onClick={this.register}  className={`button   ${this.isFormValid() ? '' : 'disabled'}`}>
                          <span className="text-white">Signup</span>
                          <i className="fa fa-check text-white" />
                        </a>}
                        <p className="mt-20 mb-0 remember-checkbox">You have an account? <Link to="login"> Login here</Link></p>
                      </div>
                    </Col>
                </Row>
              </Container>
          </section>
        );
    }
}
export default Register;