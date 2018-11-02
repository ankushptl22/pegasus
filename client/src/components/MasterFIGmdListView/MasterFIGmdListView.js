import React, { Component } from "react";
import PropTypes from 'prop-types'
import { Card, Icon, Image, Label, Grid, Divider, Checkbox, Item, List, Dropdown } from "semantic-ui-react";
import "./MasterFIGmdListView.less";
import ListExport from "../../components/ListExport/ListExport";
import { Link } from 'react-router-dom';

const practiceLogo = '../../assets/svg/user_profile.png';
const agreementIcon = '../../assets/svg/agreement_icon.svg';
const options = [
  { key: 1, text: 'pdf', value: 1 },
  { key: 2, text: 'xls', value: 2 }
]

/**
 *  MasterFIGmdListView class
 */
class MasterFIGmdListView extends Component {
  /**
   * MasterFIGmdListView constructor
   *
   * @param {*} props
   */
  constructor(props) {
    super(props);

    /**
     *  Temporary state
     *  to check, UI is working or not
     */
    this.state = {};
  }

  /**
   *  Render funtion
   *
   */
  render() {
    const { labels, data } = this.props.figmdListViewProp;

    /**
     *  This will iterate an object and render it with UI
     */
    const cards = data.map((singleCard, index) => {
      /**
       *  This will render complete card view for a single object passed from through the props
       */
      return (
        <Card className="figmd-list_view" key={index} mobile={16} tablet={4} computer={4} largescreen={4} widescreen={4}>

          {/* Right side corner lable - Active/Inactive */}
          <Label className="status-label" corner="right">
            <span className=" status-label--position status-label_action">{singleCard.currentStatus}</span>
          </Label>

          {/* Main card content */}
          <Card.Content className="spractice--card_body" mobile={16} tablet={4} computer={4} as={Link} to={{ pathname: "/landingPage/PracticeInfoView", props: { singleCard } }}>

            <Grid className="practice-card--header" >

              {/* Logo on the card */}
              <Item.Group className="practice-card_group">
                <Item className="practice-card_items">
                  <Item.Image className="logo-practice" src={practiceLogo} />

                  <Item.Content className="singlecard__group--content">
                    <Item.Meta as='h3' className="singlecard__group">
                      {/* ID name with value(data) */}
                      <span className="singlecard__id">{labels.id + ": " + singleCard.id}</span>
                      {/* button like lable - Paid */}
                      <Label className="singlecard-payment__status" circular>
                        Paid
                      </Label>
                      <Image className="singlecard-stamp" src={agreementIcon} />
                      {/* <Label  > </Label> */}
                    </Item.Meta>

                    <Item.Header>
                      <span className='singlecard-name'>
                        {/* Name of Hospital/Clinic/Medical */}
                        <Card.Header>{singleCard.name}</Card.Header>
                      </span>
                    </Item.Header>

                    <Item.Description >
                      {/* Progress of the practice */}
                      <Label className="singlecard-status__circular" circular>
                        {singleCard.progressStatus}
                      </Label>
                    </Item.Description>

                  </Item.Content>
                </Item>
              </Item.Group>

            </Grid>

            {/* Address of Hospital/Clinic/Medical */}
            <p className="singleCard__address_detail">{singleCard.address}</p>

            {/* Layout for contact details */}
            <List className="singleCard-contact_details" horizontal >
              <List.Item>

                <List.Content>
                  <Icon className="singlecard-call__icon" name="call" />{singleCard.cell}
                </List.Content>
              </List.Item>

              <List.Item>

                <List.Content>
                  <Icon name="mail" />{singleCard.mail.slice(0, 12) +
                    (singleCard.mail.length > 12 ? "..." : "")}
                </List.Content>
              </List.Item>
            </List>

            <Divider />

            {/* -------Card Footer------ */}
            {/* Layout for counters */}
            <Grid columns={3} relaxed className="practice--card_footer">
              <Grid.Column className="practice--card-footer__columns" >
                <Icon name='hospital' />
                <p className="provider_groups">{labels.serviceCount}</p>
                <p className="singlecard-count">{singleCard.serviceCount}</p>
              </Grid.Column>

              <Grid.Column className="practice--card-footer__columns" >
                <Icon name='hospital' />
                <p className="provider_groups">{labels.tinCount}</p>
                <p className="singlecard-count">{singleCard.tinCount}</p>
              </Grid.Column>
              <Grid.Column className="practice--card-footer__columns">
                <Icon name='hospital' />
                <p className="provider_groups">{labels.locationCount}</p>
                <p className="singlecard-count">{singleCard.locationCount}</p>
              </Grid.Column>
            </Grid>
          </Card.Content>
          <Divider />
          <Card.Content className="spractice--card_body" mobile={16} tablet={4} computer={4}>
            {/* Expand button at the bottom */}
            <Grid className="export-container" >
              <Grid.Column className="export-dropdown" width={4}>


                <ListExport />
              </Grid.Column>
            </Grid>
          </Card.Content>

        </Card>
      );
    });

    /**
     *  return of the render from MasterFIGmdListView
     */
    return <Card.Group className="practice-page_container">{cards}</Card.Group>;
  }
}

// Specifies the default values for props:
MasterFIGmdListView.defaultProps = {
  figmdListViewProp: {
    labels: {
      id: "Pract. ID.",
      logo: "../../../assets/svg/call.svg",
      name: "Clinic Name",
      currentStatus: "Active/In-active Status",
      progressStatus: "Status",
      address: "Address",
      cell: "Contact No.",
      mail: "Email ID.",
      serviceCount: "Clinician/s",
      tinCount: "TIN/s",
      locationCount: "Location/s",
      ehrCount: "EHR/s"
    },
    data: [
      {
        id: "437102",
        logo: "../../../assets/images/logo.jpg",
        name: "UCLA Medical Center",
        currentStatus: "Active",
        progressStatus: "Status 5: Production (Onboard)",
        address: "1250 16th street santa monica, CA 90404",
        cell: "424-259-6000",
        mail: "ulcamedicalcenter@gmail.com",
        serviceCount: "173",
        tinCount: "28",
        locationCount: "170",
        ehrCount: "12"
      },
      {
        id: "437103",
        logo: "../../../assets/images/logo.jpg",
        name: "UCLA Hospital",
        currentStatus: "In-active",
        progressStatus: "Status 7: Testing (Onboard)",
        address: "FIGMD baner pashan road",
        cell: "424-259-6000",
        mail: "ulcamedicalcenter@gmail.com",
        serviceCount: "173",
        tinCount: "28",
        locationCount: "170",
        ehrCount: "12"
      }
    ]
  }
};


MasterFIGmdListView.propTypes = {
  figmdListViewProp: PropTypes.object.isRequired,
}

export default MasterFIGmdListView;
