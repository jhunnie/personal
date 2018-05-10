import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import './App.css';

class ToDoList extends Component {
  constructor(props) {
    super(props)
    this.state = {

    }

  }

  componentDidMount() {

  }

  render() {
    return (
      <div className='App'>
        <h1 className='appTitle'>THIS IS YOUR BOILERPLATE</h1>
        <div className='docsContainer'>
          <ul className='orderedList docs'>
            <li className='listItem'><a href='https://reactjs.org/docs/hello-world.html'>react docs</a></li>
            <li className='listItem'><a href='https://nodejs.org/en/docs/'>node.js docs</a></li>
            <li className='listItem'><a href='https://expressjs.com/en/api.html'>express docs</a></li>
            <li className='listItem'><a href='https://docs.mongodb.com/manual/'>mongodb docs</a></li>
            <li className='listItem'><a href='https://docs.npmjs.com/'>npm info</a> and <a href='https://docs.npmjs.com/cli/docs'>docs</a></li>
            <li className='listItem'><a href='https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom'>react-router-dom info</a> and <a href='https://github.com/ReactTraining/react-router/tree/master/packages/react-router-dom/docs'>docs</a></li>
          </ul>
        </div>
        <h3 className='appSubTitle'>To Do List</h3>
        <ol className='orderedList'>
        <li className='bold'><h3>Explore/Understand Backend</h3>
          <ul>
            <li className='normalWeight'><span className='bold'>package.json</span> - what is in there, what does it mean, do you need it?</li>
            <li className='normalWeight'><span className='bold'>.env</span> - what is it?</li>
            <li className='normalWeight'><span className='bold'>routes/index.js</span> - how does it work?</li>
            <li className='normalWeight'><span className='bold'>app.js</span> - read through and try to understand what everything does</li>
          </ul>
        </li>
        <li className='bold'><h3>Explore/Understand Database</h3>
          <ul>
            <li className='normalWeight'><span className='bold'>in app.js</span> - look for where we set up code for db</li>
            <li className='normalWeight'><span className='bold'>models</span> - understand how user model works, you probably wont be using it</li>
          </ul>
        </li>
        <li className='bold'><h3>Explore/Understand React</h3>
          <ul>
            <li className='normalWeight'><span className='bold'>client/package.json</span> - what is it for, etc</li>
            <li className='normalWeight'><span className='bold'>client/src/App.js</span> - this is your home page, it was declared in client/src/index.js -- you can use any component though</li>
            <li className='normalWeight'><span className='bold'>App.css</span> - this is your CSS page</li>
          </ul>
        </li>
        <li className='bold'><h3>To Do</h3>
          <ul>
            <li className='normalWeight'>create new components
              <ul>
                <li className='normalWeight underline'>Two parent components with at least one child component each</li>
                <li className='normalWeight underline'>render them using react-router-dom -- an npm package</li>
                <li className='normalWeight underline'>set state in each and pass data down to at least one child component</li>
                <li className='normalWeight underline'>render the data, do something with it and pass data back up to parent and set state again</li>
                <li className='normalWeight underline'>Example: a to-do list, which allows you to add items in parent. The parent would hold all of the items in its state. Pass the items from parents state to a child to be rendered.</li>
                <li className='normalWeight underline'>Example cont.: you could optionally have a delete button in the child that, once the button is clicked, sends the item to be deleted back up to the parent and deletes it from the parents state.</li>
              </ul>
            </li>
            <li className='normalWeight'>Use node/express with MongoDB to add/delete/edit items from the database</li>
            <li className='normalWeight'>Optional: add/remove any npm packages that you would like</li>
            <li className='normalWeight'>Optional: feel free to use an api, such as <a href='https://cloudinary.com/documentation/admin_api'>cloudinary</a>, <a href='https://openweathermap.org/api'>weather</a>, or anything else.</li>
            <li className='normalWeight'>If you can make something useful to you, such as a portfolio, and incorporate these things then feel free to do that</li>
          </ul>
        </li>
      </ol>
      </div>
    );
  }
}

export default ToDoList;
