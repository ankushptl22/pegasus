import React from 'react'
import { Card, Feed, Menu, Segment, Header } from 'semantic-ui-react'
import SearchComponent from '../components/Search/SearchComponent'
import WidgetProperty from '../json/WidgetProperty.json'
import apiData from '../json/ApiData.json';

const GenericWidget = (WrappedComponent, config) => {
    //const WrappedColumnChart = WrappedObject[1];
    const BodyComponent = WrappedComponent

    //const BodyComponent = WrappedComponent
    class HOC extends React.Component {
        /**
         * set values
         * 
         * @memberof HOC
         */
        constructor(props) {
            super(props);
            this.handleChange = this.handleChange.bind(this);
            this.handleSearch = this.handleSearch.bind(this);
            if (config.showSearch) {
                var env = process.env.NODE_ENV || 'dev';
                var envVar = require('../uiconfig/config.' + env)
                var searchParam = {}
                searchParam.url = envVar.uri + envVar.port + envVar.registry + envVar.project + apiData.apis.providerList
                searchParam.params = WidgetProperty.Search.params
                this.state = {
                    searchParam
                }
            }
        };

        componentDidMount() {
            // if (config.showSearch) {
            //     console.log('### SEARCH PROPERTY #####', config );
            //     console.log('### SEARCH PROPS #####', this.props );
            // }
            // ... that takes care of the subscription...
            this.setState({
                // data: selectData
            });
            // DataSource.addChangeListener(this.handleChange);
        }

        componentWillUnmount() {
            //DataSource.removeChangeListener(this.handleChange);
        }

        handleChange() {
            this.setState({
                //data: selectData(DataSource, this.props)
            });
        }
        handleSearch(searchKey) {
            console.log('#### searchKey On Generic Widget ########', searchKey);
            console.log('#### This State########', this.state);
            this.setState({
                searchKey: searchKey
            });

        }
        //   return (
        //     <div>
        //         { showHeader && <Header /> }
        //     </div>
        // );
        render() {

            return (
                <Card fluid>
                    <Card.Content>
                        <Card.Header>
                            <Header as='h3' floated='right'>
                                {config.showSearch &&
                                    <SearchComponent onSearch={this.handleSearch} {...this.state} {...this.props} />
                                }
                            </Header>
                            <Header as='h3' floated='left'>
                                {config.Header}
                            </Header>
                        </Card.Header>
                        <Card.Meta>{config.Meta}</Card.Meta>
                        <Card.Description> {config.Description}</Card.Description>
                    </Card.Content>
                    <Card.Content>
                        <BodyComponent {...this.state} {...this.props} />
                    </Card.Content>
                </Card>
            );
        }
    }
    return HOC;
};

export default GenericWidget;
