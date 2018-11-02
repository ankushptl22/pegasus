import React from 'react';
import { shallow } from 'enzyme';
import QualityDashboard from './QualityDashboard';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('<QualityDashboardQualityDashboard />', () => {
  test('renders', () => {
    const wrapper = shallow(<QualityDashboard />);
    expect(wrapper).toMatchSnapshot();
  });
});
