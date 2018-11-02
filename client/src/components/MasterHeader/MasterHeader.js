import React, { Component } from 'react'
import { Grid, Header, Card, Feed, Item, Button, Container, Menu, Popup, Image, Label, Icon, MenuMenu, Divider } from "semantic-ui-react";
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import './MasterHeader.less';


import { pegasusLogo } from '../../json/navigation.json';


import { userProfileImage } from '../../json/navigation.json';



class MasterHeader extends React.Component {
  constructor(props) {
    super(props);

    {/*popup contents*/ }
    // const firstpopup = (
    //   <div style={{ textAlign: 'center' }} >
    //     <h3>Notifications</h3>
    //     <p>12 New users added    <span style={{ textAlign: 'right' }}>Just Now</span></p>
    //     <p>Received payment of 22 providers   <span style={{ textAlign: 'right' }}>32 min</span></p>
    //   </div>
    // )

    // const secondpopup = (

    //   <Grid divided columns={2}>
    //     <Grid.Row>
    //       <Header style={{ margin: 'auto' }}>Quick Actions</Header>
    //     </Grid.Row>
    //     <Grid.Column textAlign='center'>
    //       <Image src='../images/wireframe/image.png' size='small' style={{ margin: 'auto' }} /><br />
    //       <p>Generate Tickit</p>
    //     </Grid.Column>
    //     <Grid.Column textAlign='center'>
    //       <Image src='../images/wireframe/image.png' size='small' /><br />
    //       <p> Quick Action</p>
    //     </Grid.Column>

    //   </Grid>
    // )

    // const CardComp = (
    //   <Card.Content>
    //     <Feed>
    //       <Feed.Event>
    //               <Feed.Label image='/images/avatar/small/elliot.jpg' />
    //               <Feed.Content>
    //                 <p>Andrew Semon</p>
    //                 <p>Markandrew@gmail.com</p>
    //                 <p>Registry aadmin</p>
    //               </Feed.Content>
    //             <p>My Profile</p>
    //       </Feed.Event>
    //     </Feed>

    //     My Profile<br />

    //     setting<br /><br />
    //     <Link to="/login" className="btn btn-link">Logout</Link>
    //   </Card.Content>
    // )






    const CardComp = (
      <Card.Content>
        <Item.Group className="header__profileContent">
          <Item>
            <Item.Image size='tiny' className="header__profileContent--image" src={userProfileImage.iconUrl} />
            <Item.Content className="header__profileContent--Namesection">
              <Item.Header>Andrew Semon</Item.Header>
              <Item.Meta>
                <span>Markandrew@gmail.com</span>
              </Item.Meta>
              <Item.Meta>
                <span>Registry aadmin</span>
              </Item.Meta>
              <Button className="header__viewprofile--btn">View Profile</Button>
            </Item.Content>
          </Item>
          <Divider clearing />
          <Item>
            <Item.Content>
              <Item.Meta className="header__settinglink">Settings</Item.Meta>
              <Link to="/login" className="btn btn-link btn__logout">Logout</Link>
            </Item.Content>
          </Item>
        </Item.Group>
      </Card.Content>
    )

    {/**/ }
    // this.state = {
    //   icons: [
    //     {
    //       color: 'grey',
    //       name: 'bell outline',
    //       backgroundColor: 'none',
    //       content: firstpopup
    //     }, {
    //       color: 'grey',
    //       name: 'user',
    //       backgroundColor: 'none',
    //       content: secondpopup
    //     }, {
    //       color: 'grey',
    //       name: 'bell outline',
    //       backgroundColor: 'blue',
    //       content: CardComp
    //     },
    //     {
    //       color: 'grey',
    //       name: 'bell outline',
    //       backgroundColor: 'gold',
    //       content: 'You may search by genre, header, year and actors'
    //     }
    //   ]
    // }


    this.state = {
      icons: [
        {
          color: 'grey',
          name: 'question',
          backgroundColor: 'none',
          content: 'Help'
        },
        {
          color: 'grey',
          name: 'user outline',
          backgroundColor: 'none',
          content: CardComp
        }
      ]
    }

  }

  render() {


    const { icons } = this.state

    const popup = icons.map((singleIcon, index) => {
      return (<Popup flowing hoverable key={index} className="masterHeader__popup"
        trigger={<Icon circular color={singleIcon.color} className="masterHeader__profileIcon" style={{ backgroundColor: singleIcon.backgroundColor }} name={singleIcon.name} />}
        content={singleIcon.content} />)
    })

    return (
      <Container>
        <Menu secondary>
          {/* <Menu.Item>
              <span>Service Status</span>
              <Label color='yellow' circular size='mini' />
              <span>WEB TOOL IN PLANNED OUTAGE</span>
              <Label color='teal' circular size='mini' />
              <span>MIPS IS LIVE</span>
              <Label color='teal' circular size='mini' />
              <span>DASHBOARD IS LIVE</span>
              <Label color='teal' circular size='mini' />
              <span>RPC CONECTIVITY  IS LIVE</span>
            </Menu.Item> */}
          <Menu.Menu position='right'>
            {popup}
          </Menu.Menu>
        </Menu>
      </Container>
    )
  }

}
export default MasterHeader;
