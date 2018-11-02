import React, { Component } from "react";
import PropTypes from "prop-types";
import { Table, Label, Image, Icon, Container } from "semantic-ui-react";
import "./MasterClinicianGrid.less";
import logo from "../../../assets/images/logo.jpg";

class MasterClinicianGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const { labels, data } = this.props.ClinicianGridViewProp;

    //This will render the header section of the Table
    const tableHeaders = (
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell />
          <Table.HeaderCell>
            {labels.name + " & " + labels.npi}
          </Table.HeaderCell>
          <Table.HeaderCell>{labels.clinicianType}</Table.HeaderCell>
          <Table.HeaderCell>{labels.role}</Table.HeaderCell>
          <Table.HeaderCell>{labels.tinDetails}</Table.HeaderCell>
          <Table.HeaderCell>{labels.phone}</Table.HeaderCell>
          <Table.HeaderCell />
        </Table.Row>
      </Table.Header>
    );

    //This will iterate an object and render it with UI
    const tableRows = data.map((singleRow, index) => {
      //This will render complete row for a single object passed from through the props
      const RoleLable =
        singleRow.role == "" ? (
          <span>{singleRow.role}</span>
        ) : (
          <Label basic circular>
            {singleRow.role}
          </Label>
        );
      return (
        <Table.Row key={index}>
          <Table.Cell>
            <Image src={logo} size="mini" />
          </Table.Cell>
          <Table.Cell>{singleRow.name + " " + singleRow.npi}</Table.Cell>
          <Table.Cell>
            <Icon className="stethoscope" />
          </Table.Cell>
          <Table.Cell>{RoleLable}</Table.Cell>
          <Table.Cell>
            {singleRow.tinDetails +
              " " +
              singleRow.tinFromDate +
              " to " +
              singleRow.tinEndDate}
          </Table.Cell>
          <Table.Cell>{singleRow.phone + " " + singleRow.mail}</Table.Cell>
          <Table.Cell>
            <Icon className="edit outline" />
          </Table.Cell>
        </Table.Row>
      );
    });

    return (
      //This will render the final table
      <Container>
        <p>Testing</p>
        <Table basic="very">
          {tableHeaders}
          <Table.Body>{tableRows}</Table.Body>
        </Table>
      </Container>
    );
  }
}

MasterClinicianGrid.defaultProps = {
  ClinicianGridViewProp: {
    labels: {
      logo: "Logo",
      name: "NAME",
      npi: "NPI",
      clinicianType: "CLINICIAN TYPE",
      role: "ROLE",
      tinDetails: "TIN DETAILS",
      tinFromDate: "TIN START DATE",
      tinEndDate: "TIN END DATE",
      phone: "CONTACT DETAILS",
      mail: "EMAIL ID",
      editIcon: "EDIT ICON"
    },
    data: [
      {
        logo: "../../../assets/images/logo.jpg",
        name: "Smith Mary",
        npi: "2345634567",
        clinicianType: "../../../assets/images/logo.jpg",
        role: "Practice Admin",
        tinDetails: "3456782390",
        tinFromDate: "01 Jan 2018",
        tinEndDate: "31 Dec 2018",
        phone: "617-726-2000",
        mail: "marysmith@gmail.com",
        editIcon: "../../../assets/images/logo.jpg"
      }
    ]
  }
};

MasterClinicianGrid.propTypes = {
  ClinicianGridViewProp: PropTypes.object.isRequired
};

export default MasterClinicianGrid;
