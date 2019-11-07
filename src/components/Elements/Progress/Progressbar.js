import React from 'react';
import { Row, Col,Progress,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem} from 'reactstrap';

class Progressbar extends React.Component{
    render(){
        return(
            <div>
                  <div className="page-title">
                    <Row>
                      <Col sm={6}>
                        <h4 className="mb-0"> Progress </h4>
                      </Col>
                      <Col sm={6}>
                            <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem active>Progress </BreadcrumbItem>
                              </Breadcrumb>
                      </Col>
                    </Row>
                  </div>
                  <Row>   
                    <Col md={6}>
                      <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Basic Progress</CardTitle>
                          <div className="text-center">0%</div>
                            <Progress className="mb-10" />
                            <div className="text-center">25%</div>
                            <Progress value={25} className="mb-10" />
                            <div className="text-center">50%</div>
                            <Progress value={50} className="mb-10" />
                            <div className="text-center">75%</div>
                            <Progress value={75} className="mb-10" />
                            <div className="text-center">100%</div>
                            <Progress value={100} className="mb-10" />
                            <div className="text-center">Multiple bars</div>
                            <Progress multi>
                              <Progress bar value="15" />
                              <Progress bar color="success" value="30" />
                              <Progress bar color="info" value="25" />
                              <Progress bar color="warning" value="20" />
                              <Progress bar color="danger" value="5" />
                            </Progress>             
                        </CardBody>
                      </Card>
                      <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Color Variants</CardTitle>
                            <Progress value={2 * 5} /><br/>
                            <Progress color="success" value="25" /><br/>
                            <Progress color="info" value={50} /><br/>
                            <Progress color="warning" value={75} /><br/>
                            <Progress color="danger" value="100" />
                        </CardBody>
                      </Card>
                      <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Labels </CardTitle>
                          <Progress value="25">25%</Progress><br/>
                          <Progress value={50}>1/2</Progress><br/>
                          <Progress value={75}>You're almost there!</Progress><br/>
                          <Progress color="success" value="100">You did it!</Progress><br/>
                          <Progress multi><br/>
                            <Progress bar value="15">Meh</Progress>
                            <Progress bar color="success" value="30">Wow!</Progress>
                            <Progress bar color="info" value="25">Cool</Progress>
                            <Progress bar color="warning" value="20">20%</Progress>
                            <Progress bar color="danger" value="5">!!</Progress>
                          </Progress>
                        </CardBody>
                      </Card>
                      <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Striped </CardTitle>
                          <Progress striped value={2 * 5} /><br/>
                          <Progress striped color="success" value="25" /><br/>
                          <Progress striped color="info" value={50} /><br/>
                          <Progress striped color="warning" value={75} /><br/>
                          <Progress striped color="danger" value="100" /><br/>
                          <Progress multi>
                            <Progress striped bar value="10" />
                            <Progress striped bar color="success" value="30" />
                            <Progress striped bar color="warning" value="20" />
                            <Progress striped bar color="danger" value="20" />
                          </Progress>
                        </CardBody>
                      </Card>
                    </Col>
                    <Col md={6}>
                    <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Animated</CardTitle>
                          <Progress animated value={2 * 5} /><br/>
                          <Progress animated color="success" value="25" /><br/>
                          <Progress animated color="info" value={50} /><br/>
                          <Progress animated color="warning" value={75} /><br/>
                          <Progress animated color="danger" value="100" /><br/>
                          <Progress multi>
                            <Progress animated bar value="10" />
                            <Progress animated bar color="success" value="30" />
                            <Progress animated bar color="warning" value="20" />
                            <Progress animated bar color="danger" value="20" />
                          </Progress>
                        </CardBody>
                      </Card>
                      <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Multiple bars / Stacked</CardTitle>
                            <div className="text-center">Plain</div>
                            <Progress multi className="mb-10">
                              <Progress bar value="15" />
                              <Progress bar color="success" value="20" />
                              <Progress bar color="info" value="25" />
                              <Progress bar color="warning" value="20" />
                              <Progress bar color="danger" value="15" />
                            </Progress>
                            <div className="text-center">With Labels</div>
                            <Progress multi className="mb-10">
                              <Progress bar value="15">Meh</Progress>
                              <Progress bar color="success" value="35">Wow!</Progress>
                              <Progress bar color="warning" value="25">25%</Progress>
                              <Progress bar color="danger" value="25">LOOK OUT!!</Progress>
                            </Progress>
                            <div className="text-center">Stripes and Animations</div>
                            <Progress multi>
                              <Progress bar striped value="15">Stripes</Progress>
                              <Progress bar animated color="success" value="30">Animated Stripes</Progress>
                              <Progress bar color="info" value="25">Plain</Progress>
                            </Progress>
                        </CardBody>
                      </Card>
                      <Card className="card-statistics mb-30"> 
                        <CardBody>
                          <CardTitle>Max value</CardTitle>
                          <div className="text-center">1 of 5</div>
                            <Progress value="1" max="5" className="mb-10" />
                            <div className="text-center">50 of 135</div>
                            <Progress value={50} max="135" className="mb-10" />
                            <div className="text-center">75 of 111</div>
                            <Progress value={75} max={111} className="mb-10" />
                            <div className="text-center">463 of 500</div>
                            <Progress value="463" max={500} className="mb-10" />

                            <div className="text-center">Various (40) of 55</div>
                            <Progress multi>
                              <Progress bar value="5" max={55}>5</Progress>
                              <Progress bar color="success" value="15" max={55}>15</Progress>
                              <Progress bar color="warning" value="10" max={55}>10</Progress>
                              <Progress bar color="danger" value="10" max={55}>10</Progress>
                            </Progress>
                        </CardBody>
                      </Card>
                    </Col>
                  </Row>
          </div>
        )
    }
}
export default Progressbar;
