import React from 'react';
import { shallow } from 'enzyme';
import MasterIndicators from './MasterIndicators';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<MasterIndicators />', () => {
  test('renders', () => {
    const wrapper = shallow(<MasterIndicators />);
    expect(wrapper).toMatchSnapshot();
  });
});
