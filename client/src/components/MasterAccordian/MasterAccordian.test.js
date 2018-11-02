import React from 'react';
import MasterAccordian from './MasterAccordian';
import { shallow, enzyme, configure, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('<MasterAccordian />', () => {
  it('renders', () => {
    const wrapper = shallow(<MasterAccordian />);
    expect(wrapper).toMatchSnapshot();
  });

  it('it should have MasterAccordian and  MasterAccordian1', () => {
    const wrapper = mount(<MasterAccordian />);
    expect(wrapper.exists('.MasterAccordian')).toEqual(true);
    expect(wrapper.find('.MasterAccordian1').exists()).toEqual(true);
    expect(wrapper.find('.MasterAccordian1')).toHaveLength(1);
  });

  it('it should have grid classes', () => {
    const wrapper = mount(<MasterAccordian />);
    expect(wrapper.exists('.header')).toEqual(true);
    expect(wrapper.find('.description').exists()).toEqual(true);
    // expect(wrapper.find('.extra content')).toHaveLength(1);
  });

  it('Test click event on button for getData method', () => {
    const getData = jest.fn();
    const button = shallow((<button onClick={getData}>Ok!</button>));
    button.find('button').simulate('click');
    expect(getData.mock.calls.length).toEqual(1);
    expect(getData).toHaveBeenCalled();
  });

  it('Test click event on button for setData method', () => {
    const setData = jest.fn();
    const button = shallow((<button onClick={setData}>Ok!</button>));
    button.find('button').simulate('click');
    expect(setData.mock.calls.length).toEqual(1);
    expect(setData).toHaveBeenCalled();
  });
});
