import React, { Component } from "react";
import { Grid, Icon, Divider } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MasterPracticeGrid from "../../components/MasterPracticeGrid/MasterPracticeGrid";
import practiceGridData from "../../json/MasterPracticeGridData.json";
import MasterTabProp from '../../json/MasterTabProp.json'
import MasterTab from "../../components/MasterTab/MasterTab";
import ListExport from "../../components/ListExport/ListExport"
import MasterPracticeGridprops from "../../json/MasterPracticeGridData.json"

class PracticeInfoView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practiceadmin: MasterPracticeGridprops.practiceadmin,
      practicetin: MasterPracticeGridprops.practicetin,
      masterTabProp: MasterTabProp.masterTabProp
    };
  }

  render() {
    console.log(this.props.location.props);
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column floated='left' width={2}>
            <Link to="/landingPage/MasterFIGmdListView" ><Icon name='angle left'></Icon></Link>
          </Grid.Column>
          <Grid.Column floated='left' width={13}>
          </Grid.Column>
          <Grid.Column floated='right' width={1}>
            <Icon name='share square outline'></Icon>
            <ListExport />
          </Grid.Column>
        </Grid.Row>
        <Divider />
        <Grid.Row>
          <Grid.Column>
            <MasterTab {...this.state} {...this.props} />
          </Grid.Column>
        </Grid.Row>
      </Grid>)

  }
}

// Specifies the default values for props:
PracticeInfoView.defaultProps = {
  masterTabProp: [
    {
      menuItem: "PRACTICE INFO",
      cssClass: "",
      activeIndex: 1,
      icon: "users",
      defaultActiveIndex: true,
      router: "PracticeInfoGrid",
      iconUrl: "../../assets/svg/practice.svg"
    },
    {
      menuItem: "CLINICIANS",
      cssClass: "",
      activeIndex: 2,
      icon: "users",
      defaultActiveIndex: false,
      router: "PracticeClinicianGrid",
      iconUrl: "../../assets/svg/clinician.svg"
    },
    {
      menuItem: "LOCATIONS",
      cssClass: "",
      activeIndex: 3,
      icon: "users",
      defaultActiveIndex: false,
      router: "PracticeListView",
      iconUrl: "../../assets/svg/location.svg"
    },
    {
      menuItem: "EHR INFO",
      cssClass: "",
      activeIndex: 4,
      icon: "users",
      defaultActiveIndex: false,
      router: "PracticeListView",
      iconUrl: "../../assets/svg/ehr.svg"
    },
    {
      menuItem: "CUSTOM INFO",
      cssClass: "",
      activeIndex: 5,
      icon: "users",
      defaultActiveIndex: false,
      router: "PracticeListView",
      iconUrl: "../../assets/svg/custom.svg"
    }
  ]
};

export default PracticeInfoView;
