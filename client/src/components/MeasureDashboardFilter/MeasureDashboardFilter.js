import React, { Component } from 'react';
import { Segment, Icon, Label, Grid, Dropdown, Header, Menu, Container, Checkbox } from 'semantic-ui-react';
import { DateInput } from 'semantic-ui-calendar-react';
//import '../../components/MeasureDashboardFilter/MeasureDashboardFilter.less';
import './MeasureDashboardFilter.less'


class MeasureDashboardFilter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      practice: "",
      year: "",
      duration: "",
      customrange: false,
      fromdate: "",
      todate: "",
      measureSet: ""

    };

  };
  onPracticesChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  };
  onYearChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  onDurationChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  onhandleFromDateChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  onhandleToDateChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }
  onhandleToDateChange = (event, { name, value }) => {
    if (this.state.hasOwnProperty(name)) {
      this.setState({ [name]: value });
    }
  }


  onCustomRangeChange = () => {
    this.setState({ customrange: !this.state.customrange });
  }
  render() {

    const datefromcolumns = this.state.customrange ?
      <Grid.Column width={2}>
        <p>From Date</p>
        <DateInput name="fromdate" value={this.state.fromdate} onChange={this.onhandleFromDateChange} />
      </Grid.Column> : null;

    const datetocolumns = this.state.customrange ?
      <Grid.Column width={2}>
        <p>To Date</p>
        <DateInput name="todate" value={this.state.todate} onChange={this.onhandleToDateChange} />
      </Grid.Column> : null;
    const { practiceProp, yearProp, durationProp, measureSetProp } = this.props;

    const disableElement= (this.state.customrange) ? true : false;
    // const measureSetOption = measureSetProp.data.map((data) => {
    //   return (<Dropdown.Item>
    //     <Icon name='star' className='right floated' />
    //     {data.text}
    //   </Dropdown.Item>);
    // });


    return (
      <Container>
        <Header textAlign="left" as='h3'>Measure filter</Header>
        <Container>
          <Grid stackable>
            <Grid.Row>
              <Grid.Column width={3}>
                <p>{practiceProp.label}</p>
                <Dropdown name="practice" selection options={practiceProp.data} onChange={this.onPracticesChange} />
              </Grid.Column>
              <Grid.Column width={2}>
                <p>{yearProp.label}</p>
                <Dropdown name="year" selection disabled={disableElement}  options={yearProp.data} onChange={this.onYearChange} />
              </Grid.Column>
              <Grid.Column className="border-right" width={2}>
                <p>{durationProp.label}</p>
                <Dropdown name="duration" disabled={disableElement} selection options={durationProp.data} onChange={this.onDurationChange} />
              </Grid.Column>
              <Grid.Column width={2}>
                <p></p>
                <Checkbox name="customrange" label='Custom Range' checked={this.state.customrange} onChange={this.onCustomRangeChange} />
              </Grid.Column>
              {datefromcolumns}
              {datetocolumns}
              <Grid.Column width={3}>
                <p>{measureSetProp.label}</p>
                <Dropdown name="measureset" selection options={measureSetProp.data} onChange={this.onMeasureChange} />
                {/* <Dropdown selection className='icon' onChange={this.onMeasureSetChange} >
                  <Dropdown.Menu>
                    {measureSetOption}
                  </Dropdown.Menu>
                </Dropdown> */}
              </Grid.Column>

            </Grid.Row>
          </Grid>
        </Container>
      </Container>

    );
  }
}

MeasureDashboardFilter.defaultProps = {
  practiceProp: {
    data: [
      {
        "key": "1",
        "text": "537908 - Web Demo Practice",
        "value": "1"
      },
      {
        "key": "2",
        "text": "537901 - Demo Practice",
        "value": "2"
      },
      {
        "key": "3",
        "text": "537902 - Web Practice",
        "value": "3"
      }
    ],
    label: "Select Your Practice"
  },
  yearProp: {
    data: [
      {
        "key": "1",
        "text": "2018",
        "value": "1"
      },
      {
        "key": "2",
        "text": "2017",
        "value": "2"
      },
      {
        "key": "3",
        "text": "2016",
        "value": "3"
      }
    ],
    label: "Select Year"
  },
  durationProp: {
    data: [
      {
        "key": "1",
        "text": "2018Q4",
        "value": "1",
        "year": "2018"
      },
      {
        "key": "2",
        "text": "2018Q3",
        "value": "2",
        "year": "2018"
      },
      {
        "key": "1",
        "text": "2017Q4",
        "value": "1",
        "year": "2017"
      },
      {
        "key": "2",
        "text": "2017Q3",
        "value": "2",
        "year": "2017"
      },
      {
        "key": "1",
        "text": "2016Q4",
        "value": "1",
        "year": "2016"
      },
      {
        "key": "2",
        "text": "2016Q3",
        "value": "2",
        "year": "2016"
      }
    ],
    label: "Select Duration"
  },
  measureSetProp: {
    data: [
      {
        "key": "1",
        "text": "2018 MIPS Measure",
        "value": "1", "icon": 'star outline'
      },
      {
        "key": "2",
        "text": "Registry Measure",
        "value": "2"
        , "icon": 'star'
      }
    ],
    label: "Select Measure Set",
    defaultkey: "2"
  },

}
export default MeasureDashboardFilter;

