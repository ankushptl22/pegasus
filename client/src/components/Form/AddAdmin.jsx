import React, { Component } from "react";
import { Modal, Button, Header, Input, Label, Icon, Form } from "semantic-ui-react";

class AddAdmin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      something: '',
      showModal: false

    };
  }

  handleChangeForms = (e, { value }) => {
    this.setState({ something: value });
  }

  handleCreateButton(evt) {
    evt.preventDefault()
    this.closeModal();
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }
  render() {
    const {
      something,
      showModal
    } = this.state
    return (
      <Modal

        // ------------- fix -------------
        className="scrolling"
        // -------------------------------

        closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />Add Admin</Button>}>
        <Header>Add Admin</Header>
        Personal Details
            <Modal.Content>
          <Form>
            <Form.Group>
              <Form.Input
                label={this.props.member_id}
                placeholder='Enter ID'
              />
              <Form.Input
                label={this.props.npi}
                placeholder='Enter NPI'
              />
              <Label>{this.props.valideate_npi}</Label>
            </Form.Group>

            <Form.Group>
              <Form.Input
                label={this.props.fname}
                placeholder='Enter first name'
              />
              <Form.Input
                label={this.props.mname}
                placeholder='Enter middle name'
              />
              <Form.Input
                label={this.props.lname}
                placeholder='Enter last name'
              />
            </Form.Group>
            <Form.Group>
              <Form.Input
                label={this.props.uname}
                placeholder='Enter user name'
              />
            </Form.Group>
            Contact Details
    <Form.Group>
              <Form.Input
                label={this.props.eaddress}
                placeholder='Enter email address'
              />
              <Form.Input
                label={this.props.aladdress}
                placeholder='Enter alternate email address'

              />
              <Form.Input
                label={this.props.number}
                placeholder='Enter phone number' />

            </Form.Group>
            <Button floated='right' onClick={(evt) => this.handleCreateButton(evt)}>{this.props.Add}</Button>
          </Form>
        </Modal.Content>
      </Modal>);
  }
}

// Specifies the default values for props:
AddAdmin.defaultProps = {
  member_id: 'Member ID',
  npi: 'NPI*',
  valideate_npi: 'Validate NPI',
  fname: 'First Name*',
  mname: 'Middle Name',
  lname: 'Last Name*',
  uname: 'username*',
  eaddress: 'Email Address',
  aladdress: 'Alternate Email Address',
  number: 'Phone Number',
  Add: 'ADD'

};

export default AddAdmin;

