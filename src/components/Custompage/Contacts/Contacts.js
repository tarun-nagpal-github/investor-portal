import React from 'react';
import { Row,Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Card,CardBody,Breadcrumb,BreadcrumbItem } from "reactstrap";
import './Contacts.css';
class Contacts extends React.Component {
  constructor(props) {
    super(props);
    this.contactfirst = this.contactfirst.bind(this);
    this.contactsecond = this.contactsecond.bind(this);
    this.contactthird = this.contactthird.bind(this);
    this.contactfour = this.contactfour.bind(this);
    this.contactfive = this.contactfive.bind(this);
    this.contactsix = this.contactsix.bind(this);
    this.contactseven = this.contactseven.bind(this);
    this.contacteight = this.contacteight.bind(this);
    this.contactnine = this.contactnine.bind(this);
    this.state = {
      contactfirst: false,
      contactsecond: false,
      contactthird: false,
      contactfour: false,
      contactfive: false,
      contactsix: false,
      contactseven: false,
      contacteight: false,
      contactnine: false
    };

  }
  contactfirst() {
    this.setState(prevState => ({
      contactfirst: !prevState.contactfirst
    }));
  }
  contactsecond() {
    this.setState(prevState => ({
      contactsecond: !prevState.contactsecond
    }));
  }
  contactthird() {
    this.setState(prevState => ({
      contactthird: !prevState.contactthird
    }));
  }
  contactfour() {
    this.setState(prevState => ({
      contactfour: !prevState.contactfour
    }));
  }

  contactfive() {
    this.setState(prevState => ({
      contactfive: !prevState.contactfive
    }));
  }
  contactsix() {
    this.setState(prevState => ({
      contactsix: !prevState.contactsix
    }));
  }
  contactseven() {
    this.setState(prevState => ({
      contactseven: !prevState.contactseven
    }));
  }
  contacteight() {
    this.setState(prevState => ({
      contacteight: !prevState.contacteight
    }));
  }
  contactnine() {
    this.setState(prevState => ({
      contactnine: !prevState.contactnine
    }));
  }
  render() {
    return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Contacts</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                  <BreadcrumbItem><a href="javascript:void(0);">Home</a></BreadcrumbItem>
                  <BreadcrumbItem active>Contacts</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        <Row>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-success">
                <h5 className="mb-70 text-white">Mellissa Doe </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactfirst} toggle={this.contactfirst}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/12.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">09</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">255</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">608</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-danger">
                <h5 className="mb-70 text-white">Alice William </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactsecond} toggle={this.contactsecond}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/01.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">12</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">646</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">4156</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-warning">
                <h5 className="mb-70 text-white">Paul Flavius </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactthird} toggle={this.contactthird}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/14.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">47</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">415</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">452</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-info">
                <h5 className="mb-70 text-white"> Felica Queen </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactfour} toggle={this.contactfour}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/04.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">47</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">475</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">4544</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-dark">
                <h5 className="mb-70 text-white">Michael Bean</h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactfive} toggle={this.contactfive}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/02.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">45</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">452</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">4562</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-primary">
                <h5 className="mb-70 text-white">Carol Stephens </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactsix} toggle={this.contactsix}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/06.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">56</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">592</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">5934</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>

          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-secondary">
                <h5 className="mb-70 text-white">Sara Lisbon </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactseven} toggle={this.contactseven}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/08.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">56</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">804</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">5656</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-warning">
                <h5 className="mb-70 text-white">Joana Williams </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contacteight} toggle={this.contacteight}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/10.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">78</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">6564</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">16345</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
          <Col lg={6} xl={4} className="mb-30">
            <Card className="card-statistics h-100">
              <div className="p-4 text-center bg-danger">
                <h5 className="mb-70 text-white">John Doe </h5>
                <div className="btn-group info-drop">
                  <Dropdown isOpen={this.state.contactnine} toggle={this.contactnine}>
                    <DropdownToggle className="ti-more" title='' id="dropdown-no-caret" />
                    <DropdownMenu>
                      <DropdownItem ><i className="text-primary ti-files" />Add Task</DropdownItem>
                      <DropdownItem ><i className="text-dark ti-pencil-alt" />Edit Profile</DropdownItem>
                      <DropdownItem ><i className="text-success ti-user" />View Profile</DropdownItem>
                      <DropdownItem ><i className="text-secondary ti-info" />Contact info</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>
                </div>
              </div>
              <CardBody className="text-center">
                <div className="avatar-top">
                  <img className="img-fluid w-25 rounded-circle " src="assets/images/team/11.jpg" />
                </div>
                <p className="mt-30">Fleming 196 Woodside Circle Mobile, FL 36602</p>
                <div className="social-icons color-icon mt-20">
                  <ul>
                    <li className="social-rss"><a href="javascript:void(0);"><i className="fa fa-rss" /></a></li>
                    <li className="social-facebook"><a href="javascript:void(0);"><i className="fa fa-facebook" /></a></li>
                    <li className="social-twitter"><a href="javascript:void(0);"><i className="fa fa-twitter" /></a></li>
                    <li className="social-github"><a href="javascript:void(0);"><i className="fa fa-github" /></a></li>
                    <li className="social-youtube"><a href="javascript:void(0);"><i className="fa fa-youtube" /></a></li>
                    <li className="social-instagram"><a href="javascript:void(0);"><i className="fa fa-instagram" /></a></li>
                  </ul>
                </div>
                <div className="divider mt-20" />
                <Row>
                  <Col sm={4} className="mt-30">
                    <b>Project</b>
                    <h4 className="text-success mt-10">09</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Messages </b>
                    <h4 className="text-danger mt-10">255</h4>
                  </Col>
                  <Col sm={4} className="mt-30">
                    <b>Views</b>
                    <h4 className="text-warning mt-10">608</h4>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col>
            <Card className="card-statistics mb-30">
              <CardBody className="text-center">
                <nav aria-label="Page navigation example">
                  <ul className="pagination justify-content-center">
                    <li className="page-item "><a className="page-link" href="javascript:void(0);">Previous</a></li>
                    <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">3</a></li>
                    <li className="page-item"><a className="page-link" href="javascript:void(0);">Next</a></li>
                  </ul>
                </nav>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    );
  }
}
export default Contacts;