import React, { Component } from 'react';
import ReactDom from 'react-dom';
import Router from 'react-router-dom';
import './App.css';

class App extends React.Component {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    <h1 className="App-title">Welcome to React</h1>
                </header>
                <navbar className='Nav'>
                    <li className='listItem'><a href='https://localhost:3000/about'>About Me</a></li>
                    <li className='listItem'><a href='https://localhost:3000/projects'>Projects</a></li>
                    <li className='listItem'><a href='https://expressjs.com/en/api.html'>Contact</a></li>
                </navbar>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.</p>
            </div>
        );
    }
}

export default App;