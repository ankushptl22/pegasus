import React from 'react';
import PracticeInfo from './PracticeInfo';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'semantic-ui-react';
Enzyme.configure({ adapter: new Adapter() });
describe('<PracticeInfo />', () => {

    it('renders <PracticeInfo /> component', () => {
        const component = shallow(<PracticeInfo />);
        expect(component.exists()).toBe(true);
        expect(component).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });

    it('should have single Button', () => {
        const component = shallow(<PracticeInfo />);
        expect(component.find('Button').exists()).toBe(true);
        expect(component.find('Button')).toHaveLength(1);
    });
    test('should have default props', () => {
        expect(PracticeInfo.defaultProps.eaddress).toBeDefined();
    });


})