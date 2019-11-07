import React, { Component } from 'react';
import './faq.css';
//import {Tab,Tabs} from 'react-bootstrap';
import { Row, Col, Card, CardBody, CardTitle, TabContent, TabPane, Breadcrumb, BreadcrumbItem, Nav, NavItem, NavLink } from 'reactstrap';
import {
    Accordion,
    AccordionItem,
    AccordionItemTitle,
    AccordionItemBody,
} from 'react-accessible-accordion';
import classnames from 'classnames';
//import { CardTitle } from 'material-ui';

class Faq extends React.Component {
    constructor(props) {
        super(props);
        this.OpenAccordion = this.OpenAccordion.bind(this);
        this.faqtab = this.faqtab.bind(this);
        this.state = {
            faqtab: '1'
        }
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

    faqtab(tab) {
        if (this.state.faqtab !== tab) {
            this.setState({
                faqtab: tab
            });
        }
    }
    render() {
        return (
            <div>
                <Row className="page-title">
                    <Col sm={6}>
                        <h4 className="mb-0"> Faqs</h4>
                    </Col>
                    <Col md={6} >
                        <Breadcrumb className="float-left float-sm-right">
                            <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                            <BreadcrumbItem active>Faqs</BreadcrumbItem>
                        </Breadcrumb>
                    </Col>
                </Row>
                <Row>
                    <Col xl={12} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Faqs</CardTitle>
                                <Row>
                                    <Col lg={12} md={12}>
                                        <div className="tab nav-center">
                                            <Nav tabs>
                                                <NavItem ><NavLink className={classnames({ active: this.state.faqtab === '1' })} onClick={() => { this.faqtab('1'); }}>Research</NavLink></NavItem>
                                                <NavItem ><NavLink className={classnames({ active: this.state.faqtab === '2' })} onClick={() => { this.faqtab('2'); }}> Design</NavLink></NavItem>
                                                <NavItem ><NavLink className={classnames({ active: this.state.faqtab === '3' })} onClick={() => { this.faqtab('3'); }}>Develop</NavLink></NavItem>
                                                <NavItem ><NavLink className={classnames({ active: this.state.faqtab === '4' })} onClick={() => { this.faqtab('4'); }}>Result</NavLink></NavItem>
                                                <NavItem ><NavLink className={classnames({ active: this.state.faqtab === '5' })} onClick={() => { this.faqtab('5'); }}>Html5</NavLink></NavItem>
                                            </Nav>
                                            <TabContent activeTab={this.state.faqtab} >
                                                <TabPane tabId="1">
                                                    <Accordion>
                                                        <AccordionItem>
                                                            <AccordionItemTitle >
                                                                <h6 className="u-position-relative"><strong>01. Tincidunt auctor a ornare odio?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>02. Consequat auctor eu in elit Class?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>03. Vitae erat consequat auctor eu in elit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>04. Morbi accumsan ipsum velit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </TabPane>
                                                <TabPane tabId="2">
                                                    <Accordion>

                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>01.Consequat auctor eu in elit Class?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle >
                                                                <h6 className="u-position-relative"><strong>02. Tincidunt auctor a ornare odio?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>03. Vitae erat consequat auctor eu in elit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>04. Morbi accumsan ipsum velit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </TabPane>
                                                <TabPane tabId="3">
                                                    <Accordion>
                                                        <AccordionItem>
                                                            <AccordionItemTitle >
                                                                <h6 className="u-position-relative"><strong>01.Vitae erat consequat auctor eu in elit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>02. Consequat auctor eu in elit Class?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>03. Tincidunt auctor a ornare odio?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>04. Morbi accumsan ipsum velit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </TabPane>
                                                <TabPane tabId="4">
                                                    <Accordion>
                                                        <AccordionItem>
                                                            <AccordionItemTitle >
                                                                <h6 className="u-position-relative"><strong>01. Morbi accumsan ipsum velit? </strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>02. Consequat auctor eu in elit Class?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>03. Vitae erat consequat auctor eu in elit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>04.Tincidunt auctor a ornare odio?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </TabPane>
                                                <TabPane tabId="5">
                                                    <Accordion>
                                                        <AccordionItem>
                                                            <AccordionItemTitle >
                                                                <h6 className="u-position-relative"><strong>01. Tincidunt auctor a ornare odio?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>02. Consequat auctor eu in elit Class?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>03. Vitae erat consequat auctor eu in elit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                        <AccordionItem>
                                                            <AccordionItemTitle>
                                                                <h6 className="u-position-relative"><strong>04. Morbi accumsan ipsum velit?</strong>
                                                                    <div className="accordion__arrow" role="presentation"></div></h6>
                                                            </AccordionItemTitle>
                                                            <AccordionItemBody>
                                                                <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
                                                                <ul className="list list-mark mt-20">
                                                                    <li>Proin gravida nibh vel velit auctor aliquet. Aenean sollicitudin, lorem quis bibendum</li>
                                                                    <li>Auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. </li>
                                                                    <li>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit.</li>
                                                                    <li>Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non  mauris vitae erat consequat auctor eu in elit Class.</li>
                                                                </ul>
                                                            </AccordionItemBody>
                                                        </AccordionItem>
                                                    </Accordion>
                                                </TabPane>
                                            </TabContent>
                                        </div>
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
export default Faq;