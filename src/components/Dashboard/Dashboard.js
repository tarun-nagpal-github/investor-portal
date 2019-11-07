import React, { Component } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import color from 'rcolor';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { Card,CardBody,CardTitle,TabContent, TabPane, Nav, NavItem, NavLink, Row, Col ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Breadcrumb ,BreadcrumbItem } from 'reactstrap';
import './Dashboard.css';
import classnames from 'classnames';
import { Pie } from 'react-chartjs-2';

const localizer = Calendar.momentLocalizer(moment);
//Pie Chart
var pieData = {
    labels: [
        'Green',
        'Yellow',
        'Blue'
    ],
    datasets: [{
        data: [300, 50, 100],
        backgroundColor: [
            '#00cc99',
            '#fad732',
            '#23b7e5'
        ],
        hoverBackgroundColor: [
            '#00cc99',
            '#fad732',
            '#23b7e5'
        ]
    }]
};
// random values for demo
var rFactor = function () {
    return Math.round(Math.random() * 100);
};
var barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Apple',
        backgroundColor: '#36A2EB',
        borderColor: '#36A2EB',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    },
    {
        label: 'Google',
        backgroundColor: '#ffa31a',
        borderColor: '#ffa31a',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }]
};
const data = {
    labels: [
        'Red',
        'Blue',
        'Yellow',
        'Green',
        'Orange'
    ],

    datasets: [{
        data: [400, 50, 100, 80, 150],
        backgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#00cc99',
            '#ffa31a'
        ],
        hoverBackgroundColor: [
            '#FF6384',
            '#36A2EB',
            '#FFCE56',
            '#00cc99',
            '#ffa31a'
        ]
    }]
};
var rFactor = function () {
    return Math.round(Math.random() * 100);
};
var barData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Apple',
        backgroundColor: '#36a2eb',
        borderColor: '#36a2eb',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    },
    {
        label: 'Google',
        backgroundColor: '#FF6384',
        borderColor: '#FF6384',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }],
};
var lineData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [{
        label: 'Income',
        backgroundColor: 'rgb(56, 182, 202)',
        borderColor: 'rgb(56, 182, 202)',
        pointBorderColor: '#fff',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }, {
        label: 'Outcome',
        backgroundColor: 'rgb(249, 249, 249)',
        borderColor: 'rgb(249, 249, 249)',
        pointBorderColor: '#fff',
        data: [rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor(), rFactor()]
    }]
};


const LinechartState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {

            lineTension: 0.1,
            backgroundColor: 'rgba(75,192,192,0.4)',
            borderColor: 'rgba(75,192,192,1)',
            borderCapStyle: 'butt',
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: 'miter',
            pointBorderColor: 'rgba(75,192,192,1)',
            pointBackgroundColor: '#fff',
            pointBorderWidth: 1,
            pointHoverRadius: 5,
            pointHoverBackgroundColor: 'rgba(75,192,192,1)',
            pointHoverBorderColor: 'rgba(220,220,220,1)',
            pointHoverBorderWidth: 2,
            pointRadius: 1,
            pointHitRadius: 10,
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};

const BarchartState = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'January',
            backgroundColor: 'rgba(255,99,132,0.2)',
            borderColor: 'rgba(255,99,132,1)',
            borderWidth: 1,
            hoverBackgroundColor: 'rgba(255,99,132,0.4)',
            hoverBorderColor: 'rgba(255,99,132,1)',
            data: [65, 59, 80, 81, 56, 55, 40]
        }
    ]
};


class Dashboard extends React.Component {

    constructor(props) {
        super(props);
        this.dropdownbarOpen = this.dropdownbarOpen.bind(this);
        this.dropdownlineOpen = this.dropdownlineOpen.bind(this);
        this.tabsclick = this.tabsclick.bind(this);
        this.onEventResize = this.onEventResize.bind(this);
        this.onEventDrop = this.onEventDrop.bind(this);
        this.state = {
            events: [
                {
                    start: new Date(),
                    end: new Date(moment().add(1, "days")),
                    title: "BirthDay Party "
                },
                {
                    start: new Date('2018-07-10'),
                    end: new Date('2018-07-10'),
                    title: "Marriage Anniversary"
                },
                {
                    start: new Date('2018-07-25'),
                    end: new Date('2018-07-25'),
                    title: "Conference"
                }
            ],
            dropdownbarOpen: false,
            dropdownlineOpen: false,
            activeTab: '1',
            widths:150
        };
        this.onEventResize = this.onEventResize.bind(this);
        this.onEventDrop = this.onEventDrop.bind(this);

    }
    dropdownbarOpen() {
        this.setState(prevState => ({
            dropdownbarOpen: !prevState.dropdownbarOpen

        }));
    }
    dropdownlineOpen() {
        this.setState(prevState => ({

            dropdownlineOpen: !prevState.dropdownlineOpen
        }));
    }
    tabsclick(tab) {
        if (this.state.activeTab !== tab) {
            this.setState({
                activeTab: tab
            });
        }
    }
    onEventResize(type, { event, start, end, allDay }) {
        this.setState(state => {
            state.events[0].start = start;
            state.events[0].end = end;
            return { events: start };
        });
    };
    onEventDrop({ event, start, end, allDay }) {
        console.log(start);
    };
    componentWillMount() {
        this.setState(LinechartState);
        this.setState(BarchartState);
    }
    
    render() {
        const DnDCalendar = withDragAndDrop(Calendar);
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0"> Dashboard</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem active>Dashboard</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Row>
                    <Col xl={6} className="mb-30">
                        <Card className="h-100">
                            <CardBody>
                                <CardTitle>Bar Chart</CardTitle>
                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                    <Bar data={barData} options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}, scales: {yAxes: [{gridLines: {display: false}, ticks:{fontFamily: "Poppins"}}], xAxes: [{gridLines: {display: false},ticks:{fontFamily: "Poppins"}}]}}} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                    <Col xl={6} className="mb-30">
                    <Card>
                            <CardBody>
                                <CardTitle>Pie Chart </CardTitle>
                                <div className="chart-wrapper" style={{ width: '100%', margin: '0 auto', height: 350 }}>
                                    <Pie data={pieData} options={{maintainAspectRatio: false, legend: {display: true, labels: {fontFamily: "Poppins"}}}} />
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </div>



        );
    }
}
export default Dashboard;