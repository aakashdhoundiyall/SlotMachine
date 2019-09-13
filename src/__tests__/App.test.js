import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import App from '../App';

configure({adapter: new Adapter() });

test('App component working', () => {
  
  const symbol = shallow(<App />);  
  expect(symbol.instance().state.text).toEqual('Slot Machine');  
});

test('Display Price function is working', () => {
  const symbol = shallow(<App />);
  symbol.instance().displayPrice('You won 10$');
  expect(symbol.instance().state.text).toEqual('You won 10$');
});