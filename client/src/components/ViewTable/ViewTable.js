import React from 'react';
import {Table,Segment} from 'semantic-ui-react';
import PropTypes from "prop-types";
import './ViewTable.less'

class ViewTable extends React.Component{

  constructor(props) {
     super(props);
     this.state = {};
  }

generateHeaders() {

    const { cols } = this.props.viewTableDataProp;
  
    return cols.map(function(colData,i) {
        return <Table.HeaderCell key={i}>{colData.label}</Table.HeaderCell>;
    });
}

generateRows() {

    const { cols, data } = this.props.viewTableDataProp;

    return data.map(function(item,index) {       
        var cells = cols.map(function(colData,i) {
            return <Table.Cell key={i}>{item[colData.key]}</Table.Cell>;
        });
        return  <Table.Row key={index}>{cells}</Table.Row>;
    });
}

render() {  
  
    var headerComponents = this.generateHeaders(),
        rowComponents = this.generateRows();

    const { Labels } = this.props.viewTableDataProp;
    return (
            <Segment basic>
               <Table celled>
                  <Table.Header><Table.Row>{headerComponents}</Table.Row></Table.Header>
                  <Table.Body>{rowComponents}</Table.Body>
              </Table>
              <p><b>{Labels}</b></p>
            </Segment>
         );
     }

}

ViewTable.defaultProps = {
  viewTableDataProp: {
    data: [ 
      { 
        "_QUARTER": "2018Q1", 
        "_ALL": "25471",
        "_MET(+)": "204124" ,
        "_NON MET(-)": "2013"
      },

      { 
        "_QUARTER": "2017Q4", 
        "_ALL": "25472",
        "_MET(+)": "204123" ,
        "_NON MET(-)": "2010"
      },

      { 
        "_QUARTER": "2017Q3",
        "_ALL": "25473", 
        "_MET(+)": "204122" ,
        "_NON MET(-)": "2011"
      }
     ],
    cols: [ 
        { 
          "key": "_QUARTER", 
          "label": "QUARTER" 
        },

        { 
          "key": "_ALL",
          "label": "ALL" 
        }, 

        { 
          "key": "_MET(+)", 
          "label": "MET(+)" 
        },

        { 
          "key": "_NON MET(-)",
          "label": "NON MET(-)" 
        }
      ],
     Labels: "(+) - Met,  (-) - Not Met"
    }
  };

ViewTable.propTypes = {
  viewTableDataProp: PropTypes.object.isRequired
};

export default ViewTable;


    