import React, { Component } from 'react';
import { Grid, List, Icon, Header,Segment,Divider,Container,Label } from 'semantic-ui-react';
import './MasterPaymentDetails.less';


class MasterPaymentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {};  
  }

  render() {
    return ( <Container fluid>
    <Header as="h3" className={"ui-header"}>{this.props.MasterPaymentDetailsProps.Header}</Header>
    <Grid celled>
      <Grid.Row>
     <Grid.Column width={3} className={"backgroud-color-black"}>
        <Segment textAlign={"center"} className={"segment-bottom-radius"}>
        <p color="red">{this.props.MasterPaymentDetailsProps.Month}</p>
          <Divider className={"ui-divider"}></Divider>
          <Header as="h2" className={"ui-header"}>{this.props.MasterPaymentDetailsProps.Day}</Header>
          <span>{ this.props.MasterPaymentDetailsProps.Year }</span>
        </Segment>
     </Grid.Column>
     <Grid.Column width={6}>
        <List relaxed>
            <List.Item><span>Receipt No:  {this.props.MasterPaymentDetailsProps.ReceiptNo}</span></List.Item>
            <List.Item><span>Term Plan:  {this.props.MasterPaymentDetailsProps.TermPlan}</span></List.Item>
            <List.Item><span>Payment Mode:  {this.props.MasterPaymentDetailsProps.PaymentMode}</span></List.Item>
        </List>        
     </Grid.Column>
     <Grid.Column width={5} textAlign={"center"} className={"backgroud-color-black-white"}>
        <List relaxed>
            <List.Item><span>Amount Paid</span></List.Item>
            <List.Item><Header as="h1" className={"ui-header paid-amount-color"}>${this.props.MasterPaymentDetailsProps.AmountPaid}</Header></List.Item>
            <List.Item><span> {this.props.MasterPaymentDetailsProps.AmountPaidStatus}</span></List.Item>
        </List>      
     </Grid.Column>
     <Grid.Column width={2} textAlign={"center"} >
     <Icon className="download" ></Icon>
     </Grid.Column>
   </Grid.Row>
 </Grid></Container>)
  }
}

// Specifies the default values for props:
MasterPaymentDetails.defaultProps = {
  MasterPaymentDetailsProps: {
    Header: "PAYMENTS",
    Month: "Aug",
    Day: "05",
    Year: 2018,
    ReceiptNo: "1234rere567890",
    TermPlan: "Web",
    PaymentMode: "Credit Card",
    AmountPaid: "51,208",
    AmountPaidStatus:"SUCCESSFUL"
  }
};


export default MasterPaymentDetails;
