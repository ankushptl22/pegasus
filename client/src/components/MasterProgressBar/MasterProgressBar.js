import React, { Component } from 'react';
import { Icon, Progress, Segment, Divider,Popup } from 'semantic-ui-react';
import './MasterProgressBar.less';

class MasterProgressBar extends Component {
  constructor(props) {
    super(props);
    //now set default vaule in case if it is not in props. 
    //this.state = { progressData: this.props.progressData };

  }

  render() {
    const benchmark = [...this.props.performanceData.benchMark];

    const belowPosBenchmark = benchmark.filter((item) => {
      return item.position != null && item.position.toLowerCase() === "below";
    });

    const abovePosBenchmark = benchmark.filter((item) => {
      return item.position != null && item.position.toLowerCase() === "above";
    });

    const belowPosBenchmarkJsx = belowPosBenchmark.map((posData, index) => {
      return ( <Popup trigger={<Segment.Group className="mark-parent cms-bench-mark" style={{ left: `${posData.data}%` }}>
        <Segment textAlign="center" className="mark-child" > <Icon fitted name="sort up" size="big" className="master-icon sort-up" /></Segment>
        <Segment textAlign="center" className="mark-child" >{posData.data} % </Segment>
      </Segment.Group>} content={posData.label}  inverted />);

    });

    const abovePosBenchmarkJsx = abovePosBenchmark.map((posData, index) => {
      return (<Popup trigger={<Segment.Group className="mark-parent" style={{ left: `${posData.data}%` }}>
        <Segment textAlign="center" className="mark-child" > {posData.data} % </Segment>
        <Segment textAlign="center" className="mark-child" ><Icon fitted name="sort down" size="big" className="master-icon" /></Segment>
      </Segment.Group>} content={posData.label}  inverted />);

    });

     
    let progressColorCode =  "no-box-shadow no-padding no-margin parent-progress " +this.props.performanceData.colorcode;

    return (
      <Segment.Group horizontal className={progressColorCode}>
        <Segment basic textAlign="center" className="no-box-shadow no-border no-margin width-90 ">
          {abovePosBenchmarkJsx}
          <Segment basic className='progress-segment' textAlign='left'>
            <Segment basic className="measure-performance-bar" style={{ left: `${this.props.performanceData.measurePerformance}%` }} >I</Segment>
            <Progress className="progress-bar" percent={this.props.performanceData.measurePerformance} fitted color="black" size="tiny" />
          </Segment>
          {belowPosBenchmarkJsx}
        </Segment>
        <Segment basic textAlign='left' className="no-box-shadow no-margin font-size-20 width-10 vertical-align-middle" >
        <Popup trigger={<label className="progress-bar">{this.props.performanceData.measurePerformance} %</label>} content={this.props.performanceData.measurePerformanceText}  inverted />  </Segment>
      </Segment.Group>
    );
  }


}
MasterProgressBar.defaultProps = {
  performanceData: {
    measurePerformanceText: "Achieved Performance",
    measurePerformance: 50,
    benchMark: [
      {
        label: "Registry Average",
        data: 80,
        position: "above",
        colorcode:""
      },
      {
        label: "Registry BenchMark",
        data: 20,
        position: "below",
        colorcode:""
      },
      {
        label: "CMS Average",
        data: 40,
        position: "below",
        colorcode:""
      }
    ],
    difference: 5,
    mean: 5,
    colorcode:""
  }
};

export default MasterProgressBar;
