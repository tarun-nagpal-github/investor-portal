import React, { Component } from 'react';
import { Doughnut, Line, Bar } from 'react-chartjs-2';
import color from 'rcolor';
import Calendar from 'react-big-calendar';
import moment from 'moment';
import withDragAndDrop from "react-big-calendar/lib/addons/dragAndDrop";
import { Card,CardBody,CardTitle,TabContent, TabPane, Nav, NavItem, NavLink, Row, Col ,Dropdown, DropdownToggle, DropdownMenu, DropdownItem ,Breadcrumb ,BreadcrumbItem } from 'reactstrap';
import classnames from 'classnames';
import ReactTable from "react-table";
import Data from "../../../Data/AnnualInvestor.json";

class AnnualInvestorReport extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            data: Data.reports
        }

        this.columns = [
            {
                Header: "Investor Name",
                id: "investorName",
                accessor: d => d.investorName,
                headerClassName: "font-weight-bold"
            },
            {
                Header: "Investor Type",
                id: "investorType",
                accessor: d => d.investorType,
                headerClassName: "font-weight-bold"
            },
            {
                Header: "Payout Terms",
                id: "paymentTerm",
                accessor: d => d.paymentTerm,
                headerClassName: "font-weight-bold"
            },
            {
                Header: "Profit Percentage",
                id: "profitPercent",
                accessor: d => d.profitPercent,
                headerClassName: "font-weight-bold"
            },
        ]
    }

    render(){
        return (
            <div>
                <div className="page-title">
                    <Row>
                        <Col sm={6}>
                            <h4 className="mb-0">Annual Investor Report</h4>
                        </Col>
                        <Col sm={6}>
                            <Breadcrumb className="float-left float-sm-right">
                                    <BreadcrumbItem><a href="#">Home</a></BreadcrumbItem>
                                    <BreadcrumbItem active>Annual Investor</BreadcrumbItem>
                            </Breadcrumb>
                        </Col>
                    </Row>
                </div>
                <Card className="card-statistics">
                    <CardBody>
                        <ReactTable
                            data={this.state.data}
                            columns={this.columns}
                            className="-striped -highlight w-100"
                            defaultPageSize={5}
                            showPageSizeOptions={false}
                            style={{
                                width: "100%"
                            }}
                        />
                </CardBody>
                </Card>
            </div>
        )
    }
}

export default AnnualInvestorReport;
