import React from 'react';
import AddAdmin from './AddAdmin';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Button from 'semantic-ui-react';



Enzyme.configure({ adapter: new Adapter() });
describe('<AddAdmin />', () => {
  
    it('renders <AddAdmin /> component', () => {
        const component = shallow(<AddAdmin />);
        expect(component.exists()).toBe(true);
        expect(component).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });

     it('should have single Button', () => {
        const component = shallow(<AddAdmin  />);
        expect(component.find('Button').exists()).toBe(true);
        expect(component.find('Button')).toHaveLength(1);
     });

})


