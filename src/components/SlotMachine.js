import React, { Component } from 'react';
import Wheel from './Wheel';
import StartButton  from './StartButton';
import StopButton from './StopButton';


class SlotMachine extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rolling: false,
      timeout: null
    }
    this.itemsArr = [];
  }

  componentDidMount() {
    this.slotEvents(this.startRolling, 5000);
  }

  startRolling = () => {
    clearTimeout(this.state.timeout);
    this.setState({
      rolling: true,
      timeout: null
    });
    this.props.prize("Slot Machine");
     this.slotEvents(this.stopRolling, 10000);
  }

  stopRolling = () => {
    clearTimeout(this.state.timeout);
    this.setState({
      rolling: false,
      timeout: null
    });
    this.slotEvents(this.startRolling, 5000);
  }

  slotEvents = (func, time) => {
    let timeout = setTimeout(() =>  { 
      func();
    },time); 
    this.setState({
      timeout: timeout
    });
  }

  getActive = (num, symbol) => {
    let prize;
    this.itemsArr.push(symbol);
    if(this.itemsArr.length === 3) {
      prize = this.displayPriceMoney()
      this.itemsArr = [];
    } 
    this.props.prize("You Won " + prize + " $");
  }
  
  displayPriceMoney = () => {
    if(this.itemsArr[0] === this.itemsArr[1] && this.itemsArr[1] === this.itemsArr[2]) {
      return 100;
    }else if(this.itemsArr[0] === this.itemsArr[1] || this.itemsArr[1] === this.itemsArr[2]) {
      return 20; 
    }else if(this.itemsArr[0] === this.itemsArr[2]) {
      return 10;
    }else {
      return 0; 
    }
  }
  render() {
    return(
      <div className="SlotMachine">
        <div className="WheelWrapper">
          <Wheel name="Wheel1" isRolling={this.state.rolling} active={this.getActive} />
          <Wheel name="Wheel2" isRolling={this.state.rolling} active={this.getActive} />
          <Wheel name="Wheel3" isRolling={this.state.rolling} active={this.getActive} />
        </div>
        <StartButton clicked={this.startRolling} />
        <StopButton clicked={this.stopRolling} />
      </div>
    )
  }
}

export default SlotMachine;