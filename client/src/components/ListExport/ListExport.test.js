import React from 'react';
import { shallow } from 'enzyme';
import ListExport from './ListExport';
import Adapter from 'enzyme-adapter-react-16';
import Enzyme from 'enzyme';
Enzyme.configure({ adapter: new Adapter() });

describe('<ListExport />', () => {
  it('renders 1 <ListExport /> component', () => {
    const component = shallow(<ListExport  />);
    expect(component.exists('ListExport')).toBe(true);
    expect(component).toHaveLength(1);
    expect(component).toMatchSnapshot();
  } );

   it('it should have dropdown ', () => {
        const wrapper = shallow(<ListExport />);
        expect(wrapper.exists('Dropdown')).toEqual(true);
        expect(wrapper.find('Dropdown').exists()).toEqual(true);
        expect(wrapper.find('Dropdown')).toHaveLength(1);
   });  
     
   it('will check csvdownloader', () => {
        const component = shallow(<ListExport  />);
        expect(component.exists('CsvDownloader')).toBe(true);
        expect(component).toHaveLength(1);
        expect(component).toMatchSnapshot();
   });

   it('will check workbook', () => {
      const component = shallow(<ListExport  />);
      expect(component.exists('Workbook')).toBe(true);
      expect(component).toHaveLength(1);
      expect(component).toMatchSnapshot();  
   });

});
