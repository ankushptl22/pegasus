import React from "react";
import { Router, Route } from "react-router-dom";
import { connect } from "react-redux";

import { history } from "../../redux/_helpers";
import { alertActions } from "../../redux/_actions";
import { PrivateRoute } from "../../redux/_components";

import { LoginStepTwo } from "../LoginPage";
import { RegisterPage } from "../RegisterPage";
import LandingPage from "../../layouts/LandingPage";
import ComponentBuilding from "../../layouts/ComponentBuilding";
import MasterFIGmdListView from "../../components/MasterFIGmdListView";
import MasterTab from "../../components/MasterTab";
import listViewData from "../../json/MasterFIGmdListView.json";
import MasterTabProp from "../../json/MasterTabProp.json";
import LoginForm from "../LoginPage/LoginForm.js";
import ForgotPassword from "../LoginPage/ForgotPassword.js";
import Emailsend from "../LoginPage/Emailsend";
import AddPractice from "../../components/Form/AddPractice";
import AddAdmin from "../../components/Form/AddAdmin";
import AddTin from "../../components/Form/AddTin";
import MasterPaymentDetails from "../../components/MasterPaymentDetails";
import PracticeInfo from "../../components/Form/PracticeInfo";
import MasterPracticeGrid from "../../components/MasterPracticeGrid";
import PracticeInfoView from "../../containers/PracticeInfoView/PracticeInfoView";
import PracticeInfoGrid from "../../containers/PracticeInfoGrid/PracticeInfoGrid";

class App extends React.Component {
  constructor(props) {
    super(props);

    const { dispatch } = this.props;
    history.listen((location, action) => {
      // clear alert on location change
      dispatch(alertActions.clear());
    });
  }

  render() {
    const { alert } = this.props;

    return (
      <div className="fi-grid fi-grid--hor fi-grid--root fi-grid--root-2">
        {alert.message && (
          <div className={`alert ${alert.type}`}>{alert.message}</div>
        )}
        <Router history={history}>
          <div className="fi-grid fi-grid--hor fi-grid--root fi-grid--root-3">
            <Route path="/" exact component={LoginForm} />
            <Route path="/login" component={LoginForm} />
            <Route path="/register" component={RegisterPage} />
            <Route path="/steptwo" component={LoginStepTwo} />
            <Route path="/landingPage" component={LandingPage} />
            <Route
              path="/masterTabs"
              component={() => (
                <MasterTab masterTabProp={MasterTabProp.masterTabProp} />
              )}
            />
            <Route
              path="/listView"
              component={() => (
                <MasterFIGmdListView figmdListViewProp={listViewData} />
              )}
            />
            <Route path="/forgotpass" component={ForgotPassword} />
            <Route path="/emailsend" component={Emailsend} />
            <Route path="/addpractice" component={AddPractice} />
            <Route path="/addadmin" component={AddAdmin} />
            <Route path="/addtin" component={AddTin} />
            <Route
              path="/MasterPaymentDetails"
              component={MasterPaymentDetails}
            />
            <Route path="/practiceinfo" component={PracticeInfo} />
            <Route path="/MasterPracticeGrid" component={MasterPracticeGrid} />
            <Route path="/PracticeInfoView" component={PracticeInfoView} />
            <Route path="/PracticeInfoGrid" component={PracticeInfoGrid} />
            <Route path="/ComponentBuilding" component={ComponentBuilding} />
          </div>
        </Router>
      </div>
    );
  }
}

function mapStateToProps(state) {
  const { alert } = state;
  return {
    alert
  };
}

const connectedApp = connect(mapStateToProps)(App);
export { connectedApp as App };
