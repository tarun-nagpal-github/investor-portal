import React, { Component } from 'react';
import { Row, Col, NavItem, Nav, Dropdown, Breadcrumb, BreadcrumbItem, DropdownItem, DropdownMenu, DropdownToggle, TabContent, TabPane } from 'reactstrap';
import ScrollArea from 'react-scrollbar';

import './Chat.css';
class Chat extends React.Component {

  constructor(props) {
    super(props);
    this.dropdownbarOpen = this.dropdownbarOpen.bind(this);
    this.toggle = this.toggle.bind(this);
    this.chatdropdown = this.chatdropdown.bind(this);
    this.state = {
      activeTab: '1',
      name: 'Anne Smith',
      chatdropdown: false,
      dropdownbarOpen: false,
    };
  }
  dropdownbarOpen() {
    this.setState(prevState => ({
        dropdownbarOpen: !prevState.dropdownbarOpen

    }));
}
  toggle(tab, name) {
    if (this.state.activeTab !== tab) {
      this.setState({
        activeTab: tab,
        name: name
      });
    }
  }
  chatdropdown() {
    this.setState(prevState => ({
      chatdropdown: !this.state.chatdropdown
    }));
  }
  render() {
    return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Chat</h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem><a href="javascript:void(0);">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Chat</BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        {/* main body */}
        <Row>
          <Col lg={12} className="mb-30">
            <div className="card card-statistics h-100">
              <div className="card-body">
                <TabContent id="left-tabs-example" >
                  <Row>
                    <Col xl={4} lg={4}>
                      <div className="widget-search mb-30">
                        <i className="fa fa-search" />
                        <input type="search" className="form-control" placeholder="Search...." />
                      </div>
                      <ScrollArea speed={1} className="max-h-600">
                        <Nav className="list-unstyled d-block">
                          <NavItem onClick={() => { this.toggle('1', 'Anne Smith'); }} className="pt-15">
                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/01.jpg" alt="" />
                                <i className="avatar-online bg-danger"></i>
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 ">Anne Smith  <small className="float-right">3:26 PM</small> </h6>
                                <div className="float-right text-muted">
                                  <i className="fa fa-volume-up pr-1"></i>
                                </div>
                                <p className="text-muted"><i className="fa fa-check pr-1"></i> Hello </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />
                          </NavItem>
                          <NavItem onClick={() => { this.toggle('2', 'Paul Flavius'); }} className="pt-15" >
                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/02.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 ">Paul Flavius <small className="pull-right">4:12</small> </h6>
                                <div className="pull-right">
                                  <span className="badge badge-pill badge-success">20</span>
                                </div>
                                <p className="text-muted"> <i className="fa fa-check pr-1" /> Okay </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />
                          </NavItem>
                          <NavItem onClick={() => { this.toggle('3', 'Anne Smith '); }} className="pt-15" >
                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/03.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 ">Anne Smith <small className="pull-right">3:36 PM</small> </h6>
                                <div className="pull-right">
                                  <i className="fa fa-volume-up pr-1" />
                                </div>
                                <p className="text-muted"> <i className="fa fa-check pr-1" /> Hello </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />
                          </NavItem>
                          <NavItem onClick={() => { this.toggle('4', 'Sara Lisbon'); }} className="pt-15" >
                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/04.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 ">Sara Lisbon <small className="pull-right">11:35 PM</small> </h6>
                                <div className="pull-right">
                                  <i className="fa fa-volume-up pr-1" />
                                </div>
                                <p className="text-muted"> <i className="fa fa-check pr-1" /> Call me?? </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />
                          </NavItem>
                          <NavItem onClick={() => { this.toggle('5', 'Sara Lisbon'); }} className="pt-15">
                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/05.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>

                              <div className="media-body">
                                <h6 className="mt-0 ">Sara Lisbon <small className="pull-right">11:45 PM</small> </h6>
                                <div className="pull-right">
                                  <span className="badge badge-pill badge-success">50</span>
                                </div>
                                <p className="text-muted"> <i className="fa fa-check pr-1" /> There?? </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />

                          </NavItem>
                          <NavItem onClick={() => { this.toggle('6', 'Sara Lisbon'); }} className="pt-15">


                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/06.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>

                              <div className="media-body">
                                <h6 className="mt-0 ">Sara Lisbon <small className="pull-right">11:45 PM</small> </h6>
                                <p className="text-muted"> <i className="fa fa-check pr-1" />  I like you </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />
                          </NavItem>
                          <NavItem onClick={() => { this.toggle('7', 'Paul Flavius'); }} className="pt-15">


                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/07.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 ">Paul Flavius <small className="pull-right">8:14 PM</small> </h6>
                                <div className="pull-right">
                                  <span className="badge badge-pill badge-success">05</span>
                                </div>
                                <p className="text-muted"> <i className="fa fa-check pr-1" /> Thanks?? </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />

                          </NavItem>
                          <NavItem onClick={() => { this.toggle('8', 'Sara Lisbon'); }} className="pt-15">
                            <div className="media px-2">
                              <div className="position-relative">
                                <img className="img-fluid mr-15 avatar-small" src="assets/images/team/08.jpg" alt="true" />
                                <i className="avatar-online bg-success" />
                              </div>
                              <div className="media-body">
                                <h6 className="mt-0 ">Sara Lisbon <small className="pull-right">9:05 PM</small> </h6>
                                <p className="text-muted"> <i className="fa fa-check pr-1" /> There?? </p>
                              </div>
                            </div>
                            <div className="divider mt-15" />
                          </NavItem>
                        </Nav>
                      </ScrollArea>
                    </Col>

                    <Col xl={8} lg={8}>
                      <div className="chats-topbar mb-30">
                        <div className="d-block d-md-flex justify-content-between">
                          <div className="d-block">
                            <h6 className="mb-0">{this.state.name}</h6>
                          </div>
                          <div className="d-block d-md-flex">
                            <a className="text-muted pr-40" href="javascript:void(0);"> <i className="fa fa-video-camera"></i></a>
                            <div className="btn-group info-drop">
                              <Dropdown isOpen={this.state.dropdownbarOpen} toggle={this.dropdownbarOpen}>
                                <DropdownToggle className="dropdown-toggle-split text-muted" id="dropdown-no-caret">
                                  <i className="ti-more" />
                                </DropdownToggle>
                                <DropdownMenu>
                                  <DropdownItem><i className="text-primary ti-pencil"></i> Rename</DropdownItem>
                                  <DropdownItem><i className="text-dark ti-announcement"></i> Mark as Unread</DropdownItem>
                                  <DropdownItem><i className="text-success ti-close"></i> Close</DropdownItem>
                                  <DropdownItem><i className="text-secondary ti-trash"></i> Delete</DropdownItem>
                                </DropdownMenu>
                              </Dropdown>
                            </div>
                          </div>
                        </div>
                      </div>
                      <ScrollArea speed={0.8} className="max-h-600">
                        <TabContent activeTab={this.state.activeTab}>
                          <TabPane tabId="1">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/01.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Hey John, I am looking for the best admin template.Could you please help me to find it out?It should be angular 5 bootstrap compatible.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/01.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/01.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/01.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="2">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/02.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>Second So, make the decision to move forward. Commit your decision to paper just to bring.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Having clarity of purpose and a clear picture of what you.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/02.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>You will sail along until you collide with an immovable object, after which you will sink</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/02.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/02.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="3">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/03.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Hey John, I am looking for the best admin template.Could you please help me to find it out?It should be angular 5 bootstrap compatible.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/03.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/03.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/03.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="4">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/04.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>Third So, make the decision to move forward. Commit your decision to paper just to bring.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Having clarity of purpose and a clear picture of what you.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/04.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>You will sail along until you collide with an immovable object, after which you will sink</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/04.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/04.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="5">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Hey John, I am looking for the best admin template.Could you please help me to find it out?It should be angular 5 bootstrap compatible.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/05.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="6">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/06.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>Third So, make the decision to move forward. Commit your decision to paper just to bring.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Having clarity of purpose and a clear picture of what you.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/06.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>You will sail along until you collide with an immovable object, after which you will sink</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/06.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/06.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="7">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/07.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Hey John, I am looking for the best admin template.Could you please help me to find it out?It should be angular 5 bootstrap compatible.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/07.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>How can we help? We are here for you!</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/07.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/07.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                          <TabPane tabId="8">
                            <div className="chats">
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/08.jpg" alt="true" />
                                </div>
                                <div className="chat-body p-3">
                                  <p>Third So, make the decision to move forward. Commit your decision to paper just to bring.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Having clarity of purpose and a clear picture of what you.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:15PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/08.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>You will sail along until you collide with an immovable object, after which you will sink</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>The sad thing is the majority of people have no clue.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>So how do we get clarity? Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:20PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/08.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity. When asked the question, responses will be superficial at best, and at worst.</p>
                                </div>
                              </div>
                              <div className="chat-wrapper chat-me clearfix">
                                <div className="chat-body p-3">
                                  <p>Simply by asking.</p>
                                </div>
                              </div>
                              <span className="time d-block mt-20px mb-20 text-center text-gray">3:30PM </span>
                              <div className="chat-wrapper clearfix">
                                <div className="chat-avatar">
                                  <img className="img-fluid avatar-small" src="assets/images/team/08.jpg" alt="true" />
                                </div>
                                <div className="chat-body bg-light p-3">
                                  <p>They have no clarity.</p>
                                </div>
                              </div>
                            </div>
                          </TabPane>
                        </TabContent>
                      </ScrollArea>
                      <div className="chats mt-30">
                        <div className="chat-wrapper mb-0 clearfix">
                          <div className="chat-input">
                            <div className="chat-input-icon">
                              <a className="text-muted" href="javascript:void(0);"><i className="fa fa-smile-o" /> </a>
                            </div>
                            <textarea className="form-control input-message scrollbar" placeholder="Type here...*" rows={2} name="message" defaultValue={""} />
                          </div>
                          <div className="chat-button">
                            <a href="javascript:void(0);"> <i className="ti-clip" /></a>
                          </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </TabContent>
              </div>
            </div>
          </Col>
        </Row>
      </div>

    )
  }
}
export default Chat;