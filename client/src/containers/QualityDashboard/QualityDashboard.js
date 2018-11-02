import React, { Component } from 'react';
import { Segment, Icon, Label, Grid, Dropdown, Header, Menu, Progress } from 'semantic-ui-react';
import './QualityDashboard.less';
import Mastertable from '../../components/MasterDataTables/MasterDataTables';
import { tableSchema, tableData } from '../../json/DataTableSchema.json';
import MasterProgressBar from '../../components/MasterProgressBar/MasterProgressBar';
import { Link } from "react-router-dom";

class QualityDashboard extends Component {




    onDurationChange = (event) => {

    }

    onPracticesChange = (event) => {

    }

    onMeasureChange = (event) => {

    }

   

    render() {
        const addToFavouriteHandler = () => {
            alert('clicked adsad');
        }
   
        debugger;
        const { durationProp, measureSetProp, practiceProp } = this.props.QualityDashboardData
        const subComponents = { Progress, Segment, Icon, MasterProgressBar,Link };
        const events = { addToFavouriteHandler };
        return (
            <Segment basic className="seg">
                <Header textAlign="left" as='h1'>Quality Dashboard</Header>
                <Segment basic className="seg">
                    <Grid>
                        <Grid.Row>
                            <Grid.Column width={2}>
                                <p>Select Your Practice</p>
                                <Dropdown
                                    selection
                                    options={practiceProp}
                                    onChange={this.onPracticesChange} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <p>Select Duration</p>
                                <Dropdown
                                    selection
                                    options={durationProp}
                                    onChange={this.onDurationChange} />
                            </Grid.Column>
                            <Grid.Column width={2}>
                                <p>Select Measure Set</p>
                                <Dropdown
                                    selection
                                    options={measureSetProp}
                                    onChange={this.onMeasureChange} />
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
                <Segment basic className="seg">
                    <Mastertable
                        tableSchema={tableSchema}
                        tableData={tableData}
                        subComponents={subComponents}
                        events={events} 
                        />
                </Segment>
            </Segment>
        );
    }
}

QualityDashboard.defaultProps = {

    durationProp: [
        {
            "key": "1",
            "text": "2018Q4",
            "value": "1"
        },
        {
            "key": "2",
            "text": "2018Q3",
            "value": "2"
        }
    ],
    measureSetProp: [
        {
            "key": "1",
            "text": "2018 MIPS Measure",
            "value": "1"
        },
        {
            "key": "2",
            "text": "Registry Measure",
            "value": "2"
        }
    ],

    practiceProp: [
        {
            "key": "2",
            "text": "537908 - Web Demo Practice",
            "value": "2"
        }
    ]
}
export default QualityDashboard;