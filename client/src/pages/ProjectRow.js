import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ProjectService from '../database/ProjectService';

//component displays project details 
class ProjectRow extends Component {
    constructor(props) {
        super(props);
        this.addProjectService = new ProjectService();
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    //handleSubmit only applicable to delete 
    handleSubmit(event) {
        event.preventDefault();
        this.props.changeState(this.props.index);
        this.addProjectService.deleteData(this.props.obj._id);
    }

    render() {
        return (       
            <tr>
                <td>
                    {this.props.obj.name}
                </td>
                <td>
                    {this.props.obj.description}
                </td>
                <td>
                    {this.props.obj.language}
                </td>
                <td>
                   <Link to={"/edit/" + this.props.obj._id} className="btn btn-primary">Edit</Link>
                </td>
                <td>
                    <form onSubmit={this.handleSubmit} >
                        <input type="submit" value="Delete" className="btn btn-danger" />
                    </form>
                </td>
            </tr>
        );
    }
}

export default ProjectRow;