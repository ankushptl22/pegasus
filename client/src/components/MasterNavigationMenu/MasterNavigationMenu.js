import React from 'react';
import { Link } from 'react-router-dom';
import { LandingPageCss } from './MasterNavigation.less';


const MasterNavigationMenu = (props) => {
    return (
        <ul>
            {
                props.sideNavigation.mainMenu.map((item, index) => (
                  <li>  <Link to={item.url} key={index} className={item.className}>

                            <img src={item.iconUrl} />

                    </Link>
                    </li>
                ))
            }
        </ul>
    )
}

export default MasterNavigationMenu;
