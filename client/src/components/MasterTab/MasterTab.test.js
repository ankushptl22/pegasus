import React from 'react';
import { shallow, enzyme, configure, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MasterTab from './MasterTab';
import MasterTabProp from '../../json/MasterTabProp.json';

Enzyme.configure({ adapter: new Adapter() });

const masterTabProp = MasterTabProp.masterTabProp;

describe('<MasterTab />', () => {
    test('renders', () => {    
        const wrapper = shallow(<MasterTab masterTabProp={masterTabProp}/>);
        expect(wrapper).toMatchSnapshot();
    });

    it('mount component', () => {
        mount(<MasterTab masterTabProp={masterTabProp}/>);
    });

    it('will check props', () => {
        const component = mount(<MasterTab masterTabProp={masterTabProp}/>).props();
        expect(component).toBeDefined();    
    });

    it('will check state', () => {
        const component = mount(<MasterTab masterTabProp={masterTabProp}/>).state();
        expect(component).toBeDefined();    
    });

    it('should have single Tab', () => {
        const component = shallow(<MasterTab masterTabProp={masterTabProp}/>);
        expect(component.find('Tab').exists()).toBe(true);
        expect(component.find('Tab')).toHaveLength(1);
    });

    it('onTabChangeHandler is clicked', () => {
        const component = shallow(<MasterTab masterTabProp={masterTabProp}/>);
        expect(component.find('Tab').exists()).toBe(true);
        component.find('Tab').simulate('onTabChange');
    });
});
