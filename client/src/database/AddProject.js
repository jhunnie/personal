import React, { Component } from 'react';
//import ReactDom from 'react-dom';
import ProjectService from'./ProjectService'

class AddProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            //description: '',
            //language: '',
            //concepts: ['']
        }
        this.addProjectService = new ProjectService();

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.cancelCourse = this.cancelCourse.bind(this);
    }

    handleChange(event) {
        this.setState ({ 
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        alert(this.state.name + ' added');
        event.preventDefault();
        this.addProjectService.sendData(this.state);
        this.cancelCourse();
    }

    //function clears the form without re-rendering the page 
    cancelCourse=()=>{
        document.getElementById('project-info').reset();
    }

    render() {
        return (
            <div className='container'>
                <h2> Add New Project </h2>
                <form onSubmit={this.handleSubmit} id='project-info'>
                    <label>
                        Project Name: <input type='text' value={this.state.value} name='name' onChange={this.handleChange} className='form-control' />
                    </label><br />
                    <label>
                        Project Description: <textarea type='text' value={this.state.value} name='description' onChange={this.handleChange} className='form-control' />
                    </label> <br />
                    <label>
                        Project Language: <input type='text' value={this.state.value} name='language' onChange={this.handleChange} className='form-control' />
                    </label> <br />
                    <input type='submit' value='Submit' className='btn btn-primary' />
                </form>
            </div>
        );
    }
}

export default AddProject;