import React, { Component } from "react";
import {
  Table,
  Image,
  Grid,
  Container,
  Header,
  Icon,
  Segment
} from "semantic-ui-react";
import PropTypes from "prop-types";
//import MasterPracticeGridprops from "../../json/MasterPracticeGridData.json";
import logo from "../../../assets/images/logo.jpg";

class MasterPracticeGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  generateHeading() {
    const { header } = this.props.MasterPracticeGridprops;
    return (
      <Header as="h3" attached="top">
        <Grid>
          <Grid.Column floated="left" width={11}>
            {header.title} ({header.count})
          </Grid.Column>
          <Grid.Column floated="right" width={5}>
            <Icon className="plus" />
            {header.buttontext}
          </Grid.Column>
        </Grid>
      </Header>
    );
  }

  generateHeaders() {
    const { heading } = this.props.MasterPracticeGridprops.content;
    return heading.map(function (heading, index) {
      return <Table.HeaderCell key={index}>{heading.label}</Table.HeaderCell>;
    });
  }

  generateRows() {
    var cols = this.props.MasterPracticeGridprops.content.heading,
      data = this.props.MasterPracticeGridprops.content.data;

    return data.map(function (item, i) {
      var cells = cols.map(function (colData, index) {
        if (colData.key == "logo") {
          return (
            <Table.Cell key={index}>
              <Image src={logo} size="mini" />
            </Table.Cell>
          );
        } else if (colData.key == "editicon") {
          return (
            <Table.Cell key={index}>
              <Icon className="edit" />
            </Table.Cell>
          );
        } else {
          return <Table.Cell key={index}>{item[colData.key]}</Table.Cell>;
        }
      });
      return <Table.Row key={i}>{cells}</Table.Row>;
    });
  }

  render() {
    var headerComponents = this.generateHeaders(),
      rowComponents = this.generateRows(),
      headingComponent = this.generateHeading();

    console.log(this.props.practiceadmin, "\n", this.props.practicetin);

    return (
      <Segment attached>
        {headingComponent}
        <Table singleLine>
          <Table.Header>
            <Table.Row>{headerComponents}</Table.Row>
          </Table.Header>
          <Table.Body>{rowComponents}</Table.Body>
        </Table>
      </Segment>
    );
  }
}

MasterPracticeGrid.defaultProps = {
  MasterPracticeGridprops: {
    header: {
      title: "PRACTICE TIN DETAILS",
      count: "28",
      buttontext: "Add New TIN"
    },
    content: {
      heading: [
        { key: "tin", label: "TIN DETAILS" },
        { key: "startdate", label: "DURATION" },
        { key: "enddate", label: "" },
        { key: "editicon", label: "" }
      ],
      data: [
        {
          tin: "3456782390",
          startdate: "01 Jan 2018",
          enddate: "31 Dec 2018",
          editicon: ""
        },
        {
          tin: "3456782390",
          startdate: "01 Jan 2018",
          enddate: "31 Dec 2018",
          editicon: ""
        },
        {
          tin: "3456782390",
          startdate: "01 Jan 2018",
          enddate: "31 Dec 2018",
          editicon: ""
        },
        {
          tin: "3456782390",
          startdate: "01 Jan 2018",
          enddate: "31 Dec 2018",
          editicon: ""
        },
        {
          tin: "3456782390",
          startdate: "01 Jan 2018",
          enddate: "31 Dec 2018",
          editicon: ""
        }
      ]
    }
  }
};

MasterPracticeGrid.propTypes = {
  MasterPracticeGridprops: PropTypes.object.isRequired
};

export default MasterPracticeGrid;
