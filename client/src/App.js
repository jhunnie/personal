import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';
import Signup from './Signup';
import Login from './Login';
import Logout from './Logout';
import AuthenticatedRoute from './AuthenticatedRoute';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: {},
      user: {}
    }
    this.liftTokenToState = this.liftTokenToState.bind(this)
    this.logout = this.logout.bind(this)
  }

  liftTokenToState(data) {
    this.setState({token: data.token, user: data.user})
  }

  logout() {
    localStorage.removeItem('mernToken')
    this.setState({token: {}, user: {}})
  }

  render() {
    return (
      <div className='App'>
        <div className='SignupBox'>
          <Signup lift={this.liftTokenToState} />
        </div>
        <div className='LoginBox'>
          <Login lift={this.liftTokenToState} />
        </div>
        <div className='LogoutBox'>
          <Logout logout={this.logout} />
        </div>
      </div>
    );
  }
}

export default App;
