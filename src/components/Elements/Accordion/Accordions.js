import React, { Component } from 'react';
import './Accordions.css';
import Collapsible from 'react-collapsible';
import { Row, Col, CardTitle, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Accordion, AccordionItem, AccordionItemTitle, AccordionItemBody } from 'react-accessible-accordion';

class Accordions extends React.Component {
    constructor(props) {
        super(props);
        this.OpenAccordion = this.OpenAccordion.bind(this);
    }
    OpenAccordion(sectionName, Wrapdiv) {
        var CurrentCls = document.getElementById(sectionName).getAttribute("class");
        if (CurrentCls == "acd-des") {
            document.getElementById(sectionName).setAttribute("class", "acd-des show");
            document.getElementById(Wrapdiv).setAttribute("class", "acd-group acd-active");
        }
        else {
            document.getElementById(sectionName).setAttribute("class", "acd-des");
            document.getElementById(Wrapdiv).setAttribute("class", "acd-group");
        }
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Accordion</h4>
                        </Col>
                        <Col sm={6} >
                            <Breadcrumb className="float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Accordion</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col xl={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Accordion Simple</CardTitle>
                                <Accordion className="gray plus-icon round">
                                    <AccordionItem>
                                        <AccordionItemTitle >
                                            <h6 className="u-position-relative"><strong>Nesciunt incidunt accusamus necessi</strong></h6>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemTitle>
                                            <h6 className="u-position-relative"><strong>Consectetur, adipisci</strong></h6>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemTitle>
                                            <h6 className="u-position-relative"><strong>Tempora incidunt</strong></h6>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                </Accordion>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Accordion Arrow</CardTitle>
                                <Accordion>
                                    <AccordionItem>
                                        <AccordionItemTitle >
                                            <h6 className="u-position-relative"><strong>Nesciunt incidunt accusamus necessi</strong>
                                                <div className="accordion__arrow" role="presentation"></div></h6>
                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemTitle>
                                            <h6 className="u-position-relative"><strong>Consectetur, adipisci</strong>
                                                <div className="accordion__arrow" role="presentation"></div></h6>


                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                    <AccordionItem>
                                        <AccordionItemTitle>
                                            <h6 className="u-position-relative "><strong>Tempora incidunt</strong>
                                                <div className="accordion__arrow pull-right" role="presentation"></div></h6>


                                        </AccordionItemTitle>
                                        <AccordionItemBody>
                                            <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                        </AccordionItemBody>
                                    </AccordionItem>
                                </Accordion>

                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>
        );
    }
}
export default Accordions;