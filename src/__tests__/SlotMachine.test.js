import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import SlotMachine from '../components/SlotMachine';

configure({adapter: new Adapter() });

const printPrize = (text)  => {
  
};
  
test('Slot Machine component working', () => {
  const symbol = shallow(<SlotMachine prize={printPrize} />);  
  expect(symbol.instance().state.rolling).toEqual(false);  
});

test('Slot Machine starts after 5 seconds of inactivity and stops 10 seconds after start', () => {
  const symbol = shallow(<SlotMachine prize={printPrize} />); 
   setTimeout(() => {
     expect(symbol.instance().state.rolling).toEqual(true);
    setTimeout(() => {
      expect(symbol.instance().state.rolling).toEqual(false);
    }, 10000);
  }, 5000);
});

test('Start Rolling Function Should Start The Game', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);
  symbol.instance().startRolling();
   expect(symbol.instance().state.rolling).toEqual(true);
});

test('Stop Rolling Function Should Stop The Game', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);
  symbol.instance().stopRolling();
   expect(symbol.instance().state.rolling).toEqual(false);
});

test('Display Price Money', () => {
  
  const symbol = shallow(<SlotMachine prize={printPrize} />);
  
   symbol.instance().itemsArr = ["Monkey", "Monkey", "Monkey"];
   expect(symbol.instance().displayPriceMoney()).toEqual(100);
  
  symbol.instance().itemsArr = ["Banana", "Monkey", "Monkey"];
   expect(symbol.instance().displayPriceMoney()).toEqual(20);
  
  symbol.instance().itemsArr = ["Monkey", "Banana", "Monkey"];
   expect(symbol.instance().displayPriceMoney()).toEqual(10);
  
  symbol.instance().itemsArr = ["Monkey", "Banana", "Strawberry"];
   expect(symbol.instance().displayPriceMoney()).toEqual(0);
});

