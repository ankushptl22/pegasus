import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import MasterPracticeGrid from "../../components/MasterPracticeGrid/MasterPracticeGrid";
// import MasterPracticeGridprops from "../../json/MasterPracticeGridData.json";
import PracticeInfo from "../../components/Form/PracticeInfo";
import MasterPaymentDetails from "../../components/MasterPaymentDetails/MasterPaymentDetails";
//import PracticeInfoView from "../../containers/PracticeInfoView/PracticeInfoView"

class PracticeInfoGrid extends Component {
  render() {
    console.log(this.props)
    return (
      <Grid stackable columns={2} celled>
        <Grid.Row>
          <Grid.Column width={9}>
            <PracticeInfo />
          </Grid.Column>
          <Grid.Column width={7}>
            <Grid.Row>Grid 2a</Grid.Row>
            <Grid.Row>
              <MasterPaymentDetails {...this.state} {...this.props} />
            </Grid.Row>
          </Grid.Column>
          <Grid.Column />
        </Grid.Row>

        <Grid.Row>
          <Grid.Column>
            <MasterPracticeGrid
              //MasterPracticeGridprops={MasterPracticeGridprops.practiceadmin}
              MasterPracticeGridprops={this.props.practiceadmin}
            />
          </Grid.Column>

          <Grid.Column>
            <MasterPracticeGrid
              //MasterPracticeGridprops={MasterPracticeGridprops.practicetin} 
              MasterPracticeGridprops={this.props.practicetin}
            />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    );
  }
}

export default PracticeInfoGrid;
