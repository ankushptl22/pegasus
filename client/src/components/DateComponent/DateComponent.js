import React from 'react';
import Moment from 'react-moment';
import { List } from 'semantic-ui-react';

const DateComponent = (props) => {
    // console.log(props.dates)

    return(
        <List horizontal floated='right'>
            <List.Item>
                Updated on : <strong><Moment date={props.dates.updated} format="DD MMM YYYY HH:mm A"/></strong>
            </List.Item>

            <List.Item>
                Start Date : <strong> <Moment date={props.dates.startDate} format="Do MMM YYYY HH:mm A"/></strong>  
            </List.Item>

            <List.Item>
                End Date : <strong><Moment date={props.dates.endDate} format="DD MMM YYYY HH:mm A" /></strong>
            </List.Item>
        </List>      
    )

}
DateComponent.defaultProps = {
    dates: {
        "updated":"11 12 2001 04:22:22",
        "startDate":"11 12 2001 04:22:22",
        "endDate":"11 12 2001 04:22:22"
    }
}
export default DateComponent;

