import React, { Component } from 'react';
import './Models.css';
import { Button, Row, Col, Modal, ModalHeader, ModalBody, Card, CardBody, CardTitle, ModalFooter,Breadcrumb,BreadcrumbItem } from 'reactstrap';
class Models extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            neastedmodel: false,
            nestedModal: false,
            closeAll: false,
            faceinModal: false,
            externalmodal: false,
            externalmodalbutton:false
        };

        this.toggle = this.toggle.bind(this);
        this.nestedtoggle = this.nestedtoggle.bind(this);
        this.toggleNested = this.toggleNested.bind(this);
        this.toggleAll = this.toggleAll.bind(this);
        this.fadeintoggle = this.fadeintoggle.bind(this);
        this.externaltoggle = this.externaltoggle.bind(this);
        this.externalmodalbutton=this.externalmodalbutton.bind(this);
    }

    toggle() {
        this.setState({
            modal: !this.state.modal
        });
    }

    nestedtoggle() {
        this.setState({
            neastedmodel: !this.state.neastedmodel
        });
    }
    toggleNested() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: false
        });
    }

    toggleAll() {
        this.setState({
            nestedModal: !this.state.nestedModal,
            closeAll: true
        });
    }

    fadeintoggle() {
        this.setState({
            faceinModal: !this.state.faceinModal
        });
    }

    externaltoggle() {
        this.setState({
            externalmodal: !this.state.externalmodal
        });
    }

    externalmodalbutton(){
		this.setState({
            externalmodalbutton: !this.state.externalmodalbutton
        });
    }

    render() {

        const externalCloseBtn = <button className="close" style={{ position: 'absolute', top: '15px', right: '15px' }} onClick={this.externalmodalbutton}>&times;</button>;

        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Modals</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Modals </BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Modals</CardTitle>
                                {/* Button trigger modal */}
                                <Button color="primary" onClick={this.toggle}>
                                    Launch demo modal
                        </Button>
                                {/* Modal */}
                                <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                                    <ModalHeader toggle={this.toggle}>Modal title
                                 </ModalHeader>
                                    <ModalBody>
                                        <p>We are an innovative agency. We develop and design customers around the world. Our clients are some of the most forward-looking companies in the world.
                                       Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id
                            ipsam, beatae, rem fuga id earum? Inventore et facilis obcaecati.</p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.toggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>

                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Scrolling Model </CardTitle>
                                <Button
                                    color="primary"
                                    onClick={this.nestedtoggle}
                                >
                                    Launch demo modal
                        </Button>
                                <Modal isOpen={this.state.neastedmodel} toggle={this.nestedtoggle} className={this.props.className}>
                                    <ModalHeader toggle={this.nestedtoggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                                        <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.</p>
                                        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                                        <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>

                                        <Button color="success" onClick={this.toggleNested}>Show Nested Modal</Button>
                                        <Modal isOpen={this.state.nestedModal} toggle={this.toggleNested} onClosed={this.state.closeAll ? this.toggle : undefined}>
                                            <ModalHeader>Nested Modal title</ModalHeader>
                                            <ModalBody>Stuff and things</ModalBody>
                                            <ModalFooter>
                                                <Button color="primary" onClick={this.toggleNested}>Done</Button>{' '}
                                                <Button color="secondary" onClick={this.toggleAll}>All Done</Button>
                                            </ModalFooter>
                                        </Modal>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.nestedtoggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.nestedtoggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>

                    <Col md={6} className="mb-30">
                        <Card className=" card-statistics h-100">
                            <CardBody>
                                <CardTitle>Modals without Fade Effect</CardTitle>
                                <Button
                                    color="primary"
                                    onClick={this.fadeintoggle}
                                > Without Fade Effect
                            </Button>
                                <Modal isOpen={this.state.faceinModal} fade={false} toggle={this.fadeintoggle} className={this.props.className}>
                                    <ModalHeader toggle={this.fadeintoggle}>Modal title</ModalHeader>
                                    <ModalBody>
                                        <p>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                        <p>
                                            Cras mattis consectetur purus sit amet fermentum. Cras justo odio,
                                            dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta
                                            ac consectetur ac, vestibulum at eros.
                                        </p>
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.fadeintoggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.fadeintoggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6} className="mb-30">
                        <Card className=" card-statistics h-100">
                            <CardBody>
                                <CardTitle>Modals with external button</CardTitle>
                                <Button
                                    color="primary"
                                    onClick={this.externaltoggle}
                                >External Button Models</Button>
                                <Modal isOpen={this.state.externalmodal} toggle={this.externaltoggle} className={this.props.className} external={externalCloseBtn}>
                                    <ModalHeader>Modal title</ModalHeader>
                                    <ModalBody>
                                        <b>Look at the top right of the page/viewport!</b><br />
                                        <p>
                                            Praesent commodo cursus magna, vel scelerisque nisl consectetur et.
                                            Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor
                                            auctor.
                                        </p>
                                        <p>
                                            Aenean lacinia bibendum nulla sed consectetur. Praesent commodo
                                            cursus magna, vel scelerisque nisl consectetur et. Donec sed odio
                                            dui. Donec ullamcorper nulla non metus auctor fringilla.
                                        </p>
                                    </ModalBody>
                                    <ModalFooter>
                                        <Button color="primary" onClick={this.externaltoggle}>Do Something</Button>{' '}
                                        <Button color="secondary" onClick={this.externaltoggle}>Cancel</Button>
                                    </ModalFooter>
                                </Modal>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>

            </div>
        );
    }
}
export default Models;
