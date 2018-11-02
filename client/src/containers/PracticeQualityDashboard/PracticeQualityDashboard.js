import React, { Component } from 'react';
import MockData from '../../json/QualityDashboard.json';
import QualityDashboard from '../../containers/QualityDashboard/QualityDashboard';
import Dates from '../../json/DateComponentData.json'
class PracticeQualityDashboard extends Component {
    state={
        dates:{
            updated: "",
            startDate: "",
            endDate: ""
        }
    }
    componentDidMount(){
        this.setState({...this.state,dates:{...Dates}})
    }
    render() {
        return (
            <QualityDashboard {...this.state} {...this.props} QualityDashboardData={MockData} />
        )
    }
}

export default PracticeQualityDashboard;