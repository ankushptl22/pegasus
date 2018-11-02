import React, { Component } from 'react';
import { Card, Icon, Grid, Dropdown,Segment} from 'semantic-ui-react';
import { Link } from "react-router-dom";
import PropTypes from "prop-types"
import './MeasureDetails.less'
import ViewTableDataProp from '../../json/ViewTable.json';
import ViewTable from '../../components/ViewTable';


class MeasureDetails extends Component {
    constructor() {
        super();
        this.onDropdownChange = this.onDropdownChange.bind(this)
    }

    onDropdownChange() {
        // console.log('onchange has been called');
    }
    render() {
        return (
            <Card fluid className="measureDetails">
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
                    </Card.Header>
                </Card.Content>
                <Segment basic>
                         <ViewTable ViewTableDataProp={ViewTableDataProp}/>
                         <p><b>(+) - Met,  (-) - Not Met,  (DEN EXCL.) - Denominator Exclusion,   (NUM EXCL.) - Numerator Exclusion</b></p>
                </Segment> 
                <Card.Content>
                </Card.Content>
            </Card>
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
    }
}

MeasureDetails.propTypes = {
    MeasureDetailsData: PropTypes.object.isRequired
};


export default MeasureDetails;
