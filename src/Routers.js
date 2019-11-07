
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Base from './components/Layout/Base';
import Basepages from './components/Layout/Basepages';
import Login from './components/Authentication/Login/Login';
import Register from './components/Authentication/Register/Register';
import Dashboard from './components/Dashboard/Dashboard';
import BlankPage from './components/Custompage/Blankpage/Blankpage';
// import AnnualInvestorReport from './components/AnnualInvestor/AnnualInvestorReport';
import SyndicateInvestorReport from './components/SyndicateInvestor/SyndicateInvestorReport';
import PrivateRoute from "./utils/PrivateRoute";
const listofPages = [
    '#/login',
    '#/register'

];

const Routers = () => {

    if (listofPages.indexOf(location.hash) > -1) {
        return (
            <Basepages>

                <Route path="/login" component={Login} />
                <Route path="/register" component={Register} />

            </Basepages>
        )
    }
    else {
        return (
            <Base>
                <Switch>
                    <PrivateRoute exact path="/" component={BlankPage} />
                    <Route exact path="/login" component={Login} />
                    <PrivateRoute exact path="/welcome-page" component={BlankPage} />
                    {/* <Route exact path="/annual-investor-report" component={AnnualInvestorReport}/> */}
                    <PrivateRoute exact path="/syndicate-investor-report" component={SyndicateInvestorReport} />
                </Switch>
            </Base>
        );
    }
}
export default Routers;