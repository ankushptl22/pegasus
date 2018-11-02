import React from 'react';
import { Link } from 'react-router-dom';

import { Header, Button, Checkbox, Image, Grid, Segment, Message, Form } from 'semantic-ui-react';
import { connect } from 'react-redux';

import { userActions } from '../../redux/_actions';

class RegisterPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: '',
                email:'',
                phone:''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const { name, value } = event.target;
        const { user } = this.state;
        this.setState({
            user: {
                ...user,
                [name]: value
            }
        });
    }

    handleSubmit(event) {
        event.preventDefault();

        this.setState({ submitted: true });
        const { user } = this.state;
        const { dispatch } = this.props;
        if (user.firstName && user.lastName && user.username && user.password) {
            dispatch(userActions.register(user));
        }
    }

    render() {
        const { registering  } = this.props;
        const { user, submitted } = this.state;
        const MainLogo = require('../../../assets/media/img/logo/figmd_logo.svg');
        return (

            <Grid.Column  className="login--signin login--page">
          <Grid verticalAlign='middle' columns={2} style={{height: '100%'}}  >
            <Grid.Row stretched>
              <Grid.Column mobile={16} tablet={6} computer={6}>
                <Grid.Row className='login__wrapper-1'>
                  <Grid.Column className='login__wrapper-1'>
                    <Grid.Column  className="login__contanier">
                      <Grid.Column  className="login__logo">
                        <Image src={MainLogo} alt='Logo' />
                      </Grid.Column >
                      <Grid.Column  className="login__contanier-info">
                        <Header as='h4' className="login--title__h4">For assistance connect at </Header>
                        <Header as='h5' className="login--title__h5">FIGmd - <Link to='mailto:abc@figmd.com' className="link"> abc@figmd.com</Link> </Header>
                        <Header as='h5' className="login--title__h5">Registry - <Link to='mailto:xyz@regisry.com' className="link"> xyz@regisry.com</Link> </Header>
                        <Header as='h5' className="login--title__h5">CAM’s - <Link to='mailto:def@camfigmd.com' className="link"> def@camfigmd.com</Link> </Header>
                      </Grid.Column >
                    </Grid.Column >
                  </Grid.Column>
                </Grid.Row>
              </Grid.Column>

              <Grid.Column mobile={16} tablet={10} computer={10}>
                <Grid.Column  className="login__wrapper-2">
                  <Grid.Column  className="login__contanier">
                    <Grid.Column  className="login__signin">
                      <Grid.Column  className="login__head">
                        <Header as='h3' className="login__title">Register</Header>
                      </Grid.Column >

                      <Form onSubmit = {this.handleSubmit} className="login__form login--register__form" name="form">

                        <Grid.Column className={'field' + (submitted && !user.firstName ? ' has-error' : '')}>

                            <input placeholder="First Name" type="text" className="login-input" name="firstName" value={user.firstName} onChange={this.handleChange} />
                            <label htmlFor="firstName">First Name</label>
                            {submitted && !user.firstName &&
                            <Message
                              error
                              content='First Name is required'
                            />
                            }
                        </Grid.Column>

                        <Grid.Column className={'field' + (submitted && !user.lastName ? ' has-error' : '')}>

                            <input type="text" placeholder="Last Name" className="login-input" name="lastName" value={user.lastName} onChange={this.handleChange} />
                            <label htmlFor="lastName">Last Name</label>
                            {submitted && !user.lastName &&
                            <Message
                              error
                              content='Last Name is required'
                            />

                            }
                        </Grid.Column>
                        <Grid.Column className={'field' + (submitted && !user.username ? ' has-error' : '')}>

                            <input type="text"  placeholder="User Name" className="login-input" name="username" value={user.username} onChange={this.handleChange} />
                            <label htmlFor="username">User Name</label>
                            {submitted && !user.username &&
                            <Message
                              error
                              content='User Name is required'
                            />
                            }
                            </Grid.Column>
                            <Grid.Column className={'field' + (submitted && !user.password ? ' has-error' : '')}>

                            <input type="password"  placeholder="Password" className="login-input" name="password" value={user.password} onChange={this.handleChange} />
                            <label htmlFor="password">Password</label>
                            {submitted && !user.password &&
                            <Message
                              error
                              content='Password is required'
                            />
                            }
                            </Grid.Column>
                            <Grid.Column className={'field' + (submitted && !user.email ? ' has-error' : '')}>

                            <input type="email"  placeholder="Email xyz@abc.com" className="login-input" name="email" value={user.email} onChange={this.handleChange} />
                            <label htmlFor="email">Email</label>
                            {submitted && !user.email &&
                            <Message
                              error
                              content='Email is required'
                            />
                            }
                            </Grid.Column>
                            <Grid.Column className={'field' + (submitted && !user.phone ? ' has-error' : '')}>

                            <input type="number" placeholder="Phone Number" className="login-input" min="8" max="14" name="phone" value={user.phone} onChange={this.handleChange} />
                            <label htmlFor="phone">Phone</label>
                            {submitted && !user.phone &&
                            <Message
                              error
                              content='Phone Number is required'
                            />
                            }
                            </Grid.Column>
                        <Form.Field className="login__form-action">
                          <Button type='submit' color='blue'  size='big'>Register</Button>
                            {registering &&
                                <img src="data:image/gif;base64,R0lGODlhEAAQAPIAAP///wAAAMLCwkJCQgAAAGJiYoKCgpKSkiH/C05FVFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAAEAAQAAADMwi63P4wyklrE2MIOggZnAdOmGYJRbExwroUmcG2LmDEwnHQLVsYOd2mBzkYDAdKa+dIAAAh+QQJCgAAACwAAAAAEAAQAAADNAi63P5OjCEgG4QMu7DmikRxQlFUYDEZIGBMRVsaqHwctXXf7WEYB4Ag1xjihkMZsiUkKhIAIfkECQoAAAAsAAAAABAAEAAAAzYIujIjK8pByJDMlFYvBoVjHA70GU7xSUJhmKtwHPAKzLO9HMaoKwJZ7Rf8AYPDDzKpZBqfvwQAIfkECQoAAAAsAAAAABAAEAAAAzMIumIlK8oyhpHsnFZfhYumCYUhDAQxRIdhHBGqRoKw0R8DYlJd8z0fMDgsGo/IpHI5TAAAIfkECQoAAAAsAAAAABAAEAAAAzIIunInK0rnZBTwGPNMgQwmdsNgXGJUlIWEuR5oWUIpz8pAEAMe6TwfwyYsGo/IpFKSAAAh+QQJCgAAACwAAAAAEAAQAAADMwi6IMKQORfjdOe82p4wGccc4CEuQradylesojEMBgsUc2G7sDX3lQGBMLAJibufbSlKAAAh+QQJCgAAACwAAAAAEAAQAAADMgi63P7wCRHZnFVdmgHu2nFwlWCI3WGc3TSWhUFGxTAUkGCbtgENBMJAEJsxgMLWzpEAACH5BAkKAAAALAAAAAAQABAAAAMyCLrc/jDKSatlQtScKdceCAjDII7HcQ4EMTCpyrCuUBjCYRgHVtqlAiB1YhiCnlsRkAAAOwAAAAAAAAAAAA==" />
                            }
                            <Link to="/login" className="btn btn-link">Cancel</Link>
                        </Form.Field>

                    </Form>

                </Grid.Column>
              </Grid.Column>
              </Grid.Column>
              </Grid.Column>
            </Grid.Row>
          </Grid>
</Grid.Column>
        );
    }
}

function mapStateToProps(state) {
    const { registering } = state.registration;
    return {
        registering
    };
}

const connectedRegisterPage = connect(mapStateToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };
