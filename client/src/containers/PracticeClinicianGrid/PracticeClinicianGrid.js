import React, { Component } from "react";
import ClinicianGridViewProp from "../../json/MasterClinicianGrid.json";
import MasterClinicianGrid from "../../components/MasterClinicianGrid";

class PracticeClinicianGrid extends Component {
  render() {
    return (
      <MasterClinicianGrid ClinicianGridViewProp={ClinicianGridViewProp} />
    );
  }
}

export default PracticeClinicianGrid;
