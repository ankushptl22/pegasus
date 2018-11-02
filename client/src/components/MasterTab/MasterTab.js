import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Tab } from 'semantic-ui-react';
import * as AllComponents from '../../json/NavigationMapping';

class MasterTab extends Component {
    constructor(props) {
        super(props);
        this.state = {};
  
    }

    // this will call createPanes function to create tabs as per provided props
    componentDidMount() {
        this.createPanes(this.props.masterTabProp);
    }

    // this funtion is to create panes
    createPanes(masterTabProp) {    
        let panes = [];
        var DynamicComponent;
        masterTabProp.map((singleTab, index) => {
            let ChildComp = AllComponents[''+singleTab.router];
            panes.push({
                menuItem: singleTab.menuItem,
                render: () => (
                    <Tab.Pane>
                        <ChildComp />
                    </Tab.Pane>
                )
            });
        });
        this.setState({ panes: panes });
    };

    // this function will handle click event
    onTabChangeHandler(e){
    // console.log(e);
    };

    // render function for MasterTabs
    render() {
        const { masterTabProp, panes } = this.state;
        return (
            <Tab
                menu={{ secondary: true, pointing: true }}
                panes={panes}
                onTabChange={this.onTabChangeHandler}
            />
        );
    }
}

// Specifies the default values for props:
MasterTab.defaultProps = {
    masterTabProp: [
        {
            menuItem: 'Practice Info',
            cssClass: '',
            activeIndex: 1,
            icon: 'users',
            defaultActiveIndex: true,
            router: 'MasterFIGmdListView'
        },
        {
            menuItem: 'Clinician Info',
            cssClass: '',
            activeIndex: 2,
            icon: 'users',
            defaultActiveIndex: false,
            router: 'PracticeListView'
        }
    ]
};

MasterTab.propTypes = {
    masterTabProp: PropTypes.array.isRequired
};

export default MasterTab;
