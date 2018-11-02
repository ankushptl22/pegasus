import React, { Component } from 'react';
import MasterTab from '../../components/MasterTab/MasterTab';
import MasterTabProp from '../../json/MasterTabProp.json';

class PracticeMasterTab extends Component {

    render() {
                return (
            <MasterTab masterTabProp={MasterTabProp.masterTabProp} />
        )
    }
}

export default PracticeMasterTab;