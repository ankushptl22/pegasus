import React from 'react';
import DateComponent from './DateComponent';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {List} from 'semantic-ui-react';
import DateData from '../../json/DateComponentData';


Enzyme.configure({ adapter: new Adapter() });

describe('<DateComponent />', () => {
  
    it('renders 1 <DateComponent /> component', () => {
        const component = shallow(<DateComponent dates={DateData} />);
        expect(component.exists()).toBe(true);
        expect(component).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });


    it('Three Moment for Dates', () => {
        const component = shallow(<DateComponent dates={DateData} />);
        expect(component.find('ListItem').exists()).toBe(true);
        expect(component.find('ListItem')).toHaveLength(3);
        
    });

  });

