import React, { Component } from 'react';
import { Card, Icon, Grid, Dropdown, Container, Segment } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import './MeasureDetails.less';
import MasterTab from '../../components/MasterTab';
import MeasureDetailsHeader from '../../components/MeasureDetailsHeader'
import ViewTable from '../../components/ViewTable';
import LineChartData from '../../json/PracticeMeasureDetailsData.json';

import MasterAccordionData from '../../json/MasterAccordion.json'
import viewTableDataProp from '../../json/ViewTable.json';

import MeasureSegment from '../../components/MeasureSegment/MeasureSegment';
import MeasurePropData from '../../json/MeasureSegment.json';
class MeasureDetails extends Component {

    state = {
        dataProvider: {},
        viewTableDataProp: {},
        masterAccordionProps: MasterAccordionData
    }
    componentDidMount() {
           
        this.setState({
            ...this.state,
            dataProvider: LineChartData.dataProvider,
            viewTableDataProp: { ...viewTableDataProp }
        })
    }
    constructor(props) {
        super(props);
        console.log(this.props.location.state);
        this.onDropdownChange = this.onDropdownChange.bind(this)
    }

    onDropdownChange() {
        // console.log('onchange has been called');
    }
    
    render() {
        return (
            <Container fluid className="measureDetails">
                <Card.Content>
                    <Card.Header>
                        <Grid>
                            <Grid.Column >
                                <Link to="/landingPage/QualityDashboard" ><Icon name='angle left'></Icon></Link>
                            </Grid.Column>
                            <Grid.Column width={10} className="middleColumn">
                                <Card.Meta>
                                    {this.props.MeasureDetailsData.headerLabelData.name}
                                </Card.Meta>
                                <Card.Meta >
                                    <Dropdown
                                        placeholder='Select...'
                                        selection
                                        options={this.props.MeasureDetailsData.dropDownData.options}
                                        onChange={this.onDropdownChange}
                                    />
                                </Card.Meta >
                            </Grid.Column>
                        </Grid>
                        <MeasureSegment measureProp={MeasurePropData.measureProp} />
                    </Card.Header>
                </Card.Content>
                {/* <Segment basic>
                    <ViewTable ViewTableDataProp={ViewTableDataProp} />
                    <p><b>(+) - Met,  (-) - Not Met,  (DEN EXCL.) - Denominator Exclusion,   (NUM EXCL.) - Numerator Exclusion</b></p>
                </Segment> */}
                <Card.Content>
                    <MasterTab {...this.state} {...this.props} />
                    {/* need to implement code inside this of chart and its information*/}
                </Card.Content>
            </Container>
        )
    }
}

MeasureDetails.defaultProps = {
    MeasureDetailsData: {
        "dropDownData": {
            "options": [
                {
                    "value": "all",
                    "text": "All"
                },
                {
                    "value": "articles",
                    "text": "Articles"
                },
                {
                    "value": "products",
                    "text": "Products"
                }
            ]
        },
        "headerLabelData": {
            "name": "503709- Web demo Practice"
        }
    },
    masterTabProp: [
        {
            "menuItem": "PERFORMANCE TREND",
            "cssClass": "",
            "activeIndex": 1,
            "icon": "users",
            "defaultActiveIndex": true,
            "router": "MeasureDetailsHeader",
            "iconUrl": "../../assets/svg/practice.svg",
            measureDetailsHeaderProps: [
                "LineChart",
                "ViewTable"
            ]
        },
        {
            "menuItem": "LOCATIONS(50)",
            "cssClass": "",
            "activeIndex": 2,
            "icon": "users",
            "defaultActiveIndex": false,
            "router": "MeasureDetailsHeader",
            "iconUrl": "../../assets/svg/location.svg",
            measureDetailsHeaderProps: [
                "BackSearchComponent",
                "MasterAccordion"
            ]
        },
        {
            "menuItem": "CLINICIANS",
            "cssClass": "",
            "activeIndex": 3,
            "icon": "users",
            "defaultActiveIndex": false,
            "router": "MeasureDetailsHeader",
            "iconUrl": "../../assets/svg/clinician.svg",
            measureDetailsHeaderProps: [
                "BackSearchComponent",
                "MasterAccordion"
            ]
        },
        {
            "menuItem": "ALL",
            "cssClass": "",
            "activeIndex": 4,
            "icon": "users",
            "defaultActiveIndex": true,
            "router": "MeasureDetailsHeader",
            "iconUrl": "../../assets/svg/custom.svg",
            measureDetailsHeaderProps: [
                "LineChart",
                "ViewTable",
                "MasterAccordion"
            ]
        }
    ]
}

export default MeasureDetails;
