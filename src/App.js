import React, { Component } from 'react';
import { RedocStandalone } from 'redoc';
import Header from './component/layout/Header';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      <Header />
        <div style={{paddingTop: '56px'}}>
          <RedocStandalone className="" specUrl='http://petstore.swagger.io/v2/swagger.json'></RedocStandalone>
        </div>
      </div>
    );
  }
}

export default App;
