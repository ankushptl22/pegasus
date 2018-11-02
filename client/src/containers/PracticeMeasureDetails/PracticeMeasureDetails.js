import React, { Component } from 'react';
import MeasureDetailsData from '../../json/navigation.json';
import MeasureDetails from '../MeasureDetails/MeasureDetails'
class PracticeMeasureDetails extends Component {
    render() {
        return (
            <MeasureDetails MeasureDetailsData={MeasureDetailsData} />

        )
    }
}

export default PracticeMeasureDetails;
