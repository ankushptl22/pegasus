import React, { Component } from "react";
import cliniciangridviewprop from "../../json/MasterClinicianGrid.json";
import MasterClinicianGrid from "../../components/MasterClinicianGrid";

class PracticeClinicianGrid extends Component {
  render() {
    return (
      <MasterClinicianGrid clinicianGridViewProp={cliniciangridviewprop} />
    );
  }
}

export default PracticeClinicianGrid;
