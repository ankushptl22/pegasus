import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux"
require("../registry-theme/semantic.less");
import store from "./redux/store"
import LandingPage from './layouts/LandingPage';

ReactDOM.render(
    <Provider store={store}><LandingPage /></Provider>, document.getElementById('app'))

