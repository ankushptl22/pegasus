import React from 'react';
import { shallow } from 'enzyme';
import MeasureDetailsHeader from './MeasureDetailsHeader';

describe('<MeasureDetailsHeader />', () => {
  test('renders', () => {
    const wrapper = shallow(<MeasureDetailsHeader />);
    expect(wrapper).toMatchSnapshot();
  });
});
