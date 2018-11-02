import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Header, Button, Checkbox, Image, Grid, Segment, Form, Icon, Container, Menu  } from 'semantic-ui-react';

import { Router, Route, Switch, HashRouter, NavLink } from 'react-router-dom';
import { history } from '../redux/_helpers';
import MasterNavigationMenu from '../components/MasterNavigationMenu/MasterNavigationMenu';
import NavigationMenu from '../json/navigation.json';
import { LeftNavigationRoutes } from '../router/router';

import MasterHeader from '../components/MasterHeader/MasterHeader';
import SideNavBar from './SideNavBar'
import { pegasusLogo } from '../json/navigation.json';

//const WrappedHeaderData = MasterCardWidget([MasterHeader, ColumnChart], WidgetProperty.PracticeProperty);

class LandingPage extends React.Component {
//const MainLogo = require('../../assets/media/img/logo/figmd_logo.svg');

    constructor(props) {
        super(props);
    }
    render() {
        return (

          <Grid.Column className='fi-grid fi-grid--hor fi-grid--root fi-grid__landing--page'>
            <header id="fi_header" className="fi-grid__item page-header ">
              <Grid.Column className="fi-container fi-container--fluid fi-container--full-height">
                <Grid.Column className="fi-stack fi-stack--ver fi-stack--desktop">

                  <div className="fi-stack__item fi-brand ">
                    <div className="fi-stack fi-stack--ver fi-stack--general">

                      <Grid className="fi-stack__item fi-stack__item--middle fi-brand__logo">
                        <Link to="/login" className='fi-brand__logo-wrapper'>
                          <Image src={pegasusLogo.iconUrl} alt='Logo' />
                        </Link>
                      </Grid>
                      <a href="javascript:;" id="fi_aside_left_offcanvas_toggle" className="fi-brand__icon fi-brand__toggler fi-brand__toggler--left fi--visible-tablet-and-mobile-inline-block">
                        <span></span>
                      </a>


                      <a id="fi_aside_header_menu_mobile_toggle" href="javascript:;" className="fi-brand__icon fi-brand__toggler fi--visible-tablet-and-mobile-inline-block">
                        <span></span>
                      </a>

                      <a id="fi_aside_header_topbar_mobile_toggle" href="javascript:;" className="fi-brand__icon fi--visible-tablet-and-mobile-inline-block">
                        <i className="flaticon-more"></i>
                      </a>
                      <Grid.Column className='fi-stack__item fi-stack__item--middle fi-brand__tools'>
                        <MasterHeader />
                      </Grid.Column>


                      </div>
                    </div>

                </Grid.Column>
              </Grid.Column>
            </header>

            <SideNavBar />
            </Grid.Column >
        )
    }
}
export default LandingPage;
