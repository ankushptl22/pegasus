import React, { Component } from "react";
import { Label, Input, Header, Button, Checkbox, Image, Grid, Segment, Form } from 'semantic-ui-react';
import "./LoginLeft.less";
import PropTypes from 'prop-types';

class LoginLeft extends Component {



    render() {
        const { logo, first,info } = this.props.loginleftProp;
        const MainLogo = require('../../../assets/media/img/logo/figmd_logo.svg');
        return (

        <Grid.Row className='login__wrapper-1'>
          <Grid.Column className='login__wrapper-1'>
            <Grid.Column  className="login__contanier">
              <Grid.Column  className="login__logo">
                <Image src={MainLogo} alt={logo} />
              </Grid.Column >
              <Grid.Column  className="login__contanier-info">
                <Header as='h4' className="login--title__h4">{first}</Header>
                {info.map((data,i) => {
                  return (
                    <Header as='h5' className="login--title__h5"  key ={i} >
                      {data}
                    </Header>
                  )
                })}
              </Grid.Column >
            </Grid.Column >
          </Grid.Column >
        </Grid.Row>
            );

        LoginLeft.propTypes = {
            loginleftProp: PropTypes.object.isRequired,
        }
    }
}



export default LoginLeft;
