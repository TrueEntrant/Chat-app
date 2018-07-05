import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <h2>Thats all that i can add to this page</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, ipsam. Facere 
          doloremque ab quos recusandae voluptatibus quae corporis vel, consectetur quod 
          ipsum minus, possimus dolore! Facilis tempora incidunt ad alias?</p>
      </div>
    );
  }
}

export default App;
