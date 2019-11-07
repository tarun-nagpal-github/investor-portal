import React from 'react';
import Switch from "react-switch";
import { Row, Col,Card,CardBody,CardTitle,BreadcrumbItem,Breadcrumb } from 'reactstrap';

class Switchs extends React.Component {
    constructor() {
        super();
        this.state = { disable: false, disable2: true, uncheckstate: true, uncheckstatecustome: true, uncheckstatesmaller: true, uncheckstatecustomeicon: true, checkstatecustomeicon: false, checked: false, checkedline: false, checkedsmaller: false };
        this.handleChange = this.handleChange.bind(this);
        this.handleChangelincustom = this.handleChangelincustom.bind(this);
        this.handleChangesmaller = this.handleChangesmaller.bind(this);
        this.uncheckstates = this.uncheckstates.bind(this);
        this.uncheckstatescustome = this.uncheckstatescustome.bind(this);
        this.uncheckstatessmaller = this.uncheckstatessmaller.bind(this);
        this.uncheckstatescustomeicon = this.uncheckstatescustomeicon.bind(this);
        this.checkstatescustomeicon = this.checkstatescustomeicon.bind(this);
        this.disable = this.disable.bind(this);
    }
    disable(disable) { this.setState({ disable }); }
    disable2(disable2) { this.setState({ disable2 }); }
    handleChange(checked) {
        this.setState({ checked });

    }
    uncheckstates(uncheckstate) {
        this.setState({ uncheckstate });
    }
    handleChangelincustom(checkedline) {
        this.setState({ checkedline });
    }
    uncheckstatescustome(uncheckstatecustome) {
        this.setState({ uncheckstatecustome });
    }
    handleChangesmaller(checkedsmaller) {
        this.setState({ checkedsmaller });
    }
    uncheckstatessmaller(uncheckstatesmaller) {
        this.setState({ uncheckstatesmaller });
    }
    uncheckstatescustomeicon(uncheckstatecustomeicon) {
        this.setState({ uncheckstatecustomeicon });
    }
    checkstatescustomeicon(checkstatecustomeicon) {
        this.setState({ checkstatecustomeicon });
    }
    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Switch</h4>
                        </Col>
                        <Col sm={6}>
                             <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Switch </BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Simple usage</CardTitle>
                                <p className="text-muted"><b>Checkbox Block (Default Checked)</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch onChange={this.uncheckstates} checked={this.state.uncheckstate} className="react-switch" id="normal-switch" />
                                        </Col>
                                    </Row>
                                </div>
                                <p className="text-muted"><b>Checkbox Inline (Default Unchecked)</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch onChange={this.handleChange} checked={this.state.checked} className="react-switch" id="normal-switch" />
                                        </Col>
                                    </Row>
                                </div>
                                <p className="text-muted"><b>Checkbox Disabled (Default Checked)</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch onChange={this.disable2} checked={this.state.disable2} className="react-switch" id="normal-switch" disabled />
                                        </Col>
                                    </Row>
                                </div>
                                <p className="text-muted"><b>Checkbox Disabled (Default Unchecked)</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch onChange={this.disable} checked={this.state.disable} className="react-switch" id="normal-switch" disabled />
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Custom styling</CardTitle>
                                <p className="text-muted"><b>Checkbox Block  (Default Checked)</b></p>
                                <div className="form-group">
                                    <div className="checkbox checbox-switch switch-light">
                                        <Row>
                                            <Col md={3}>
                                                <Switch
                                                    onChange={this.uncheckstatescustome} checked={this.state.uncheckstatecustome}
                                                    onColor="#86d3ff"
                                                    onHandleColor="#2693e6"
                                                    handleDiameter={30}
                                                    uncheckedIcon={false}
                                                    checkedIcon={false}
                                                    boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                    activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                    height={20}
                                                    width={48}
                                                    className="react-switch"
                                                    id="material-switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <p className="text-muted"><b>Checkbox Inline  (Default UnChecked)</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch
                                                checked={this.state.checkedline}
                                                onChange={this.handleChangelincustom}
                                                onColor="#86d3ff"
                                                onHandleColor="#2693e6"
                                                handleDiameter={30}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={20}
                                                width={48}
                                                className="react-switch"
                                                id="material-switch"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                                <p className="text-muted"><b>Checkbox Disabled</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch
                                                checked={this.state.disable}
                                                onChange={this.disable}
                                                onColor="#86d3ff"
                                                onHandleColor="#2693e6"
                                                handleDiameter={30}
                                                uncheckedIcon={false}
                                                checkedIcon={false}
                                                boxShadow="0px 1px 5px rgba(0, 0, 0, 0.6)"
                                                activeBoxShadow="0px 0px 1px 10px rgba(0, 0, 0, 0.2)"
                                                height={20}
                                                width={48}
                                                className="react-switch"
                                                id="material-switch"
                                                disabled
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row >
                    <Col xl={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <h5 className="card-title">Smaller handle</h5>
                                <p className="text-muted"><b>Default Checked</b></p>
                                <div className="form-group">
                                    <div className="checkbox checbox-switch switch-success">
                                        <Row>
                                            <Col md={3}>
                                                <Switch
                                                    checked={this.state.uncheckstatesmaller}
                                                    onChange={this.uncheckstatessmaller}
                                                    handleDiameter={28}
                                                    offColor="#888"
                                                    onColor="#84ba3f"
                                                    offHandleColor="#fff"
                                                    onHandleColor="#fff"
                                                    height={40}
                                                    width={70}
                                                    className="react-switch"
                                                    id="small-radius-switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <p className="text-muted"><b>Default Unchecked</b></p>
                                <div className="form-group">
                                    <div className="checkbox checbox-switch switch-success">
                                        <Row>
                                            <Col md={3}>
                                                <Switch
                                                    checked={this.state.checkedsmaller}
                                                    onChange={this.handleChangesmaller}
                                                    handleDiameter={28}
                                                    offColor="#888"
                                                    onColor="#84ba3f"
                                                    offHandleColor="#fff"
                                                    onHandleColor="#fff"
                                                    height={40}
                                                    width={70}
                                                    className="react-switch"
                                                    id="small-radius-switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <p className="text-muted"><b>Default Disabled</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch
                                                onChange={this.disable}
                                                checked={this.state.disable}
                                                handleDiameter={28}
                                                offColor="#888"
                                                onColor="#84ba3f"
                                                offHandleColor="#fff"
                                                onHandleColor="#fff"
                                                height={40}
                                                width={70}
                                                className="react-switch"
                                                id="small-radius-switch"
                                                disabled
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6} className="mb-30">
                        <Card className="card-statistics h-100">
                            <CardBody>
                                <CardTitle>Custom icons</CardTitle>
                                <p className="text-muted"><b>Default Checked</b></p>
                                <div className="form-group">
                                    <div className="checkbox checbox-switch switch-primary">
                                        <Row>
                                            <Col md={3}>
                                                <Switch
                                                    checked={this.state.uncheckstatecustomeicon}
                                                    onChange={this.uncheckstatescustomeicon}
                                                    uncheckedIcon={
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                height: "100%",
                                                                fontSize: 15,
                                                                color: "#fff",
                                                                paddingRight: 2
                                                            }}
                                                        >
                                                            Off
                                                    </div>
                                                    }
                                                    checkedIcon={
                                                        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#fff">
                                                            <circle r={3} cx={5} cy={5} />
                                                        </svg>
                                                    }
                                                    className="react-switch"
                                                    id="icon-switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <p className="text-muted"><b>Default Unchecked</b></p>
                                <div className="form-group">
                                    <div className="checkbox checbox-switch switch-primary">
                                        <Row>
                                            <Col md={3}>
                                                <Switch
                                                    checked={this.state.checkstatecustomeicon}
                                                    onChange={this.checkstatescustomeicon}
                                                    uncheckedIcon={
                                                        <div
                                                            style={{
                                                                display: "flex",
                                                                justifyContent: "center",
                                                                alignItems: "center",
                                                                height: "100%",
                                                                fontSize: 15,
                                                                color: "#fff",
                                                                paddingRight: 2
                                                            }}
                                                        >
                                                            Off
                                                    </div>
                                                    }
                                                    checkedIcon={
                                                        <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#fff">
                                                            <circle r={3} cx={5} cy={5} />
                                                        </svg>
                                                    }
                                                    className="react-switch"
                                                    id="icon-switch"
                                                />
                                            </Col>
                                        </Row>
                                    </div>
                                </div>
                                <p className="text-muted"><b>Default Disabled</b></p>
                                <div className="form-group">
                                    <Row>
                                        <Col md={3}>
                                            <Switch
                                                onChange={this.disable}
                                                checked={this.state.disable}
                                                disabled
                                                uncheckedIcon={
                                                    <div
                                                        style={{
                                                            display: "flex",
                                                            justifyContent: "center",
                                                            alignItems: "center",
                                                            height: "100%",
                                                            fontSize: 15,
                                                            color: "#fff",
                                                            paddingRight: 2
                                                        }}
                                                    >
                                                        Off
                                                </div>
                                                }
                                                checkedIcon={
                                                    <svg viewBox="0 0 10 10" height="100%" width="100%" fill="#fff">
                                                        <circle r={3} cx={5} cy={5} />
                                                    </svg>
                                                }
                                                className="react-switch"
                                                id="icon-switch"
                                            />
                                        </Col>
                                    </Row>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>


            </div>
        );
    }
}
export default Switchs;