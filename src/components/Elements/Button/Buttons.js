import React, { Component } from 'react';
import { Alert } from 'react-bootstrap';
import './Buttons.css';
import { Row, Col, Button, ButtonGroup, ButtonToolbar, ButtonDropdown, DropdownToggle, DropdownMenu, Card, CardBody, CardTitle, DropdownItem, Breadcrumb, BreadcrumbItem } from 'reactstrap';


class Buttons extends React.Component {

    constructor(props) {
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.toggle = this.toggle.bind(this);

        this.state = {
            isLoading: false,
            dropdownOpen: false
        };
    }
    toggle() {
        this.setState({
            dropdownOpen: !this.state.dropdownOpen
        });
    }
    handleClick() {
        this.setState({ isLoading: true });

        // This probably where you would have an `ajax` call
        setTimeout(() => {
            // Completed of async action, set loading state back
            this.setState({ isLoading: false });
        }, 2000);
    }
    render() {
        const { isLoading } = this.state;
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6} >
                            <h4 className="mb-0"> Button</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Button</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col md={6}>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Button</CardTitle>
                                <Row>
                                    <Col md={12}>
                                        <Button className="button" size="sm">small</Button>
                                        <Button className="button" size="md" >medium</Button>
                                        <Button className="button" size="lg" >large</Button>
                                        <Button className="button" size="xl" >Extra large</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Black Button</CardTitle>
                                <Row>
                                    <Col md={12}>
                                        <Button className="button black" size="xl">x small</Button>
                                        <Button className="button black" size="sm" >small</Button>
                                        <Button className="button black" >default</Button>
                                        <Button className="button black" size="md" >medium</Button>
                                        <Button className="button black" size="lg" >large button</Button>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Gray Button</CardTitle>
                                <Row>
                                    <Col md={12}>
                                        <Button className="button gray" size="xsmall">x small</Button>
                                        <Button className="button gray" size="small" >small</Button>
                                        <Button className="button gray" >default</Button>
                                        <Button className="button gray" size="medium" >medium</Button>
                                        <Button className="button gray" size="large" >large button</Button>
                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template border Button</CardTitle>
                                <Row>
                                    <Col md={12}>
                                        <Button className="button button-border" size="xsmall">x small</Button>
                                        <Button className="button button-border" size="small" >small</Button>
                                        <Button className="button button-border" >default</Button>
                                        <Button className="button button-border" size="medium" >medium</Button>
                                        <Button className="button button-border" size="large" >large button</Button>

                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template border gray Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button button-border gray" size="xsmall">x small</Button>
                                        <Button className="button button-border gray" size="small" >small</Button>
                                        <Button className="button button-border gray" >default</Button>
                                        <Button className="button button-border gray" size="medium" >medium</Button>
                                        <Button className="button button-border gray" size="large" >large button</Button>

                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template black border Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button button-border black" size="xsmall">x small</Button>
                                        <Button className="button button-border black" size="small" >small</Button>
                                        <Button className="button button-border black" >default</Button>
                                        <Button className="button button-border black" size="medium" >medium</Button>
                                        <Button className="button button-border black" size="large" >large button</Button>

                                    </Col>
                                </Row>


                            </CardBody>
                        </Card>
                        <Card className=" card-statistics theme-bg mb-30">
                            <CardBody>
                                <CardTitle className="border-white text-white">Template white Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button button-border white" size="xsmall">x small</Button>
                                        <Button className="button button-border white" size="small" >small</Button>
                                        <Button className="button button-border white" >default</Button>
                                        <Button className="button button-border white" size="medium" >medium</Button>
                                        <Button className="button button-border white" size="large" >large button</Button>

                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Border Gray Icon Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button button-border gray icon" size="xsmall">x small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border gray icon" size="small" >small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border gray icon" >default<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border gray icon" size="medium" >medium<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border gray icon" size="large" >large button<i className="fa fa-long-arrow-right"></i></Button>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Border Black Icon Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button button-border black icon" size="xsmall">x small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border black icon" size="small" >small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border black icon" >default<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border black icon" size="medium" >medium<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border black icon" size="large" >large button<i className="fa fa-long-arrow-right"></i></Button>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Border Icon Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button button-border  icon" size="xsmall">x small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border  icon" size="small" >small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border  icon" >default<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border  icon" size="medium" >medium<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button button-border  icon" size="large" >large button<i className="fa fa-long-arrow-right"></i></Button>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Icon Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button  icon" size="xsmall">x small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button icon" size="small" >small<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button   icon" >default<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button  icon" size="medium" >medium<i className="fa fa-long-arrow-right"></i></Button>
                                        <Button className="button   icon" size="large" >large button<i className="fa fa-long-arrow-right"></i></Button>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Black Icon Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button black icon" size="xsmall">x small <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button black icon" size="small" >small <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button black  icon" >default <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button black  icon" size="medium" >medium <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button  black icon" size="large" >large button <i className="fa fa-long-arrow-right" /></Button>

                                    </Col>
                                </Row>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col md={6}>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Gray Icon Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <Button className="button gray icon" size="xsmall">x small <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button gray icon" size="small" >small <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button gray  icon" >default <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button gray  icon" size="medium" >medium <i className="fa fa-long-arrow-right" /></Button>
                                        <Button className="button  gray icon" size="large" >large button <i className="fa fa-long-arrow-right" /></Button>

                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Big Button</CardTitle>
                                <button className="button big-button mb-20">
                                    IP big button<br /><span> Lorem ipsum dolor sit.</span>
                                </button>
                                <button className="button  gray big-button mb-20">
                                    IP big button<br /><span> Lorem ipsum dolor sit.</span>
                                </button>
                                <button className="button black big-button mb-20">
                                    IP big button<br /><span> Lorem ipsum dolor sit.</span>
                                </button>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Btn Block Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <button className="button btn-block" size="xsmall">btn block</button>
                                        <button className="button black btn-block" size="xsmall">btn block</button>
                                        <button className="button gray btn-block" size="xsmall">btn block</button>
                                        <button className="button  button-border btn-block" size="xsmall">btn block</button>
                                        <button className="button button-border black btn-block" size="xsmall">btn block</button>
                                        <button className="button   button-border gray btn-block" size="xsmall">btn block</button>
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Icon Color Button</CardTitle>
                                <Row>
                                    <Col md={12}>

                                        <button className="button icon-color">button icon <i className="fa fa-angle-right" /></button>
                                        <button className="button icon-color">button icon <i className="fa fa-angle-right" /></button>
                                        <button className="button icon-color">button icon <i className="fa fa-angle-right" /></button>
                                        <button className="button icon-color">button icon <i className="fa fa-angle-right" /></button>
                                        <button className="button icon-color">button icon <i className="fa fa-angle-right" /></button>

                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Template Bootstrap Button</CardTitle>
                                <Row>
                                    <Col md={12}>
                                        { /* START panel */}
                                        <Button color="primary">primary</Button>{' '}
                                        <Button color="secondary">secondary</Button>{' '}
                                        <Button color="success">success</Button>{' '}
                                        <Button color="info">info</Button>{' '}
                                        <Button color="warning">warning</Button>{' '}
                                        <Button color="danger">danger</Button>{' '}
                                        <Button color="link">link</Button>


                                        { /* END panel */}
                                    </Col>
                                </Row>

                            </CardBody>
                        </Card>

                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Loader Button</CardTitle>

                                <Button
                                    color="primary"
                                    disabled={isLoading}
                                    onClick={!isLoading ? this.handleClick : null}
                                >
                                    {isLoading ? 'Loading...' : 'Loading state'}
                                </Button>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Button toolbar</CardTitle>
                                <ButtonToolbar>
                                    <ButtonGroup>
                                        <Button>1</Button>
                                        <Button>2</Button>
                                        <Button>3</Button>
                                        <Button>4</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button>5</Button>
                                        <Button>6</Button>
                                        <Button>7</Button>
                                    </ButtonGroup>
                                    <ButtonGroup>
                                        <Button>8</Button>
                                    </ButtonGroup>
                                </ButtonToolbar>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Disabled</CardTitle>
                                <Button size="sm" disabled>
                                    Small Disabled Button
                            </Button>{' '}
                                <Button color="primary" size="lg" disabled>
                                    Large Disabled Button
                            </Button>


                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Basic Example</CardTitle>
                                <ButtonGroup>
                                    <Button>Left</Button>
                                    <Button>Middle</Button>
                                    <Button>Right</Button>
                                </ButtonGroup>

                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody>
                                <CardTitle>Nesting</CardTitle>
                                <ButtonGroup>
                                    <Button>1</Button>
                                    <Button>2</Button>
                                    <ButtonDropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                        <DropdownToggle caret>
                                            Dropdown
                                </DropdownToggle>
                                        <DropdownMenu>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                            <DropdownItem>Dropdown Link</DropdownItem>
                                        </DropdownMenu>
                                    </ButtonDropdown>
                                </ButtonGroup>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}
export default Buttons;