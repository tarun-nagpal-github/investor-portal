import React from 'react';
import { Tooltip, Card, CardBody, CardTitle, PopoverHeader, PopoverBody, Button, Popover, Row, Col, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import './Popover_Tooltips.css';

class PopoverTooltips extends React.Component {
  constructor(props, context) {
    super(props, context);

    this.popover = this.popover.bind(this);
    this.popoverleft = this.popoverleft.bind(this);
    this.popoverright = this.popoverright.bind(this);
    this.popovertop = this.popovertop.bind(this);
    this.popoverbottom = this.popoverbottom.bind(this);
    this.tooltipLeft = this.tooltipLeft.bind(this);
    this.tooltipBottom = this.tooltipBottom.bind(this);
    this.tooltipRight = this.tooltipRight.bind(this);
    this.tooltipTop = this.tooltipTop.bind(this);
    this.toggle = this.toggle.bind(this);

    this.state = {
      popover: false,
      popoverleft: false,
      popoverright: false,
      popovertop: false,
      popoverbottom: false,
      tooltipLeft: false,
      tooltipBottom: false,
      tooltipRight: false,
      tooltipTop: false,
      tooltipOpen: false
    };
  }

  popover() {
    this.setState({
      popover: !this.state.popover
    });
  }

  popoverleft() {
    this.setState({
      popoverleft: !this.state.popoverleft
    });
  }

  popoverright() {
    this.setState({
      popoverright: !this.state.popoverright
    });
  }
  popovertop() {
    this.setState({
      popovertop: !this.state.popovertop
    });
  }

  popoverbottom() {
    this.setState({
      popoverbottom: !this.state.popoverbottom
    });
  }

  tooltipLeft() {
    this.setState({
      tooltipLeft: !this.state.tooltipLeft
    });
  }
  tooltipRight() {
    this.setState({
      tooltipRight: !this.state.tooltipRight
    });
  }
  tooltipTop() {
    this.setState({
      tooltipTop: !this.state.tooltipTop
    });
  }
  tooltipBottom() {
    this.setState({
      tooltipBottom: !this.state.tooltipBottom
    });
  }

  toggle() {
    this.setState({
      tooltipOpen: !this.state.tooltipOpen
    });
  }


  render() {
    return (
      <div>
        <div className="page-title">
          <Row>
            <Col sm={6}>
              <h4 className="mb-0"> Popover &amp; Tooltips </h4>
            </Col>
            <Col sm={6}>
              <Breadcrumb className="float-left float-sm-right">
                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                <BreadcrumbItem active>Popover &amp; Tooltips </BreadcrumbItem>
              </Breadcrumb>
            </Col>
          </Row>
        </div>
        <Row>
          <Col md={6}>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Popover</CardTitle>
                <Button id="Popover1" onClick={this.popover}>
                  Click to toggle popover
                          </Button>
                <Popover placement="right" isOpen={this.state.popover} target="Popover1" toggle={this.popover}>
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                </Popover>
              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Four directions</CardTitle>
                <Button id="Popover4" className="mb-1" onClick={this.popovertop}>
                  Popover Top
                          </Button>
                <Popover placement="top" isOpen={this.state.popovertop} target="Popover4" toggle={this.popovertop}>
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here's some amazing content. It's very engaging. Top?</PopoverBody>
                </Popover>{"  "}
                <Button id="Popover2" className="mb-1" onClick={this.popoverleft}>
                  Popover Left
                          </Button>
                <Popover placement="left" isOpen={this.state.popoverleft} target="Popover2" toggle={this.popoverleft}>
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here's some amazing content. It's very engaging. Left?</PopoverBody>
                </Popover>{"  "}
                <Button id="Popover5" className="mb-1" onClick={this.popoverbottom}>
                  Popover Bottom
                          </Button>
                <Popover placement="bottom" isOpen={this.state.popoverbottom} target="Popover5" toggle={this.popoverbottom}>
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here's some amazing content. It's very engaging. Bottom?</PopoverBody>
                </Popover>{"  "}
                <Button id="Popover3" className="mb-1" onClick={this.popoverright}>
                  Popover Right
                          </Button>
                <Popover placement="right" isOpen={this.state.popoverright} target="Popover3" toggle={this.popoverright}>
                  <PopoverHeader>Popover Title</PopoverHeader>
                  <PopoverBody>And here's some amazing content. It's very engaging. Right?</PopoverBody>
                </Popover>
              </CardBody>
            </Card>
          </Col>
          <Col md={6}>
            <Card className=" card-statistics mb-30">
              <CardBody>
                <CardTitle>Tooltip</CardTitle>
                <Button id="Tooltipleft"  className="mb-1" >Tooltip on Left</Button>
                <Tooltip placement="left" isOpen={this.state.tooltipLeft} target="Tooltipleft" toggle={this.tooltipLeft}>
                  Hello world!
                          </Tooltip>{"  "}
                <Button id="Tooltiptop" className="mb-1">Tooltip on Top</Button>
                <Tooltip placement="top" isOpen={this.state.tooltipTop} target="Tooltiptop" toggle={this.tooltipTop}>
                  Hello world!
                          </Tooltip>{"  "}
                <Button id="Tooltipright" className="mb-1">Tooltip on Right</Button>
                <Tooltip placement="right" isOpen={this.state.tooltipRight} target="Tooltipright" toggle={this.tooltipRight}>
                  Hello world!
                          </Tooltip>{"  "}

                <Button id="Tooltipbottom" className="mb-1">Tooltip on Bottom</Button>
                <Tooltip placement="bottom" isOpen={this.state.tooltipBottom} target="Tooltipbottom" toggle={this.tooltipBottom}>
                  Hello world!
                          </Tooltip>{"  "}

              </CardBody>
            </Card>
            <Card className="card-statistics mb-30">
              <CardBody>
                <CardTitle>Hover Link Tooltip</CardTitle>
                <p>Sometimes you need to allow users to select text within a <span style={{ textDecoration: "underline", color: "blue" }} href="#" id="DisabledAutoHideExample">Link</span>.</p>
                <Tooltip placement="top" isOpen={this.state.tooltipOpen} autohide={false} target="DisabledAutoHideExample" toggle={this.toggle}>
                  Try to select this text!
                          </Tooltip>

              </CardBody>
            </Card>
          </Col>
        </Row>

      </div>
    );
  }
}
export default PopoverTooltips;