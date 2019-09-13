import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure,shallow } from 'enzyme';  
import StopButton from '../components/StopButton';

configure({ adapter: new Adapter() });
 
const handleClick = () => {

}
const stopButton = shallow(<StopButton clicked={handleClick} />);
                           
test('StopButton component working', () => {
  
  expect(stopButton.instance().props.clicked).toEqual(handleClick);
});