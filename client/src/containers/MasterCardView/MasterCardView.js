import React, { Component } from 'react';
import MasterCardWidget from '../../hoc/MasterCardWidget/MasterCardWidget';
import WidgetProperty from '../../json/WidgetProperty.json';
import ColumnChartData from '../../json/ColumnChartData.json';
import ColumnChart from '../../components/Amchart/ColumnChart';
import MasterHeader from '../../components/MasterHeader/MasterHeader'
const WrappedHeaderData = MasterCardWidget([MasterHeader, ColumnChart], WidgetProperty.PracticeProperty);

class MasterCardView extends Component {
    render() {
        return (
            <WrappedHeaderData genericData={ColumnChartData} />
        )
    }
}

export default MasterCardView;


