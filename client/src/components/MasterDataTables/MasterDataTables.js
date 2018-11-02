import React, { Component } from 'react';
import { Grid, Label, Icon, Progress } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import MasterProgressBar from '../../components/MasterProgressBar/MasterProgressBar';
const subComponents = { Progress, Icon, MasterProgressBar, Link };
const events = {};
// const addToFavouriteHandler = () => {
//   alert('clicked adsad');
// }
class MasterDataTables extends Component {

  constructor(props) {
    super(props);
    this.state = {
      columnLength: 1,
      columnsHead: [],
      columnsData: '',
      tableSchema: this.props.tableSchema,
      tableData: this.props.tableData
    }
  }

  // addToFavouriteHandler=()=>{
  //   alert('clicked it');
  // }

  componentDidMount() {
    this.createGrid();
  }

  createGrid = () => {
    let columns = [];
    let dataColumns = [];
    let dataRow = [];
    const SubComponents = this.props.subComponents;

    const heads = this.props.tableSchema;
    const columnHeadRow = [];
    this.props.tableData.map((data, i) => {
      this.props.tableSchema.map((schema, index) => {
        let key = Object.keys(schema);
        //if data matches to schema start
        if (data[key] !== undefined) {
          let componentObj = schema[key].component;
          let childCompProps = [];
          let propsString = {};
          let styleObject = {};
          const GridColumn = "Grid.Column";
          //header rows section start
          // if (columns.length !== this.props.tableSchema.length) {
          styleObject["key"] = key;
          styleObject["style"] = schema[key].style;
          let customColumnClass = `fig-${key}`
          styleObject["className"] = `tablecolumn ${customColumnClass}`;

          if (columns.length !== Object.keys(this.props.tableData[0]).length) {
            let headerComp = (null);
            if (schema[key].header.trim() === "") {
              if (componentObj.value !== undefined) {
                if (componentObj !== null && componentObj !== undefined) {

                  let headerProps = [...componentObj.props];
                  let headerPropString = {};

                  headerProps.map((headerProp, j) => {
                    headerPropString[headerProp] = componentObj.value[headerProp];
                  })
                  headerComp = this.CreateDyanamicComponent(SubComponents[componentObj.name], headerPropString);
                }
              }
              else {
                headerComp = schema[key].header;
              }
            }
            else {
              headerComp = schema[key].header;
            }

            columns.push(
              // <Grid.Column key={index} styleObject >
              //   {headerComp}
              // </Grid.Column>
              React.createElement(GridColumn, styleObject, headerComp)
            )
          }
          //header rows section end

          //data rows section start
          let childrens = [];

          if (componentObj !== null && componentObj !== undefined) {
            if (componentObj.childrens !== undefined) {
              childrens = [...componentObj.childrens];
            }
            childCompProps = [...componentObj.props];
            var dataVal = data[key];
            childCompProps.map((prop, j) => {
              propsString[prop] = dataVal[prop];
            })

            if (this.props.events !== undefined) {
              if (schema[key].click !== undefined) {
                propsString['onClick'] = this.props.events[schema[key].click]; //this.addToFavouriteHandler;//schema[key].click
              }
            }

            let ChildComp = SubComponents[componentObj.name];
            const Col = this.CreateDyanamicComponent(ChildComp, propsString, [...childrens])
            dataColumns.push(
              // <Grid.Column>
              //   {this.CreateDyanamicComponent(ChildComp, propsString)}
              // </Grid.Column>
              React.createElement(GridColumn, styleObject, Col)
            )
          }
          else {
            dataColumns.push(
              //<Grid.Column>
              //   {/* <Label> */}
              //   {data[key]}
              //   {/* </Label> */}
              // </Grid.Column>
              React.createElement(GridColumn, styleObject, data[key])
            )
          }
          //data rows section end
        }
        //if data matches to schema end
      })

      let routeObject = {
        pathname: "/landingPage/MeasureDetails",
        state: {
          measureData: data
        }
      };
      dataColumns.push(
        <Grid.Column style={{ width: '10%' }}>
          <Link to={routeObject} >
            View Details
           </Link>
        </Grid.Column>
      )
      dataColumns.push(
        <Grid.Column style={{ width: '5%' }}>
          <Icon name="download" />
        </Grid.Column>
      )

      dataRow.push(
        <Grid.Row key={i} className="tableRow" style={{ cursor: 'pointer' }}>
          {[...dataColumns]}
        </Grid.Row>)

      dataColumns = [];
    })

    this.setState({ columnsHead: columns, columnLength: this.props.tableSchema.length, columnsData: dataRow });
  }

  CreateDyanamicComponent = (componentName, propsArray) => {
    const DyanamicComp = componentName;
    const comp = React.createElement(DyanamicComp, propsArray);
    return comp;
  }

  render() {
    return (
      <Grid className="table" columns={this.state.columnLength}>
        <Grid.Row className="tableHead tableRow">
          {this.state.columnsHead}
        </Grid.Row>
        {this.state.columnsData}
      </Grid>
    );
  }
}

MasterDataTables.defaultProps = {
  tableSchema: [
    {
      "favourite": {
        "header": "",
        "component": {
          "name": "Icon",
          "props": [
            "name"
          ],
          "value": {
            "name": "heart outline",
            "favoruite": false
          }
        },
        "style": {
          "width": "10%",
          "position": "relative",
          "top": "50%"
        },
        "click": "addToFavouriteHandler"
      }
    },
    {
      "id": {
        "header": "ID",
        "style": {
          "width": "5%",
          "position": "relative",
          "top": "50%"
        }
      }
    },
    {
      "measure": {
        "header": "MEASURE",
        "style": {
          "width": "30%",
          "position": "relative",
          "top": "50%"
        }
      }
    },
    {
      "performance": {
        "header": "ACHIEVED PERFORMANCE",
        "component": {
          "name": "MasterProgressBar",
          "props": [
            "progressData"
          ]
        },
        "style": {
          "width": "40%"
        }
      }
    }

  ],
  tableData: [
    {
      "favourite": {
        "name": "heart outline"
      },
      "id": "101",
      "measure": "Melanoma: Overutilizzation of imaging",
      "performance": {
        "progressData": {
          "percentPerformanceText": "Achieved Performance",
          "percentPerformance": 66.05,
          "cmsBenchMark": 45,
          "isCmsBenchMark": true,
          "registryAverage": 82,
          "isRegistryAverage": true,
          "difference": 5,
          "mean": 5
        }
      }
    }],
  subComponents: subComponents,
  events: events
}

export default MasterDataTables;
