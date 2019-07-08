import React , { Component} from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";

import ContentPage from '../pages/ContentPage';
import ContentPagesPage from '../pages/ContentPagesPage';
import LeadPage from '../pages/LeadPage';
import Dashboard from '../pages/Dashboard';
import ContentDetailsPage from '../pages/ContentDetailsPage';
import DashboardOrg from '../pages/DashboardOrg';
import OrganizationPage from '../pages/OrganizationPage';
import LoginPage from '../pages/LoginPage';


class ContentRouter extends Component {
  render(){
    return(
      <Router>
        <Route path="/" exact component={Dashboard} />
        <Route path="/dashboard_org" exact component={DashboardOrg} />
        <Route path="/organization" exact component={OrganizationPage} />
        <Route path="/contents" exact component={ContentPage} />
        <Route path="/leads" exact component={LeadPage} />
        <Route path="/pages" exact component={ContentPagesPage} />
        <Route path="/detail" exact component={ContentDetailsPage} />
        <Route path="/login" exact component={LoginPage} />
      </Router>
    )
  }
}

export default ContentRouter;
