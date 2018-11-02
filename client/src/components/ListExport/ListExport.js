import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Dropdown} from 'semantic-ui-react';
import CsvDownloader from 'react-csv-downloader';
import Workbook from 'react-excel-workbook';
import  jsPDF from 'jspdf';




class ListExport extends Component {
  constructor(props) {
    super(props);
    this.state = {};

}

               // this funtion is to create pdf
                pdf=()=>{
                  var doc = new jsPDF();
                
                this.props.listExportProp.map((employee, i)=>{ 
                      doc.text(10, 5 + (i * 10), 
                          "id :" + employee.id +
                          " Name: " + employee.name+
                          "currentStatus:"+employee.currentStatus
                          );
                          
                  });
                   (  doc.save(this.props.labels.pdf))
              }



                // this  is to create EXL
               example = (
                <div className="row text-center" >
              
                  <Workbook filename={this.props.labels.Exl} element={<p >EXL</p>}>
                    <Workbook.Sheet data={this.props.listExportProp} name="Sheet A">
                      <Workbook.Column label="id" value="id"/>
                      <Workbook.Column label="name" value="name"/>
                      <Workbook.Column label="currentStatus" value="currentStatus"/>
                    </Workbook.Sheet>
                  
                  </Workbook>
                </div>
               )  


  render() {
   
 
    return (
           
            // this return statement is render the dropdown list

            <Dropdown text='Export'>
                <Dropdown.Menu>
                
                <Dropdown.Item text='PDF' onClick={this.pdf}/>
                <Dropdown.Item text='CSV'  >      
                       {/* this tag is used to download csv file */}
                     <CsvDownloader
                                filename={this.props.labels.csv}
                                separator=";"
                                datas={this.props.listExportProp}
                                > CSV                             
                   </CsvDownloader>
                       
                </Dropdown.Item>
                <Dropdown.Item text='EXL'  >
                     {this.example}
                               </Dropdown.Item>
                
                </Dropdown.Menu>
            </Dropdown>
                
    )
  }
}

// Specifies the default values for props:
ListExport.defaultProps = {
  labels: {
    pdf: 'ListViewCard.pdf',
    csv: 'ListViewCard.csv',
    Exl: 'ListViewCard.xlsx',
    
},
  listExportProp: [
      {
        id: '437102',
        name: 'UCLA Hospital',
        currentStatus: 'In-active',
      
      },
      {
        id: '437103',
        name: 'UCLA Hospital2',
        currentStatus: 'In-active',
        
      }
  ]
};

ListExport.propTypes = {
 listExportProp: PropTypes.array.isRequired
};
export default ListExport;
