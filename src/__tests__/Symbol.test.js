import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure,shallow } from 'enzyme';  

import Monkey from '../assets/images/monkey.png';
import Symbol from '../components/Symbol';

configure({ adapter: new Adapter() });
test('Symbol component working', () => {
  
  const symbol = shallow(
      <Symbol name="Monkey" src={Monkey} alt="Monkey" positionY={0} />);
  
                              
  expect(symbol.instance().props.positionY).toEqual(0);
}); 

