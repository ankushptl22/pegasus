import React from 'react';
import { shallow } from 'enzyme';
import MasterPracticeGrid from './MasterPracticeGrid';

describe('<MasterPracticeGrid />', () => {
  test('renders', () => {
    const wrapper = shallow(<MasterPracticeGrid />);
    expect(wrapper).toMatchSnapshot();
  });
});
