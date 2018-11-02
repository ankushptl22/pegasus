import React, { Component } from "react";
import { Button, Input, Label, Icon, Dropdown, Form, Checkbox } from "semantic-ui-react";

class PracticeInfo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }
    render() {
        return (
            <Form>
                <Form.Group>
                    <Form.Input
                        label={this.props.practiceId}
                        placeholder='Enter ID'
                    />
                    <Form.Input
                        label={this.props.practiceName}
                        placeholder='Enter name'
                    />
                    <Form.Field control={Input} label={this.props.practicestatus} ><Checkbox toggle /></Form.Field>

                </Form.Group>
                Head Office Address
                        <Form.Group>
                    <Form.Input
                        label={this.props.address1}
                        placeholder='Regent Plaza'
                    />
                    <Form.Select fluid label={this.props.state} placeholder='maha' />
                    <Form.Select fluid label={this.props.city} placeholder='pune' />
                    <Form.Input
                        label={this.props.zip}
                        placeholder='enter zip code'
                    />
                </Form.Group>
                <Form.Group>
                    <Form.Select fluid label={this.props.timezone} placeholder='GMT-5' />
                    <Form.Input
                        label={this.props.eaddress}
                        placeholder='Regent Plaza' type='email'
                    />
                    <Form.Input
                        label={this.props.number}
                        placeholder='contact number' type='number'
                    />
                </Form.Group>

                <Button floated='right' >{this.props.Save}</Button>
                <Button floated='right'>{this.props.Cancel}</Button>

            </Form>);
    }
}
// Specifies the default values for props:
PracticeInfo.defaultProps = {
    practiceId: 'Practice ID',
    practiceName: 'Practice Name',
    practicestatus: 'Practice Status',
    address1: 'Address 1',
    timezone: 'Practice Time Zone',
    state: 'State',
    city: 'City',
    zip: 'Zip',
    Save: 'Save',
    Cancel: 'Cancel',
    eaddress: 'Email Address',
    number: 'Phone number'
};

export default PracticeInfo;

