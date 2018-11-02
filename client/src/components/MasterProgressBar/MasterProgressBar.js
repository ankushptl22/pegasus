import React, { Component } from 'react';
import { Icon, Progress, Segment, Divider } from 'semantic-ui-react';
import './MasterProgressBar.less';

class MasterProgressBar extends Component {
  constructor(props) {
    super(props);
    //now set default vaule in case if it is not in props. 
      //this.state = { progressData: this.props.progressData };
     
  }

  render() {
console.log(this.props.progressData)
    const cmsBenchMarkJsx = (this.props.progressData.isCmsBenchMark) ? <Segment.Group className="mark-parent cms-bench-mark" style={{ left: `${this.props.progressData.cmsBenchMark}%` }}>
      <Segment textAlign="center" className="mark-child" > <Icon fitted name="sort up" size="big" className="master-icon sort-up" /></Segment>
      <Segment textAlign="center" className="mark-child" >{this.props.progressData.cmsBenchMark} % </Segment>
    </Segment.Group> : null;

    const RegistryAverageJsx = (this.props.progressData.isRegistryAverage) ? <Segment.Group className="mark-parent" style={{ left: `${this.props.progressData.registryAverage}%` }}>
      <Segment textAlign="center" className="mark-child" > {this.props.progressData.registryAverage} % </Segment>
      <Segment textAlign="center" className="mark-child" ><Icon fitted name="sort down" size="big" className="master-icon" /></Segment>
    </Segment.Group> : null;

    let difference;

    if (this.props.progressData.difference === null)
      difference = ((this.props.progressData.isCmsBenchMark) ? this.props.progressData.cmsBenchMark : this.props.progressData.registryAverage) - this.props.progressData.percentPerformance;
    else
      difference = this.props.progressData.difference;

    let progressColorCode = (difference >= 0) ? "progressbar progress-bar-success" : (Difference >= mean) ? "progressbar progress-bar-warning" : "progressbar progress-bar-danger";

    return (
      <Segment.Group horizontal className="no-box-shadow no-padding no-margin">
        <Segment basic textAlign="center" className="no-box-shadow no-border no-margin width-90 ">
          {RegistryAverageJsx}
          <Segment basic className='progress-segment' textAlign='left'>
            <Segment basic className="measure-performance-bar" style={{ left: `${this.props.progressData.percentPerformance}%` }} >I</Segment>
            <Progress className={progressColorCode} percent={this.props.progressData.percentPerformance} fitted color="black" size="tiny" />
          </Segment>
          {cmsBenchMarkJsx}
        </Segment>
        <Segment basic textAlign='left' className="no-box-shadow no-margin font-size-20 width-10 vertical-align-middle" >
          <label className={progressColorCode}>{this.props.progressData.percentPerformance} %</label>  </Segment>
      </Segment.Group>
    );
  }


}
MasterProgressBar.defaultProps = {
  progressData: {
    percentPerformanceText: "Achieved Performance",
    percentPerformance: 0,
    cmsBenchMark: 50,
    isCmsBenchMark: false,
    registryAverage: 50,
    isRegistryAverage: true,
    difference: 5,
    mean: 5
  }
};

export default MasterProgressBar;
