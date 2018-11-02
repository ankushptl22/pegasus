import React from 'react'
import axios from "axios";
import { Table, Menu, Icon, Label } from 'semantic-ui-react'
const DataWidget = (WrappedComponent, config) => {
    var keys = []
    keys = Object.keys(WrappedComponent)
    const PaginationComponent = WrappedComponent.Pagination[0];
    const PaginationProperty = WrappedComponent.Pagination[1];
    class HOC extends React.Component {
        /**
         * set values
         * 
         * @memberof HOC
         */
        constructor(props) {
            super(props);
            this.handlePageChange = this.handlePageChange.bind(this);
            this.state = {
                resultData: [],
                url: config.url,
                users: [],
                renderedUsers: [],
                params: config.params,
                PaginationProperty: PaginationProperty,
                showPagination: true
            };
            //  this.getAPIData('undefined');
        }
        handlePageChange(page) {
            if (page) {
                this.state.params['page'] = page
            }
            axios({
                method: 'post',
                url: this.state.url,
                headers: { 'Content-Type': 'application/json' },
                data: this.state.params
            })
                .then(response => {
                    this.setState({
                        resultData: response.data.result
                    });
                })
                .catch(error => console.log(error));
        }
        componentDidMount() {
            this.handlePageChange();
        }
        render() {
            return (
                <Table celled>
                    <Table.Header>
                        <Table.Row>
                            <Table.HeaderCell>Id</Table.HeaderCell>
                            <Table.HeaderCell>Provider Name</Table.HeaderCell>
                            <Table.HeaderCell>Primary Taxonomy</Table.HeaderCell>
                        </Table.Row>
                    </Table.Header>
                    <Table.Body>
                        {
                            this.state.resultData.map((dynamicData, key) =>
                                <Table.Row key={dynamicData.ServiceProviderUid}>
                                    <Table.Cell>
                                        {dynamicData.ServiceProviderUid}
                                    </Table.Cell>
                                    <Table.Cell singleLine>{dynamicData.ListName}</Table.Cell>
                                    <Table.Cell>
                                        {dynamicData.PrimaryTaxonomy}
                                    </Table.Cell>
                                </Table.Row>
                            )
                        }
                    </Table.Body>
                    <Table.Footer>
                        <Table.Row>
                            <Table.HeaderCell colSpan='3'>
                                {this.state.showPagination &&
                                    <Menu floated='right'>
                                        <PaginationComponent onPagination={this.handlePageChange} {...this.state} {...this.props} />
                                    </Menu>
                                }
                            </Table.HeaderCell>
                        </Table.Row>
                    </Table.Footer>
                </Table>
            );
        }
    }
    return HOC;
};
export default DataWidget;
