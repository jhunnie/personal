import React, { Component } from 'react';
import axios from 'axios';
import ProjectService from './ProjectService';

class EditProject extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            description: '',
            language: ''
        };
        this.addProjectService = new ProjectService();
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        axios.get('/edit/' + this.props.match.params.id)
            .then(res => {
                //returns data that corresponds with given props _id
                this.setState({
                    name: res.data.name,
                    description: res.data.description,
                    language: res.data.language
                });
            })
            .catch(err => {
                console.log('Error: ', err)
            });
    }


    handleChange(event) {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleSubmit(event) {
        //event.preventDefault();
        this.addProjectService.updateData(this.state, this.props.match.params.id);
    }

    render() {
        return (
            <div className='container'>
                <h2> Edit Project </h2>
                <p>Make the edits in the form and submit to save the edits.</p>
                <form onSubmit={this.handleSubmit} action='/projects'>
                    <label>
                        Project Name: <input type='text' value={this.state.name} name='name' onChange={this.handleChange} className='form-control' />
                    </label><br />
                    <label>
                        Project Description: <textarea type='text' value={this.state.description} name='description' onChange={this.handleChange} className='form-control' />
                    </label> <br />
                    <label>
                        Project Language: <input type='text' value={this.state.language} name='language' onChange={this.handleChange} className='form-control' />
                    </label> <br />
                    <input type='submit' value='Submit' className='btn btn-primary' />
                </form>
            </div>
        );
    }
}

export default EditProject;