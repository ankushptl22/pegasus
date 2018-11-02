import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Header, Grid, Icon, Label, Input, Checkbox, Button, Form, Menu } from "semantic-ui-react";
import "./LoginLeft.less";
import PropTypes from 'prop-types';


import { userActions } from '../../redux/_actions';

class LoginPage extends React.Component {
    constructor(props) {
        super(props);

        // reset login status
        this.props.dispatch(userActions.logout());

        this.state = {
            username: '',
            password: '',
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.setState({ submitted: true });
        const { username, password } = this.state;
        const { dispatch } = this.props;
        if (username && password) {
            dispatch(userActions.login(username, password));
        }
    }

    render() {
        const { loggingIn } = this.props;
        const { username, password, submitted } = this.state;
        const { username1,password1 } = this.props.loginpageProp;

        return (

            <Grid.Column  className="login__wrapper-2">
              <Grid.Column  className="login__contanier">
                <Grid.Column  className="login__signin">
                  <Grid.Column  className="login__head">
                    <Header as='h3' className="login__title">Login To Your Account</Header>
                  </Grid.Column >

                  <Form onSubmit = {this.handleSubmit} className="login__form" name="form">



                        <Grid.Column className={'field' + (submitted && !username ? ' has-error' : '')}>
                          <input type="text" placeholder={username1} name='username' className='login-input' required value={username} onChange={this.handleChange} />
                          <label htmlFor="username">{username1}</label>
                          {submitted && !username &&
                              <Grid.Column className="help-block">Username is required</Grid.Column>
                          }
                        </Grid.Column>

                          <Grid.Column className={'field' + (submitted && !password ? ' has-error' : '')}>
                            <input icon={<Icon name='eye' />} type="password" placeholder={password1} className="login-input" name="password" value={password} onChange={this.handleChange} className='login-input' required />
                            <label htmlFor="password">{password1}</label>
                            {submitted && !password &&
                              <Grid.Column className="help-block">Password is required</Grid.Column>
                            }
                        </Grid.Column>

                        <Grid className='login__form-sub'>
                          <Grid.Column floated='left' width={8}>

                              <Checkbox label='Remember Me' />

                          </Grid.Column>
                          <Grid.Column floated='right' width={8}  textAlign='right' >
                            <Menu.Item as={Link} to="/forgotpass" position="right" name="Forgot Password? " />
                          </Grid.Column>
                        </Grid>

                        <Grid.Column  className="login__form-action">
                          <Button color='blue' size='big'>Login</Button>
                          <Link to="/register" className="btn btn-link">Register</Link>
                        </Grid.Column >





                </Form>
            </Grid.Column>
            </Grid.Column>
            </Grid.Column>
        );
    }
}

function mapStateToProps(state) {
    const { loggingIn } = state.authentication;
    return {
        loggingIn
    };
}


LoginPage.propTypes = {
    loginpageProp: PropTypes.object.isRequired,
}

const connectedLoginPage = connect(mapStateToProps)(LoginPage);
export { connectedLoginPage as LoginPage }; 
