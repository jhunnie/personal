import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="SignupBox">
          <Signup />
        </div>
        <div className="LoginBox">
          <Login />
        </div>
      </div>
    );
  }
}

export default App;
