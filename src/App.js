import React, { Component } from 'react';
import { RedocStandalone } from 'redoc';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <RedocStandalone specUrl='http://petstore.swagger.io/v2/swagger.json'></RedocStandalone>
      </div>
    );
  }
}

export default App;
