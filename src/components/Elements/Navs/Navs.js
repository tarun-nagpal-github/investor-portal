import React from 'react';
//import { Nav,NavItem,NavDropdown,MenuItem, Row, Col} from 'react-bootstrap';
import { Row, Col, Nav, Dropdown, DropdownItem, DropdownToggle, DropdownMenu, NavItem, NavLink,Card,CardBody,CardTitle,Breadcrumb,BreadcrumbItem } from 'reactstrap';

class Navs extends React.Component {
  constructor(props) {
    super(props);
    this.tabdropdown = this.tabdropdown.bind(this);
    this.pillsdropdown = this.pillsdropdown.bind(this);
    this.state = {
      tabdropdownOpen: false,
      pillsdropdownOpen: false
    };

  }
  tabdropdown() {
    this.setState({
      tabdropdownOpen: !this.state.tabdropdownOpen
    });
  }
  pillsdropdown() {
    this.setState({
      pillsdropdownOpen: !this.state.pillsdropdownOpen
    });
  }
  render() {
    return (
      <div>

        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Nav </h4>
            </Col>
            <Col sm={6}>
                 <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                        <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                        <BreadcrumbItem active>Nav </BreadcrumbItem>
                  </Breadcrumb>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={6}>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Base nav</CardTitle>
                <Nav>
                  <NavItem>
                    <NavLink>NavItem 1 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>NavItem 2 content</NavLink>
                  </NavItem>
                  <NavItem disabled>
                    <NavLink>Disable</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Base nav a tag</CardTitle>
                <Nav tabs >
                  <NavItem>
                    <NavLink>NavItem 1 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>NavItem 2 content</NavLink>
                  </NavItem>
                  <NavItem disabled>
                    <NavLink>Disable</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Vertical</CardTitle>
                <Nav vertical>
                  <NavItem>
                    <NavLink href="#">NavItem 1 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">NavItem 2 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink href="#">NavItem 3 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink disabled href="#">Disabled Link</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Vertical a Tabs</CardTitle>
                <Nav tabs vertical>
                  <NavItem  >
                    <NavLink href="#">NavItem 1 content</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#">NavItem 2 content</NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink href="#">NavItem 3 content</NavLink>
                  </NavItem>
                  <NavItem disabled>
                    <NavLink href="#">NavItem 4 content</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Fill and justify</CardTitle>
                <Nav pills>
                  <NavItem >
                    <NavLink>NavItem 1 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>NavItem 2 content</NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink>NavItem 3 content</NavLink>
                  </NavItem>
                  <NavItem disabled>
                    <NavLink>NavItem 4 content</NavLink>
                  </NavItem>
                </Nav>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Tabs with dropdowns</CardTitle>
                <Nav tabs>
                  <NavItem >
                    <NavLink>NavItem 1 </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink>NavItem 2 </NavLink>
                  </NavItem>
                  <NavItem disabled>
                    <NavLink>Disable</NavLink>
                  </NavItem>
                  <Dropdown nav isOpen={this.state.tabdropdownOpen} toggle={this.tabdropdown}>
                    <DropdownToggle nav caret>
                      Dropdown
                                </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Action</DropdownItem>
                      <DropdownItem disabled>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                </Nav>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Pills with dropdowns</CardTitle>
                <Nav pills>
                  <NavItem>
                    <NavLink active>NavItem 1 </NavLink>
                  </NavItem>
                  <NavItem >
                    <NavLink>NavItem 2 </NavLink>
                  </NavItem>
                  <NavItem disabled>
                    <NavLink>Disable</NavLink>
                  </NavItem>
                  <Dropdown nav isOpen={this.state.pillsdropdownOpen} toggle={this.pillsdropdown}>
                    <DropdownToggle nav caret>
                      Dropdown
                                </DropdownToggle>
                    <DropdownMenu>
                      <DropdownItem header>Action</DropdownItem>
                      <DropdownItem disabled>Another Action</DropdownItem>
                      <DropdownItem>Something else here</DropdownItem>
                      <DropdownItem divider />
                      <DropdownItem>Separated link</DropdownItem>
                    </DropdownMenu>
                  </Dropdown>

                </Nav>
              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
export default Navs;
