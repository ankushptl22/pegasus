import React from 'react';
import { shallow, enzyme, configure, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewTable from './ViewTable';
import ViewTableDataProp from '../../json/ViewTable.json';
import {Table} from 'semantic-ui-react'

Enzyme.configure({ adapter: new Adapter() });

describe('<ViewTable />', () => {
       it('renders 1 <ViewTable /> component', () => {
         const component = shallow(<ViewTable ViewTableDataProp={ViewTableDataProp}/>);
         expect(component.exists('ViewTable')).toBe(true);
         expect(component).toHaveLength(1);
         expect(component).toMatchSnapshot();
       } );

        it('it should have Table ', () => {
           const wrapper = shallow(<ViewTable ViewTableDataProp={ViewTableDataProp}/>);
            expect(wrapper.exists('Table')).toEqual(true);
            expect(wrapper.find('Table').exists()).toEqual(true);
            expect(wrapper.find('Table')).toHaveLength(1);
        });  
          
        it('will check props', () => {
            const component = mount(<ViewTable ViewTableDataProp={ViewTableDataProp}/>).props();
            expect(component).toBeDefined();    
        });
     
        it('will check state', () => {
            const component = mount(<ViewTable ViewTableDataProp={ViewTableDataProp}/>).state();
            expect(component).toBeDefined();    
        });
});