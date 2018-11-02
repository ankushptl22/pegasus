import React, { Component } from 'react';
import MasterFIGmdListView from '../../components/MasterFIGmdListView/MasterFIGmdListView';
import fig from '../../json/MasterFIGmdListView.json';
import { Card, Icon, Grid, Dropdown, Container, Progress } from 'semantic-ui-react';
import { Link } from "react-router-dom";
import MasterTab from '../../components/MasterTab';
import MeasureDetailsHeader from '../../components/MeasureDetailsHeader'
import DateComponent from '../../components/DateComponent/DateComponent';
import MasterAccordionData from '../../json/MasterAccordion.json'
//import MasterDataTable from '../../components/MasterDataTables/MasterDataTables';
import MasterProgressBar from '../../components/MasterProgressBar/MasterProgressBar';
const subComponents = { Progress, Icon, MasterProgressBar, Link };
import { tableData, tableSchema } from '../../json/DataTableSchema.json';


// const events = { addToFavoruite };
class QualityDashboard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            masterAccordionProps: MasterAccordionData
        }
    }

    onDurationChange = (event) => {

    }

    onPracticesChange = (event) => {

    }

    onMeasureChange = (event) => {

    }

    addToFavoruite = (e) => {
        let classes = e.target.classList;
        if (classes.contains('outline')) {
            e.target.classList.remove('outline')
        }
        else {
            e.target.classList.add('outline')
        }
    }

    state = {
        tableSchema: {},
        tableData: {},
        subComponents: {},
        events: {}
    }

    componentDidMount() {
        let addToFavoruite = this.addToFavoruite;
        const events = { addToFavoruite };
        this.setState({
            ...this.state,
            tableSchema: tableSchema,
            tableData: tableData,
            subComponents: subComponents,
            events: events
        });
    }
    
    render() {
        
        return (
            <Container fluid className="measureDetails">
                <Grid>
                    <Grid.Column width={4} as="h4">
                        QualityDashboard
                            </Grid.Column>
                    {/* <Grid.Column width={3} className="middleColumn">
                        year
                        <Dropdown
                            placeholder='Select...'
                            selection
                            options={this.props.measureDetailsData.dropDownData.options}
                            onChange={this.onDropdownChange}
                        />
                    </Grid.Column> */}
                    <Grid.Column width={11} textAlign='right' >
                        <DateComponent dates={this.props.dates} />
                    </Grid.Column>
                </Grid>
                <Grid>
                    <Grid.Column width={15} as="h4">
                        <MasterTab {...this.state}{...this.props} />
                    </Grid.Column>
                </Grid>
            </Container>
        )
    }
}

QualityDashboard.defaultProps = {
    measureDetailsData: {
        "dropDownData": {
            "options": [
                {
                    "value": "2018",
                    "text": "2018"
                },
                {
                    "value": "2019",
                    "text": "2019"
                },
                {
                    "value": "2020",
                    "text": "2020"
                }
            ]
        },
        "headerLabelData": {
            "name": "503709- Web demo Practice"
        }
    },
    masterTabProp: [
        {
            menuItem: 'PRACTICE',
            cssClass: '',
            activeIndex: 1,
            icon: 'users',
            defaultActiveIndex: true,
            router: 'MeasureDetailsHeader',
            "iconUrl": "../../assets/svg/practice.svg",
            measureDetailsHeaderProps: [
                "MasterDataTables"
            ]
        },
        {
            menuItem: 'CLINICIANS',
            cssClass: '',
            activeIndex: 2,
            icon: 'users',
            defaultActiveIndex: false,
            router: 'MeasureDetailsHeader',
            "iconUrl": "../../assets/svg/clinician.svg",
            measureDetailsHeaderProps: [
                "MasterAccordion"
            ]
        },
        {
            menuItem: 'LOCATIONS',
            cssClass: '',
            activeIndex: 3,
            icon: 'users',
            defaultActiveIndex: false,
            router: 'MeasureDetailsHeader',
            "iconUrl": "../../assets/svg/ehr.svg",
            measureDetailsHeaderProps: [
                "MasterAccordion"
            ]
        }
    ]
}
export default QualityDashboard;
