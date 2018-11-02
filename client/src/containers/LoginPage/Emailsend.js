import React, { Component } from "react";
import { Grid ,Header,Icon,Button} from "semantic-ui-react";
import { Link } from 'react-router-dom';
import LoginLeft from "./LoginLeft";
import loginJson from "../../json/LoginLeft.json";
class Emailsend extends  Component {
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
                        <LoginLeft loginleftProp={loginJson}  />
                    </Grid.Column>

                    <Grid.Column textAlign="center" verticalAlign="middle">
                        <Header icon>
                           <Icon name='thumbs up' />Email Sent to the Given Address .
                               <p>Please Check your Inbox</p>
                        </Header>
                        <Grid.Row>
                         <Button basic as={Link} to="/login">Banck to Login </Button>
                        </Grid.Row>
                    </Grid.Column>
                </Grid>

            
        );
    }
}

export default Emailsend;







