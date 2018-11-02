import React from 'react';
import { shallow } from 'enzyme';
import MasterDataTables from './MasterDataTables';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });
describe('<MasterDataTables />', () => {
  test('renders', () => {
    const wrapper = shallow(<MasterDataTables />);
    expect(wrapper).toMatchSnapshot();
  });
});
