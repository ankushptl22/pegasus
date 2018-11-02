import React from 'react';
import AddTin from './AddTin';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'semantic-ui-react';
Enzyme.configure({ adapter: new Adapter() });
describe('<AddTin />', () => {

    it('renders <AddTin /> component', () => {
        const component = shallow(<AddTin />);
        expect(component.exists()).toBe(true);
        expect(component).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });

    it('should have single Button', () => {
        const component = shallow(<AddTin />);
        expect(component.find('Button').exists()).toBe(true);
        expect(component.find('Button')).toHaveLength(1);
    });
    test('should have default props', () => {
        expect(AddTin.defaultProps.vfrom).toBeDefined();
    });


})