import React, { Component } from 'react';
import Symbol from './Symbol';
import Banana from '../assets/images/banana.png'; 
import Orange from '../assets/images/orange.png';
import Strawberry from '../assets/images/strawberry.png';
import Monkey from '../assets/images/monkey.png';

class Wheel extends Component {
  constructor(props) {
    super(props);  
    this.state = {
      rotating: false,
      imagesArr: ["Strawberry", "Banana", "Orange", "Monkey"]
    }
  }
  componentWillMount() {
    this.shuffle();
  } 

  componentDidUpdate() {
    if(this.props.isRolling) {
      if(!this.state.rotating){
      this.startWheel();
      this.setState({
        rotating: true
      })
    }
    }else if(!this.props.isRolling) {
      if(this.state.rotating) {
        this.stopWheel();
        this.setState({
          rotating: false
        })
      }
    }
  }
  
  shuffle = () => {    
    let options = [0,1,2,3];
    let swapItems = [];
    for(let i = 0; i < 4; i++) {
      let generateRandomItem = Math.floor(Math.random() * (4-i));
      swapItems.push(options[generateRandomItem]);
      options.splice(generateRandomItem, 1);
    }   
    this.setState({
      order: swapItems
    }) 
  }
  
  startWheel = () => {
    let swapItems = [];
    let arr = this.state.order;
    let intervalId = setInterval(() => {  
      swapItems = [];
      swapItems[0] = arr[3];
      swapItems[1] = arr[0];
      swapItems[2] = arr[1];
      swapItems[3] = arr[2];
      arr = swapItems;
      this.setState({
        order: swapItems,
        interval: intervalId
      });
    },50)
  }
  
  stopWheel = () => { 
    clearTimeout(this.state.interval);
    let selected = this.state.imagesArr[this.state.order.indexOf(0)];
    this.props.active(this.props.name, selected);
  }

  render() { 
    return(
      <div className="Wheel"> 
        <Symbol name="Strawberry" src={Strawberry} positionY={this.state.order[0]*128} />
        <Symbol name="Banana" src={Banana} positionY={this.state.order[1]*128} />
        <Symbol name="Orange" src={Orange} positionY={this.state.order[2]*128} />
        <Symbol name="Monkey" src={Monkey} positionY={this.state.order[3]*128} />
      </div>
    )
  }
}

export default Wheel;