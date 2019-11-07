import React, { Component } from 'react';
import './Alerts.css';
import { Row, Col, Alert, Card, CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';


class Alerts extends React.Component {

  constructor(props) {

    super(props);
    this.onDismiss1 = this.onDismiss1.bind(this);
    this.onDismiss2 = this.onDismiss2.bind(this);
    this.onDismiss3 = this.onDismiss3.bind(this);
    this.onDismiss4 = this.onDismiss4.bind(this);
    this.onDismiss5 = this.onDismiss5.bind(this);
    this.onDismiss6 = this.onDismiss6.bind(this);
    this.onDismiss7 = this.onDismiss7.bind(this);
    this.onDismiss8 = this.onDismiss8.bind(this);
    this.handleDismiss = this.handleDismiss.bind(this);
    this.handleShow = this.handleShow.bind(this);
    this.state = {
      show: true,
      visible1: true,
      visible2: true,
      visible3: true,
      visible4: true,
      visible5: true,
      visible6: true,
      visible7: true,
      visible8: true

    };
  }
  handleDismiss() {
    //  console.log(e.target.name);
    this.setState({ show: false });
  }

  onDismiss1() {
    this.setState({ visible1: false });
  }
  onDismiss2() {
    this.setState({ visible2: false });
  }
  onDismiss3() {
    this.setState({ visible3: false });
  }
  onDismiss4() {
    this.setState({ visible4: false });
  }
  onDismiss5() {
    this.setState({ visible5: false });
  }
  onDismiss6() {
    this.setState({ visible6: false });
  }
  onDismiss7() {
    this.setState({ visible7: false });
  }
  onDismiss8() {
    this.setState({ visible8: false });
  }

  handleShow() {
    this.setState({ show: true });
  }
  render() {

    return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Alerts</h4>
            </Col>
            <Col sm={6}>
                 <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Alerts</BreadcrumbItem>
                </Breadcrumb>
            </Col>
          </Row>
        </div>
        {/* main body */}
        <Row>
          <Col md={6} className="mb-30">
            <Card className="card-statistics h-100">
              <CardBody>
                <CardTitle>Alert</CardTitle>
                <Alert color="primary">
                  This is a primary alert — check it out!
                    </Alert>
                <Alert color="secondary">
                  This is a secondary alert — check it out!
                    </Alert>
                <Alert color="success">
                  This is a success alert — check it out!
                    </Alert>
                <Alert color="danger">
                  This is a danger alert — check it out!
                    </Alert>
                <Alert color="warning">
                  This is a warning alert — check it out!
                    </Alert>
                <Alert color="info">
                  This is a info alert — check it out!
                    </Alert>
                <Alert color="light">
                  This is a light alert — check it out!
                    </Alert>
                <Alert color="dark">
                  This is a dark alert — check it out!
                    </Alert>
              </CardBody>
            </Card>
          </Col>
          <Col md={6} className="mb-30">
            <Card className="card-statistics h-100">
              <CardBody>
                <CardTitle>Link color</CardTitle>
                <Alert color="primary">
                  This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="secondary">
                  This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="success">
                  This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="danger">
                  This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="warning">
                  This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="info">
                  This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="light">
                  This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="dark">
                  This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
              </CardBody>
            </Card>
          </Col>
        </Row>

        <Row>

          <Col md={6} className="mb-30">
            <Card className="card-statistics h-100">
              <CardBody>
                <CardTitle>Dismissing Alert</CardTitle>
                <Alert color="primary" isOpen={this.state.visible1} toggle={this.onDismiss1} >
                  This is a primary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="secondary" isOpen={this.state.visible2} toggle={this.onDismiss2}>
                  This is a secondary alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="success" isOpen={this.state.visible3} toggle={this.onDismiss3}>
                  This is a success alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="danger" isOpen={this.state.visible4} toggle={this.onDismiss4}>
                  This is a danger alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="warning" isOpen={this.state.visible5} toggle={this.onDismiss5}>
                  This is a warning alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="info" isOpen={this.state.visible6} toggle={this.onDismiss6}>
                  This is a info alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="light" isOpen={this.state.visible7} toggle={this.onDismiss7}>
                  This is a light alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
                <Alert color="dark" isOpen={this.state.visible8} toggle={this.onDismiss8}>
                  This is a dark alert with <a href="#" className="alert-link">an example link</a>. Give it a click if you like.
                    </Alert>
              </CardBody>
            </Card>
          </Col>

          <Col md={6} className="mb-30">
            <Card className="card-statistics h-100">
              <CardBody>
                <CardTitle>Additional content</CardTitle>
                <Alert color="primary">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>

                </Alert>
                <Alert color="success">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>

                </Alert>
                <Alert color="info">
                  <h4 className="alert-heading">Well done!</h4>
                  <p>Aww yeah, you successfully read this important alert message. This example text is going to run a bit longer so that you can see how spacing within an alert works with this kind of content.</p>
                  <hr />
                  <p className="mb-0">Whenever you need to, be sure to use margin utilities to keep things nice and tidy.</p>
                </Alert>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
export default Alerts;