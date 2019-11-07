import React from 'react';
import Rating from 'react-rating';
import { Row, Col,Card,CardBody,Breadcrumb,BreadcrumbItem } from 'reactstrap';
class Ratings extends React.Component {
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Ratings</h4>
                        </Col>
                        <Col sm={6}>
                                 <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                            <BreadcrumbItem active>Ratings </BreadcrumbItem>
                                     </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Default </h5>
                                <Rating />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Readonly rating </h5>
                                <Rating initialRating={3} readonly />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Readonly fractional rating </h5>
                                <Rating initialRating={2.5} readonly />
                            </CardBody>
                        </Card>
                    </Col>
                   
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Fontawesome Five Star rating </h5>
                                <Rating emptySymbol="fa fa-star-o fa-2x" fullSymbol="fa fa-star fa-2x" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Alert when rate changes</h5>
                                <Rating onChange={(rate) => alert("Given Rate Is :" + rate)} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Mixed symbols</h5>
                                <Rating emptySymbol={['fa fa-star-o fa-2x', 'fa fa-heart-o fa-2x']} fullSymbol={['fa fa-star fa-2x', 'fa fa-heart fa-2x']} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> Custom each symbol</h5>
                                <Rating stop={4} emptySymbol="fa fa-battery-empty fa-2x" fullSymbol={['fa fa-battery-1 fa-2x', 'fa fa-battery-2 fa-2x', 'fa fa-battery-3 fa-2x', 'fa fa-battery-4 fa-2x']} />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={4} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <h5 className="card-title"> 1 to 10 rating</h5>
                                <Rating stop={10} />
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Ratings;