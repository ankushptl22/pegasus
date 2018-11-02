import React from 'react';
import { Route, Switch } from "react-router-dom";
import Loadable from 'react-loadable';
import { Grid } from 'semantic-ui-react';
// import Practice from '../containers/practice/practice';
// import Measures from '../containers/measures/measures';
// import Clinician from '../containers/clinician/clinician';
import {
  MasterCard,
  MasterTab,
  MasterFIGmdListView,
  MasterHeader,
  MasterFooter,
  MasterNavigationMenu,
  PracticeListView,
  MasterCardView,
  PracticeMasterTab,
  MeasureDetails,
  QualityDashboard,
  PracticeMeasureDetails,
  PracticeQualityDashboard,
  MasterPracticeGrid,
  PracticeInfoGrid,
  PracticeInfoView,
  MasterAccordion,
  PracticeMasterAccordion,
  MeasureDetailsHeader
} from '../json/NavigationMapping';

const RouterClass = () => (
  <Switch>
    {/* <Route exact path="/" component={Practice} />
    <Route path="/clinician" component={Clinician} />
    <Route path="/measures" component={Measures} />
    <Route component={NotFound} /> */}
  </Switch>

);

const LeftNavigationRoutes = () => (
  <Grid className="fi-content-right__wrapper">
    <Route path={`/landingPage/PracticeMeasureDetails`} component={PracticeMeasureDetails} />
    <Route path={`/landingPage/MeasureDetailsHeader`} component={MeasureDetailsHeader} />
    <Route path={`/landingPage/MeasureDetails`} component={MeasureDetails} />
    <Route path={`/landingPage/MasterCard`} component={MasterCardView} />
    <Route path={`/landingPage/MasterTab`} component={PracticeMasterTab} />
    <Route path={`/landingPage/MasterFIGmdListView`} component={PracticeListView} />
    <Route path={`/landingPage/MasterHeader`} component={MasterHeader} />
    <Route path={`/landingPage/MasterFooter`} component={MasterFooter} />
    <Route path={`/landingPage/MasterNavigationMenu`} component={MasterNavigationMenu} />
    <Route path={`/landingPage/QualityDashboard`} component={PracticeQualityDashboard} />
    <Route path={`/landingPage/MasterAccordion`} component={MasterAccordion} />
    <Route path={`/landingPage/MasterPracticeGrid`} component={MasterPracticeGrid} />
    <Route path={`/landingPage/PracticeInfoView`} component={PracticeInfoView} />
    <Route path={`/landingPage/PracticeInfoGrid`} component={PracticeInfoGrid} />
    <Route path={`/landingPage/PracticeMasterAccordion`} component={PracticeMasterAccordion} />
  </Grid>
);

export { RouterClass, LeftNavigationRoutes };
