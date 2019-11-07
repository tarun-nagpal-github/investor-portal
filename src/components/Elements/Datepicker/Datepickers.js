import React from 'react';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import { Row, Col, Breadcrumb, BreadcrumbItem, Card, CardBody, CardTitle } from 'reactstrap';

class DatePickers extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            simpleDate: moment(),
            startDate: moment(),
            endDate: moment(),
            settime: moment(),
            customedate: moment(),
            specificdate: moment(),
            highlightdate: moment(),
            cleardatepicker: moment(),
            yearstate: moment(),
            monthstate: moment()
        };
        this.handleChange = this.handleChange.bind(this);
        this.handlsettimeChange = this.handlsettimeChange.bind(this);
        this.customehendler = this.customehendler.bind(this);
        this.specificdatehandle = this.specificdatehandle.bind(this);
        this.highlightdatehandle = this.highlightdatehandle.bind(this);
        this.daterangeChange = this.daterangeChange.bind(this);
        this.handleChangeStart = this.handleChangeStart.bind(this);
        this.handleChangeEnd = this.handleChangeEnd.bind(this);
        this.cleardatepickerhandle = this.cleardatepickerhandle.bind(this);
        this.yearhandle = this.yearhandle.bind(this);
        this.monthhandle = this.monthhandle.bind(this);
    }

    handleChange(date) {
        this.setState({
            simpleDate: date

        });
    }
    handlsettimeChange(date) {
        this.setState({
            settime: date
        });
    }
    customehendler(date) {
        this.setState({
            customedate: date
        });
    }
    specificdatehandle(date) {
        this.setState({
            specificdate: date
        });
    }
    highlightdatehandle(date) {
        this.setState({
            highlightdate: date
        });
    }

    daterangeChange({ startDate, endDate }) {

        startDate = startDate || this.state.startDate
        endDate = endDate || this.state.endDate

        if (startDate.isAfter(endDate)) {
            endDate = startDate
        }

        this.setState({ startDate, endDate })
    }

    handleChangeStart(startDate) {
        this.daterangeChange({ startDate })
    }

    handleChangeEnd(endDate) {
        this.daterangeChange({ endDate })
    }

    cleardatepickerhandle(date) {
        this.setState({
            cleardatepicker: date
        });
    }
    yearhandle(date) {
        this.setState({
            yearstate: date
        });
    }
    monthhandle(date) {
        this.setState({
            monthstate: date
        });
    }

    render() {
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col md={6}>
                            <h4 className="mb-0"> Date Picker </h4>
                        </Col>
                        <Col md={6}>
                            <Breadcrumb className="pt-0 pr-0 float-left float-sm-right">
                                <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                <BreadcrumbItem active>Date Picker </BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                {/* main body */}
                <Row>
                    <Col md={6}>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Input</CardTitle>
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.simpleDate}
                                    onChange={this.handleChange}
                                />
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Select Time</CardTitle>
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.settime}
                                    onChange={this.handlsettimeChange}
                                    showTimeSelect
                                    timeFormat="HH:mm"
                                    timeIntervals={15}
                                    dateFormat="LLL"
                                    timeCaption="time"
                                />
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Custom date format</CardTitle>
                                <DatePicker
                                    className="form-control"
                                    dateFormat="YYYY/MM/DD"
                                    selected={this.state.customedate}
                                    onChange={this.customehendler} />
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Specific date range</CardTitle>
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.specificdate}
                                    onChange={this.specificdatehandle}
                                    minDate={moment()}
                                    maxDate={moment().add(5, "days")}
                                    placeholderText="Select Dates"
                                />
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Highlight dates</CardTitle>
                                <DatePicker
                                    className="form-control"
                                    selected={this.state.highlightdate}
                                    onChange={this.highlightdatehandle}
                                    highlightDates={[moment().subtract(7, "days"), moment().add(7, "days")]}
                                    placeholderText="Please Select Dates" />
                            </CardBody>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Date Range</CardTitle>
                                <div className="input-group" data-date="23/11/2018" data-date-format="mm/dd/yyyy">
                                    <DatePicker
                                        selected={this.state.startDate}
                                        selectsStart
                                        className="form-control"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onChange={this.handleChangeStart}
                                    />
                                    <span>&nbsp;&nbsp;To &nbsp;&nbsp;</span>
                                    <DatePicker
                                        selected={this.state.endDate}
                                        selectsEnd
                                        className="form-control"
                                        startDate={this.state.startDate}
                                        endDate={this.state.endDate}
                                        onChange={this.handleChangeEnd}
                                    />
                                </div>
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Clear Datepicker Input</CardTitle>
                                <DatePicker
                                    selected={this.state.cleardatepicker}
                                    onChange={this.cleardatepickerhandle}
                                    isClearable={true}
                                    className="form-control"
                                    placeholderText="I have been cleared!"
                                />
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Year Dropdown</CardTitle>
                                <DatePicker
                                    selected={this.state.yearstate}
                                    onChange={this.yearhandle}
                                    showYearDropdown
                                    dateFormatCalendar="MMMM"
                                    scrollableYearDropdown
                                    className="form-control"
                                    yearDropdownItemNumber={15}
                                />
                            </CardBody>
                        </Card>
                        <Card className="card-statistics mb-30">
                            <CardBody className="datepicker-form">
                                <CardTitle>Month Dropdown</CardTitle>
                                <div className="form-group">
                                    <DatePicker
                                        className="form-control"
                                        selected={this.state.monthstate}
                                        onChange={this.monthhandle}
                                        showMonthDropdown
                                    />
                                </div>
                            </CardBody>
                        </Card>

                    </Col>
                </Row>

            </div>

        )
    }
}
export default DatePickers
