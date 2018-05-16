import React, { Component } from 'react';
import ProjectService from '../database/ProjectService';
import axios from 'axios';
import ProjectRow from './ProjectRow';

class ProjectIndex extends Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: []
        }
        this.newProjectService = new ProjectService();
        this.changeState = this.changeState.bind(this);
    }

    componentDidMount() {
        axios.get('/render-data')
            .then(response => {
                this.setState({
                    projects: response.data //not returning the json data
                });
            })
            .catch(function (err) {
                console.log(err);
            });
    }

    table() {
        if (this.state.projects instanceof Array){
            return this.state.projects.map((object, i)=> {
                return <ProjectRow obj={object} key={i} index={i} changeState={this.changeState}/>;
            });
        }
    }

    changeState(index){
        //set variable to state
        //edit that variable to remove project at index
        //set state with new project array
        var newState = this.state.projects;
        newState.splice(index, 1); //remove only one at the index returned from child component
        this.setState({
            projects: newState
        })
    }

    render() {
        console.log('state', this.state);
        return (
            <div className="container">
                <table className="table table-striped">
                    <thead>
                        <tr>
                            <td>Name</td>
                            <td>Description</td>
                            <td>Language</td>
                        </tr>
                    </thead>
                    <tbody>
                        {this.table()}
                    </tbody>
                </table>
            </div>
        );
    }
}

export default ProjectIndex;