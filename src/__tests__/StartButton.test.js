import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure,shallow } from 'enzyme';  
import StartButton from '../components/StartButton';

configure({ adapter: new Adapter() });
test('Start Button working', () => {
   
  const handleClick = () => {
      
  }
  const startButton = shallow(<StartButton clicked={handleClick}/>);            
  expect(startButton.instance().props.clicked).toEqual(handleClick);
}); 

