import React, { Component } from "react";
import { Modal, Button, Header, Input, Image, Label, Grid, Icon, Dropdown, Form, Checkbox } from "semantic-ui-react";
//import PropTypes from 'prop-types';
class AddTin extends Component {
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

                closeIcon onClose={this.closeModal} open={showModal} trigger={<Button onClick={() => this.setState({ showModal: true })}><Icon className='plus' />Add Practice</Button>}>
                <Header>Add Tin</Header>
                <Modal.Content>
                    <Form>
                        <Form.Group>
                            <Form.Input
                                label={this.props.tnumber}
                                placeholder='Enter Tin number'
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Input
                                label={this.props.vfrom}
                                placeholder='dd-mm-yyyy' type='date'
                            />
                            <Form.Input
                                label={this.props.vto}
                                placeholder='dd-mm-yyyy' type='date'

                            />
                        </Form.Group>
                        <Button floated='right' onClick={(evt) => this.handleCreateButton(evt)}>{this.props.Add}</Button>
                    </Form>
                </Modal.Content>
            </Modal>);
    }
}
// Specifies the default values for props:
AddTin.defaultProps = {
    tnumber: 'Tin Number*',
    vfrom: 'Valid From*',
    vto: 'Valid To*',

    Add: 'ADD'

};

export default AddTin;

