import React,{Component} from 'react';
import './Dropdowns.css';
import { Row,Col,Dropdown, DropdownToggle, DropdownMenu, DropdownItem,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';

class Dropdowns extends React.Component{
    constructor()
    {
        super();  
        this.nocaretdemo = this.nocaretdemo.bind(this);
        this.caretdemo = this.caretdemo.bind(this);
        this.dropdownlg = this.dropdownlg.bind(this);
        this.dropdownsm = this.dropdownsm.bind(this);
        this.dropdownmd = this.dropdownmd.bind(this);

        this.dropdownleft = this.dropdownleft.bind(this);
        this.dropdownright = this.dropdownright.bind(this);
        this.dropdownup = this.dropdownup.bind(this);
        this.dropdowndone = this.dropdowndone.bind(this);

        this.state = {
          nocaretdemo: false,
          caretdemo:false,
          dropdownlg:false,
          dropdownsm:false,
          dropdownmd:false,
          dropdownleft:false,
          dropdownright:false,
          dropdownup:false,
          dropdowndone:false
        };
    }

  
      
    nocaretdemo() {
        this.setState(prevState => ({
          nocaretdemo: !prevState.nocaretdemo
        }));
      }
           
    caretdemo() {
      this.setState(prevState => ({
        caretdemo: !prevState.caretdemo
      }));
    }
      dropdownlg() {
        this.setState(prevState => ({
          dropdownlg: !prevState.dropdownlg
        }));
      }
      dropdownsm() {
        this.setState(prevState => ({
          dropdownsm: !prevState.dropdownsm
        }));
      }
      dropdownmd() {
        this.setState(prevState => ({
          dropdownmd: !prevState.dropdownmd
        }));
      }
     
      dropdownleft() {
        this.setState(prevState => ({
          dropdownleft: !prevState.dropdownleft
        }));
      }
     
      dropdownright() {
        this.setState(prevState => ({
          dropdownright: !prevState.dropdownright
        }));
      }
     
      dropdownup() {
        this.setState(prevState => ({
          dropdownup: !prevState.dropdownup
        }));
      }
     
      dropdowndone() {
        this.setState(prevState => ({
          dropdowndone: !prevState.dropdowndone
        }));
      }
     


    render(){ 
        return(
            <div>
                 <div className="page-title">
                    <Row>
                        <Col sm={6}>
                          <h4 className="mb-0"> Dropdown </h4>
                        </Col>
                        <Col sm={6}>
                           <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                        <BreadcrumbItem active>Dropdown </BreadcrumbItem>
                            </Breadcrumb>
                      </Col>
                  </Row>
              </div>
            {/* main body */} 
            
            <Row>
              <Col md={6}>
                  <Card className="card-statistics mb-30"> 
                    <CardBody>
                      <CardTitle>No caret  dropdowns</CardTitle>
                      <Dropdown isOpen={this.state.nocaretdemo} toggle={this.nocaretdemo}>
                        <DropdownToggle  color="success">
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem >Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </CardBody>
                  </Card>
          
                  <Card className="card-statistics mb-30"> 
                    <CardBody>
                      <CardTitle>caret  dropdowns</CardTitle>
                      <Dropdown isOpen={this.state.caretdemo} toggle={this.caretdemo}>
                        <DropdownToggle  caret color="success">
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem >Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                    </CardBody>
                  </Card>
              </Col>
              <Col md={6}> 
                  <Card className="card-statistics mb-30"> 
                      <CardBody>
                        <CardTitle>Sizing</CardTitle>
                        <div className="btn-toolbar" role="toolbar">
                        <Dropdown group isOpen={this.state.dropdownlg} className="mb-1" size="lg" toggle={this.dropdownlg}>
                        <DropdownToggle caret  color="primary">
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu>                          
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem >Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>&nbsp;&nbsp;
                      <Dropdown isOpen={this.state.dropdownmd} toggle={this.dropdownmd}>
                        <DropdownToggle caret  color="success">
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu >
                          
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem >Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>&nbsp;&nbsp;
                      
                        <Dropdown isOpen={this.state.dropdownsm} size="xl" toggle={this.dropdownsm}>
                        <DropdownToggle caret  color="info">
                          Dropdown
                        </DropdownToggle>
                        <DropdownMenu > 
                          
                          <DropdownItem>Action</DropdownItem>
                          <DropdownItem>Another Action</DropdownItem>
                          <DropdownItem >Something else here</DropdownItem>
                          <DropdownItem divider />
                          <DropdownItem>Separated link</DropdownItem>
                        </DropdownMenu>
                      </Dropdown>
                        </div>
                      </CardBody>
                    </Card>

                    <Card className="card-statistics mb-30"> 
                      <CardBody>
                        <CardTitle>Menu alignment</CardTitle>
                        <div className="btn-toolbar" role="toolbar">
                        <Dropdown group  direction="left"isOpen={this.state.dropdownleft} className="mb-1"  toggle={this.dropdownleft}>
                            <DropdownToggle caret   color="primary" >
                              Left Dropdown
                            </DropdownToggle>
                            <DropdownMenu>
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem >Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>&nbsp;&nbsp;
                          <Dropdown isOpen={this.state.dropdownright} direction="right" toggle={this.dropdownright}>
                            <DropdownToggle caret  color="info">
                              Right Dropdown
                            </DropdownToggle>
                            <DropdownMenu >
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem >Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>&nbsp;&nbsp;
                          
                          <Dropdown isOpen={this.state.dropdownup}   direction="up"  toggle={this.dropdownup}>
                            <DropdownToggle caret   color="success">
                              Up Dropdown
                            </DropdownToggle>
                            <DropdownMenu > 
                              <DropdownItem>Action</DropdownItem>
                              <DropdownItem>Another Action</DropdownItem>
                              <DropdownItem >Something else here</DropdownItem>
                              <DropdownItem divider />
                              <DropdownItem>Separated link</DropdownItem>
                            </DropdownMenu>
                          </Dropdown>&nbsp;&nbsp;
                        </div>
                      </CardBody>
                    </Card>
                </Col>
              </Row>
           </div>
        );
    }
}
export default Dropdowns;