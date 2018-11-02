import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { userActions } from '../../redux/_actions';
import { Checkbox, Input } from 'semantic-ui-react';

class LoginStepTwo extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            user: {
                firstName: '',
                lastName: '',
                username: '',
                password: ''
            },
            submitted: false
        };

        this.handleChange = this.handleChange.bind(this);
        //this.handleSubmit = this.handleSubmit.bind(this);
    }
    componentDidMount() {
    //    this.props.dispatch(userActions.getAll());
    }

    handleChange(e, data) {
        console.log('ON change ID ', this);
        if (data) {
            this.props.dispatch(userActions.generateOTP(user,data));
        }
        
    }

    render() {
        const { user, users } = this.props;
        return (
            <div className="col-md-6 col-md-offset-3">
                <h3>Hi {user.firstName}!</h3>
                <p>2 Step Verification!</p>
                <h3>Please choose below option to send OTP:</h3>
                <p><Checkbox name='email'  onChange={this.handleChange} label = ' OPT send you' /> {user.firstName}</p>
                <p><Checkbox name='phone'  onChange={this.handleChange} label = ' OPT send you' /> {user.firstName}</p>
                <p>Enter Code </p>
                <p><Input placeholder='OTP...' /> </p>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users, authentication } = state;
    const { user } = authentication;
    return {
        user,
        users
    };
}

const connectedLoginStepTwo = connect(mapStateToProps)(LoginStepTwo);
export { connectedLoginStepTwo as LoginStepTwo };