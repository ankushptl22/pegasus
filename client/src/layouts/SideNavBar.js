import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Icon, Image, Grid } from 'semantic-ui-react';
import { LandingPageCss } from './LandingPage.less';
import { Router, Route, Switch, HashRouter, NavLink } from 'react-router-dom';
import { history } from '../redux/_helpers';

import MasterCard from '../components/MasterCard/MasterCard';
import MasterTab from '../components/MasterTab/MasterTab';
// import MasterFooter from '../components/MasterFooter/MasterFooter';
import MasterNavigationMenu from '../components/MasterNavigationMenu/MasterNavigationMenu';
import NavigationMenu from '../json/navigation.json';
import { LeftNavigationRoutes } from '../router/router';


class SideNavBar extends React.Component {

    constructor(props) {
        super(props);

    }
    render() {
        return (
          <div className="fi-grid__item fi-grid__item--fluid fi-grid fi-grid--ver-desktop fi-grid--desktop fi-body">
            <div id="fi_aside_left" class="fi-grid__item	fi-aside-left  fi-aside-left--skin-light ">
              <div id="fi_ver_menu" class="fi-aside-menu">
                <MasterNavigationMenu sideNavigation={NavigationMenu.sideNavigation} />
              </div>
            </div>
            <Grid.Column className="fi-grid__item fi-grid__item--fluid fi-wrapper">
            <div className="fi-content">
              <LeftNavigationRoutes />
              </div>
            </Grid.Column>
          </div>
        )
    }
}
export default SideNavBar;
