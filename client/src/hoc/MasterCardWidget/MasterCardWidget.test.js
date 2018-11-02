import React from 'react';
import MasterCardWidget from './MasterCardWidget';
import { shallow, enzyme, configure, mount } from 'enzyme';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MasterCard from '../../components/MasterCard/MasterCard';
import WidgetProperty from '../../json/WidgetProperty.json';

Enzyme.configure({ adapter: new Adapter() });
let config = WidgetProperty.PracticeProperty
describe('MasterCardWidget as higher-order component', () => {
  let WrapperComponent;
  beforeEach(() => {
    class MockComponent extends React.Component {
      render() {
        return (<div>MockComponent</div>);
      }
    };
    WrapperComponent = MasterCardWidget(MockComponent);
  });

  it('should render the component only when the condition passes', () => {

      const ConditionalComponent = MasterCardWidget(MasterCard, config);
      const wrapper = shallow(
        <ConditionalComponent condition={true} />
      );
    });

    // it('should render the component only when the condition passes', () => {

    //   const ConditionalComponent = MasterCardWidget(MasterCard);
    //   const wrapper = shallow(
    //     <ConditionalComponent condition={false} />
    //   );
    //   expect(wrapper.html()).toBe(null);
    // });


  it(' should render the MasterCardWidget', () => {
    const wrapper = shallow(<MasterCardWidget />);
    expect(wrapper).toMatchSnapshot();
  });

});
