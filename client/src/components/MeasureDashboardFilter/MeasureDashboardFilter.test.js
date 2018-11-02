import React from 'react';
import { shallow } from 'enzyme';
import MeasureDashboardFilter from './MeasureDashboardFilter';

describe('<MeasureDashboardFilter />', () => {
  test('renders', () => {
    const wrapper = shallow(<MeasureDashboardFilter />);
    expect(wrapper).toMatchSnapshot();
  });
});
