import React, { Component } from 'react';
import './App.css';
import PizzaConfiguratorContainer from './components/PizzaConfiguratorContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <PizzaConfiguratorContainer />
      </div>
    );
  }
}

export default App;
