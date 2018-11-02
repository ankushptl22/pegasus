import axios from "axios";
import React from 'react';
import { Card } from 'semantic-ui-react';

const DrillDown = (WrappedComponent,  config) => {
    class HOC extends React.Component {
        /**
         * set values
         * 
         * @memberof HOC
         */
        constructor(props) {
            super(props);
            this.getAPIData = this.getAPIData.bind(this);
            this.state = {
                resultData: '',
                params : config.params.level0,
                url : config.url,
                apiLevel : config.params
            };
            this.getAPIData('undefined');
            this.currentObject = React.createRef();
        };

        getAPIData(config) {
             if (config instanceof Array) {
                 let postParam = {}
                 for (var i in config) {
                    let paramArray = config[i].split(':');
                    let level = paramArray[0]
                    let hierarchy = paramArray[1]
                    let paramValue = paramArray[2].toLowerCase();
                    this.state.apiLevel[level][hierarchy] = paramValue;
                    if (i > 0) {
                        let paramArray = config[0].split(':')
                        let level = paramArray[0]
                        let hierarchy = paramArray[1]
                        let paramValue = paramArray[2].toLowerCase();
                        this.state.apiLevel[level][hierarchy] = paramValue;
                    }
                 } 
                 this.setState({
                    params: this.state.apiLevel['level'+config.length]
                });
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
            // ... that takes care of the subscription...
          }
      
          componentWillUnmount() {
            //DataSource.removeChangeListener(this.handleChange);
          }
        render() {
            return (
                    <WrappedComponent drillAPIData = {this.getAPIData} {...this.state} {...this.props} />
            );
        }
    }
    return HOC;
};

export default DrillDown;
