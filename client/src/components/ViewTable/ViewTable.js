import React from 'react';
import {Table} from 'semantic-ui-react';
import PropTypes from "prop-types";
import './ViewTable.less'

class ViewTable extends React.Component{
  constructor(props) {
     super(props);
     this.state = {};
  }

generateHeaders() {
    const { cols, data } = this.props.ViewTableDataProp;
  
    return cols.map(function(colData) {
        return <Table.HeaderCell key={colData.key}>{colData.label}</Table.HeaderCell>;
    });
}

generateRows() {

    const { cols, data } = this.props.ViewTableDataProp;

    return data.map(function(item) {       
        var cells = cols.map(function(colData) {
            return <Table.Cell>{item[colData.key]}</Table.Cell>;
        });
        return  <Table.Row key={item.id}>{cells}</Table.Row>;
    });
}

render() {
    var headerComponents = this.generateHeaders(),
        rowComponents = this.generateRows();

    return (
             <Table celled>
                  <Table.Header><Table.Row>{headerComponents}</Table.Row></Table.Header>
                  <Table.Body>{rowComponents}</Table.Body>
             </Table>
         );
     }

}

ViewTable.defaultProps = {
  ViewTableDataProp: {
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
      ]
    }
  };

ViewTable.propTypes = {
  ViewTableDataProp: PropTypes.object.isRequired
};

export default ViewTable;


    