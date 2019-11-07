import React from 'react';
import {Row, Col,Card,CardBody,Breadcrumb,BreadcrumbItem} from 'reactstrap';
    class Errors extends React.Component{
        render(){
            return(
            <div> 
                <Row className="page-title">
                    <Col md={6}>
                        <h4 className="mb-0">  Error </h4>
                    </Col>
                    <Col md={6} >
                        <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Error</BreadcrumbItem>
                            </Breadcrumb>
                      
                    
                    </Col>
                </Row>
                    <Row>
                        <Col xl={12}>
                            <Card className="card-statistics mb-30">
                            <CardBody>
                                <div className="position-relative">
                                    <div className="error">
                                    <h1>404</h1>
                                    <h2>error</h2>
                                    </div>
                                </div>  
                                <img className="img-fluid error-image" src="assets/images/error.png"/>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>   
                
                </div> 

            );
        }
    }
    export default Errors;