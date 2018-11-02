import React from 'react';
import { shallow, enzyme, configure, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MasterPaymentDetails from './MasterPaymentDetails';
import MasterPaymentDetailsProps from '../../json/MasterPaymentDetails.json';


Enzyme.configure({ adapter: new Adapter() });

const constMasterPaymentDetailsProps = MasterPaymentDetailsProps.MasterPaymentDetailsProps;

describe('<MasterPaymentDetails />', () => {
  it('renders', () => {
    const wrapper = shallow(<MasterPaymentDetails  />);
    expect(wrapper).toMatchSnapshot();
  });

  it('mount component with default props', () => {
    const component = shallow(<MasterPaymentDetails  />);
    expect(component.exists()).toBe(true);
  });

  it('will check props', () => {
    const component = shallow(<MasterPaymentDetails MasterPaymentDetailsProps= { constMasterPaymentDetailsProps } />).props();
    expect(component).toBeDefined();
  });

});



