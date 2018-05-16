import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import '../src/index.css';
import ToDoList from './pages/ToDoList';
import About from './pages/About';
import App from './App'
import AddProject from './database/AddProject';
import EditProject from './database/EditProject';
import ProjectIndex from './pages/ProjectIndex';

import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Router>
        <div>
            <Route exact path='/' component={ToDoList}/>
            <Route path='/add-project' component={AddProject} />
            <Route path='/projects' component={ProjectIndex}/>
            <Route path='/edit/:id' component={EditProject}/>
        </div>
    </Router>, document.getElementById('root')
);
registerServiceWorker();
