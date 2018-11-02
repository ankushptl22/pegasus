import React, { Component } from "react";
import {
  Header,
  Grid,
  Label,
  Form,
  Input,
  Button,
  Icon,
  Menu,Link
} from "semantic-ui-react";
import "./LoginLeft.less";
import Footer from "../../components/MasterFooter";
import LoginLeft from "./LoginLeft";
import loginJson from "../../json/LoginLeft.json";
import { NavLink } from "react-router-dom";

class ForgotPassword extends Component {
  constructor(props) {
    super(props);

    /**
     *  Temporary state
     *  to check, UI is working or not
     */
    this.state = {
      // info:this.props.loginleftProp
      // text:"For assistace"
    };
  }

  render() {
    return (
      <Grid columns={2} divided>
        <Grid.Column>
          <LoginLeft loginleftProp={loginJson} />
        </Grid.Column>

        <Grid.Column textAlign="left" verticalAlign="middle">
          <Header>
            <Menu.Item name="profile" as={NavLink} to="/login">
              <Icon name="arrow left" size="large" color="black" />
            </Menu.Item>

            <Header.Content>Forgot password</Header.Content>
            <Header.Subheader>Recover Your Registry Account</Header.Subheader>
          </Header>
          <Header.Subheader>Please Enter your Email address</Header.Subheader>
          <Form>
            <Form.Field control={Input} required width={10} />
            <Button basic type="submit"  as={NavLink}to="/emailsend">
              Submit
            </Button>
            
          </Form>
        </Grid.Column>
      </Grid>

      );
  }
}
export default ForgotPassword;
