import React, { Component } from 'react';
import { Grid, Label } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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

    const heads = this.state.tableSchema;
    const columnHeadRow = [];
    this.state.tableData.map((data, i) => {
      debugger;
      this.state.tableSchema.map((schema, index) => {
        let key = Object.keys(schema);
        //if data matches to schema start
        if (data[key] !== undefined) {
          let componentObj = schema[key].component;
          let childCompProps = [];
          let propsString = {};
          let styleObject = {};
          const GridColumn = "Grid.Column";
          //header rows section start
          // if (columns.length !== this.state.tableSchema.length) {
          styleObject["key"] = key;
          styleObject["style"] = schema[key].style;
          if (columns.length !== Object.keys(this.state.tableData[0]).length) {
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
              // <Grid.Column>
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

      dataColumns.push(
        <Grid.Column style={{ width: '10%',top: '50%',position:'realtive',left:'20px'  }}>
          <Link to="/landingPage/MeasureDetails" >
            View Details
           </Link>
        </Grid.Column>
      )

      dataRow.push(
        <Grid.Row key={i} className="clickable" style={{ cursor: 'pointer' }}>
          {[...dataColumns]}
        </Grid.Row>)

      dataColumns = [];
    })

    this.setState({ columnsHead: columns, columnLength: this.state.tableSchema.length, columnsData: dataRow });
  }

  CreateDyanamicComponent = (componentName, propsArray) => {
    const DyanamicComp = componentName;
    const comp = React.createElement(DyanamicComp, propsArray);
    return comp;
  }

  render() {
    return (
      <div>
        <Grid columns={this.state.columnLength}>
          <Grid.Row>
            {this.state.columnsHead}
          </Grid.Row>
          {this.state.columnsData}
        </Grid>
      </div>
    );
  }
}

export default MasterDataTables;
