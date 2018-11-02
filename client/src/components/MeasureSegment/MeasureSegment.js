import React, { Component } from 'react';
import { Segment, Statistic, Icon, Grid } from 'semantic-ui-react';
import './MeasureSegment.less';

class MeasureSegment extends Component {
    render() {
        const { data } = this.props.measureProp;
        const measures = data.map((measuresData, index) => {
            return (
                <Grid key={index} className="singleGrid">
                    <Statistic>
                        <p>{measuresData.label}</p>
                        <Statistic.Value text >{measuresData.percentage}%</Statistic.Value>
                    </Statistic>
                </Grid>
            );
        });

        return <Grid className="gridCollection">
            <Grid className="singleGrid">
                <Icon size='huge' name={this.props.measureProp.arrow} color='green' />
                <Icon size='huge' name={this.props.measureProp.icon} color='green' />
            </Grid>
            {measures}
        </Grid>;
    }
}

MeasureSegment.defaultProps = {
    measureProp: {
        data: [
            {
                label: "Achieved Performance",
                percentage: "78.08"
            },
            {
                label: "CMS Benchmark",
                percentage: "45"
            },
            {
                label: "Registry Average",
                percentage: "85"
            }
        ],
        icon: "thumbs up outline",
        arrow: "arrow up"
    }
}
export default MeasureSegment;