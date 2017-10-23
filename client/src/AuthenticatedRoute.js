import React, { Component } from 'react';

class AuthenticatedRoute extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: localStorage.getItem('mernToken')
    }
    this.getOutput = this.getOutput.bind(this)
  }

  getOutput() {
    if (this.state.token) {
      return (<p>You are authorized to view this text</p>)
    } else {
      return (<p>INTRUDER ALERT! INTRUDER ALERT!</p>)
    }
  }

  render() {
    return this.getOutput();
  }
}

export default AuthenticatedRoute;
