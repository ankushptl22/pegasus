import React from 'react';
import { shallow } from 'enzyme';
import MasterClinicianGrid from './MasterClinicianGrid';

describe('<MasterClinicianGrid />', () => {
  test('renders', () => {
    const wrapper = shallow(<MasterClinicianGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
