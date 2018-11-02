import React from 'react';
import Enzyme,{ shallow } from 'enzyme';
import MasterProgressBar from './MasterProgressBar'; 
import Adapter from 'enzyme-adapter-react-16';
import MasterProgressProps from '../../json/MasterProgressBar.json';

Enzyme.configure({ adapter: new Adapter() });
 
describe('<MasterProgressBar />', () => {
  it('renders', () => {
    const wrapper = shallow(<MasterProgressBar  />);
    expect(wrapper).toMatchSnapshot();
  });

  it('component with default props', () => {
    const component = shallow(<MasterProgressBar  />);
    expect(component.exists()).toBe(true);
  });

  it('will check props', () => {
    const component = shallow(<MasterProgressBar progressData={MasterProgressProps} />).props();
    expect(wrapper).toBeDefined();
  });

});
