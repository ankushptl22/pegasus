import React from 'react';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MeasureSegment from '../../components/MeasureSegment/MeasureSegment';
import MeasurePropsData from '../../json/MeasureSegment.json';


Enzyme.configure({ adapter: new Adapter() });
console.log(MeasurePropsData); 
describe('<MeasureSegment />', () => {
    test('renders', () => {
        const wrapper = shallow(<MeasureSegment measureProp={MeasurePropsData.measureProp} />);
        expect(wrapper).toMatchSnapshot();
    });

    it('will check props', () => {
        const component = shallow(<MeasureSegment measureProp={MeasurePropsData.measureProp} />).props();
        expect(component).toBeDefined();
    });
});
