import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
require("../registry-theme/semantic.less");
require("../assets/less/main.less");
import { store } from "./redux/_helpers/store";


import { configureFakeBackend } from './redux/_helpers';
configureFakeBackend();

import { App } from './containers/App';

ReactDOM.render(
    <Provider store={store}><App /></Provider>, document.getElementById('app'))
