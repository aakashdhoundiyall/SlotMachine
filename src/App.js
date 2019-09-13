import React, { Component } from 'react'; 
import SlotMachine from './components/SlotMachine';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      text: 'Slot Machine'
    }
  }
  displayPrice = (text) => {
    this.setState({
      text: text
    })
  }
  render() {
    return (
      <div className="App"> 
        <h1>{this.state.text}</h1>
        <SlotMachine prize={this.displayPrice} />
      </div>
    );
  }
}

export default App;
