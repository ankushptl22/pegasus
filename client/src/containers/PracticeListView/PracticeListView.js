import React, { Component } from 'react';
import MasterFIGmdListView from '../../components/MasterFIGmdListView/MasterFIGmdListView';
import fig from '../../json/MasterFIGmdListView.json';

class PracticeListView extends Component {

    render() {
                return (
            <MasterFIGmdListView figmdListViewProp={fig} />
        )
    }
}

export default PracticeListView;