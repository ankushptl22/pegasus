import React from 'react';
import MasterFIGmdListView from './MasterFIGmdListView';
import './MasterFIGmdListView.less';
import { shallow } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import listViewData from '../../json/MasterFIGmdListView.json';
import Label from 'semantic-ui-react';

Enzyme.configure({ adapter: new Adapter() });

describe('<MasterFIGmdListView />', () => {
  
    it('renders 1 <MasterFIGmdListView /> component', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.exists()).toBe(true);
        expect(component).toHaveLength(1);
        expect(component).toMatchSnapshot();
    });


    it('should have single Card.Group', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.find('CardGroup').exists()).toBe(true);
        expect(component.find('CardGroup')).toHaveLength(1);
    });

    it('should have Card with customCards class', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.find('.customCards').exists()).toEqual(true);
        expect(component.find('Label').exists()).toEqual(true);
        expect(component.find('Label')).toHaveLength(18);
    // expect(component.find('Label').atEvery().text()).toBeString();   
    });

    it('should have logoStyle class', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.find('.logoStyle').exists()).toEqual(true);
    });

    it('should have idStyle class', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.find('.idStyle').exists()).toEqual(true);
    });

    it('should have lableStyle class', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.find('.lableStyle').exists()).toEqual(true);
    });
    it('should have gridStyle class', () => {
        const component = shallow(<MasterFIGmdListView figmdListViewProp={listViewData} />);
        expect(component.find('.gridStyle').exists()).toEqual(true);
    });

});
