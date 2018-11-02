import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import LoginLeft from "./LoginLeft";
import loginJson from "../../json/LoginLeft.json";
import { connect } from "react-redux";
import { LoginPage } from "../LoginPage";
import MasterFooter from "../../components/MasterFooter";
import "./LoginLeft.less";
import loginJson1 from "../../json/LoginPage.json";
import FooterData from "../../json/navigation.json";


class LoginForm extends  Component {

    render() {
        return (
          <Grid.Column  className="login--signin  login--page">
            <Grid verticalAlign='middle' columns={2} style={{height: '100%'}}  >
              <Grid.Row stretched className="login--signin__row">
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <LoginLeft loginleftProp={loginJson}  />
                </Grid.Column>
                <Grid.Column mobile={16} tablet={8} computer={8}>
                  <LoginPage loginpageProp={loginJson1} />
                </Grid.Column>
              </Grid.Row>

              <Grid.Row className= "footer-copyright">
                <Grid.Column mobile={16} tablet={16} computer={16}>
                  {FooterData.FooterCopyRight.name}
                </Grid.Column >
              </Grid.Row>
            </Grid>
          </Grid.Column >
        );
    }
}

export default LoginForm;
