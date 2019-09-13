import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import Wheel from '../components/Wheel';

configure({adapter: new Adapter() });
test('Wheel component working', () => {
  
  const symbol = shallow(<Wheel name="Wheel3" isRolling={false} />);
  
  expect(symbol.instance().state.rotating).toEqual(false);  
});