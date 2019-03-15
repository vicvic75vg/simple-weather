import React, { Component } from 'react';
import WeatherData from './Components/WeatherData';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
       <div className="App-header">
        <h1>Simple Weather</h1>
          <WeatherData />
       </div> 
      </div>
    );
  }
}

export default App;
