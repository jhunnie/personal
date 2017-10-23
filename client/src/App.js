import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import AuthenticatedRoute from './AuthenticatedRoute';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
  }

  liftTokenToState(token) {
    this.setState({token: token})
  }

  render() {
    return (
      <div className="App">
        <div className="SignupBox">
          <Signup lift={this.liftTokenToState} />
        </div>
        <div className="LoginBox">
          <Login lift={this.liftTokenToState} />
        </div>
        <div>

        </div>
      </div>
    );
  }
}

export default App;
