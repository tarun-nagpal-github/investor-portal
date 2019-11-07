import React from 'react';
import { Row, Col, ListGroup, ListGroupItem, Card, CardBody, CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';

class Lists extends React.Component {
    render() {
        return (

            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Lists </h4>
                        </Col>
                        <Col sm={6}>
                           <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                         <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Lists </BreadcrumbItem>
                            </Breadcrumb>
                          
                        </Col>
                    </Row>

                </div>
                <Row>
                    <Col md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <ListGroup className="list-unstyled" style={{ border: '0 none' }} >
                                <CardBody>
                                    <CardTitle>Messages</CardTitle>
                                    <ListGroupItem className="mb-30 p-0" style={{ border: 'none' }}>
                                        <div className="media">
                                            <div className="position-relative">
                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/01.jpg" alt="img-fluid" />
                                                <i className="avatar-online bg-success" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0">Martin smith </h6>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="mb-30 p-0" style={{ border: 'none' }}>
                                        <div className="media">
                                            <div className="position-relative">
                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/02.jpg" alt="img-fluid" />
                                                <i className="avatar-online bg-success" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0"> Paul Flavius</h6>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="mb-30 p-0" style={{ border: 'none' }}>
                                        <div className="media">
                                            <div className="position-relative">
                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="img-fluid" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0">Anne Smith </h6>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="mb-30 p-0" style={{ border: 'none' }}>
                                        <div className="media">
                                            <div className="position-relative">
                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="img-fluid" />
                                                <i className="avatar-online bg-success" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0">Sara Lisbon </h6>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                    <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                        <div className="media">
                                            <div className="position-relative">
                                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="img-fluid" />
                                            </div>
                                            <div className="media-body">
                                                <h6 className="mt-0"> Paul Flavius </h6>
                                            </div>
                                        </div>
                                    </ListGroupItem>
                                </CardBody>
                            </ListGroup>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>To Do List </CardTitle>
                                <div className="scrollbar" tabIndex={2} style={{ overflowY: 'hidden', outline: 'none' }}>
                                    <ListGroup className="list-unstyled to-do">
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="one" id="one" />
                                                <label htmlFor="one"> Prepare Docs For today's Presentation</label>
                                            </div>
                                        </ListGroupItem >
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="two" id="two" />
                                                <label htmlFor="two">Financial Report Discussion with team <span className="badge badge-success">Today</span></label>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="three" id="three" />
                                                <label htmlFor="three"> 5 new tickets support</label>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="four" id="four" />
                                                <label htmlFor="four"> Weekly project plan  <span className="badge badge-warning">Saturday</span> </label>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="five" id="five" />
                                                <label htmlFor="five"> Revenue generation and distribution </label>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="sevan" id="sevan" />
                                                <label htmlFor="sevan"> 5 new tickets support <span className="badge badge-success">Today</span></label>
                                            </div>
                                        </ListGroupItem>
                                        <ListGroupItem className="p-0" style={{ border: 'none' }}>
                                            <div className="remember-checkbox mb-20">
                                                <input type="checkbox" className="form-control" name="eight" id="eight" />
                                                <label htmlFor="eight"> New support forum developing</label>
                                            </div>
                                        </ListGroupItem>
                                    </ListGroup>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Font Awesome List Icon</CardTitle>
                                <Row>
                                    <Col sm={6}>
                                        <ListGroup className="list list-unstyled mb-30">
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-group text-primary" /> Easy to use great Fusion Builders </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-envelope-open text-info" /> We offer beautiful free support </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-edit text-danger" /> Awesome sliders give you amazing </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-exclamation-triangle text-warning" /> We offer free support for months </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-globe text-success" /> Wonderful Icon Fonts </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <ListGroup className="list list-unstyled mb-30">
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-heartbeat text-primary" /> Change Oil and Filter</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-question-circle-o text-info" /> Brake Pads Replacement</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-life-bouy text-danger" /> Timing Belt Replacement </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-magic text-warning" /> Pre-purchase Car Inspection</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-magnet text-success" /> Starter Replacement </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <ListGroup className="list list list-unstyled mb-30">
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-map-pin text-primary" /> Change Oil and Filter</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-mortar-board text-info" /> Brake Pads Replacement</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-puzzle-piece text-danger" /> Timing Belt Replacement </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-paper-plane text-warning" /> Pre-purchase Car Inspection</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-recycle text-success" /> Starter Replacement </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <ListGroup className="list list-unstyled mb-30">
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-reorder text-primary" /> Change Oil and Filter</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-share- text-info" /> Brake Pads Replacement</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-shield text-danger" /> Timing Belt Replacement </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-signal text-warning" /> Pre-purchase Car Inspection</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-40" style={{ border: 'none' }}> <i className="fa fa-tachometer text-success" /> Starter Replacement </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-30">
                        <Card className=" card-statistics h-100">
                            <CardBody>
                                <CardTitle>List Icon With Class</CardTitle>
                                <Row>
                                    <Col sm={6} className="mb-4">
                                        <ListGroup className="list list-arrow">
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Change Oil and Filter</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Brake Pads Replacement</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Timing Belt Replacement </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Pre-purchase Car Inspection</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Starter Replacement </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6} className="mb-4">

                                        <ListGroup className="list list-hand">
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Change Oil and Filter</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Brake Pads Replacement</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Timing Belt Replacement </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Pre-purchase Car Inspection</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Starter Replacement </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <ListGroup className="list list-edit">
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Change Oil and Filter</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Brake Pads Replacement</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Timing Belt Replacement </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Pre-purchase Car Inspection</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Starter Replacement </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                    <Col sm={6}>
                                        <ListGroup className="list list-mark">
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Award-winning design</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Super Fast Customer support </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Email Design </ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Easy to Customize pages</ListGroupItem>
                                            <ListGroupItem className="p-0 pl-20" style={{ border: 'none' }}> Powerful Performance </ListGroupItem>
                                        </ListGroup>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Lists;