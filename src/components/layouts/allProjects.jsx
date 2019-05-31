import React, { Component } from 'react';

import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import EditProjectModalComponent from './editProjectModal.component';
import Activities from './activites';

// Material UI
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit'; 


class AllProjects extends Component {

    constructor(props, context) {
        super(props, context)

        this.handleClose = this.handleClose.bind(this);
        this.handleShow = this.handleShow.bind(this);

        this.state = {
            show: false, 
            project: {}
        };
        this._onButtonClick = this._onButtonClick.bind(this);
    }

    handleClose() {
        this.setState({ show: !this.state.show });
    }
    
    handleShow  = (project) => {
        this.setState({ show: true });
        this.props.dispatch({ type: 'EDIT_PROJECT', id: project.id })
    }   
    
    handleEdit = (project) => {
        this.state = {
            show: true
        };
        return <EditProjectModalComponent project={project} show={this.state.show} />
    }

    _onButtonClick = (project) => {
        this.setState({
            show: true,
            project: project
        });
    }

    render() {
        return (
            <div className="container-fluid pl-5 pr-5">
                <h3> Projects</h3>
                    <Paper>
                        <table className="table table-bordered table-responsive">
                            <thead className="thead-blue">
                                <tr>
                                    <th> Project Name </th>
                                    <th> Project Description </th>
                                    <th> Lifecycle Type </th>
                                    <th> Start Date </th>
                                    <th> End Date </th>
                                    <th> Stage </th>
                                    <th>Goals </th>
                                    <th> Escalation </th>
                                    <th colSpan="3"> Activities </th>
                                    <th> Actions </th>
                                </tr>
                                <tr>
                                    <th>  </th>
                                    <th> </th>
                                    <th> </th>
                                    <th>  </th>
                                    <th>  </th>
                                    <th>  </th>
                                    <th>  </th>
                                    <th>  </th>
                                    <th> Carry over </th>
                                    <th> This week </th>
                                    <th> Next week </th>
                                    <th> </th>
                                </tr>
                            </thead>
                            {this.props.projects.map(project =>
                                <tbody key={project.id}>
                                    <tr>
                                        <td> {project.projectName} </td>
                                        <td> {project.projectDesc} </td>
                                        <td> {project.lifeCycle} </td>
                                        <td> {project.startDate} </td>
                                        <td> {project.endDate} </td>
                                        <td> {project.stage} </td>
                                        <td> {project.goals} </td>
                                        <td> {project.escalation} </td>
                                        <td> 
                                            {project.activities.map(activity => ( 
                                                activity.category == 'Carry over' ? <Activities activities={activity} activityCategory={project.activityCategory} key={activity.id} />: null
                                            ))}
                                        </td>
                                        <td> 
                                            {project.activities.map(activity => ( 
                                                activity.category == 'This week' ? <Activities activities={activity} activityCategory={project.activityCategory} key={activity.id} />: null
                                            ))}
                                        </td>
                                        <td> 
                                            {project.activities.map(activity => ( 
                                                activity.category == 'Next week' ? <Activities activities={activity} activityCategory={project.activityCategory} key={activity.id} />: null
                                            ))}
                                        </td>
                                        <td> 
                                            <EditIcon onClick={() =>this._onButtonClick(project)} />
                                            {this.state.show ?
                                                <EditProjectModalComponent show={this.state.show} project={this.state.project} id={project.id} onHideModal={this.handleClose} /> :
                                                null
                                            }
                                            <DeleteIcon onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: project.id })} />
                                        </td>
                                    </tr>
                                </tbody>
                                )}
                        </table>
                    </Paper>
            </div>
        );
    } 
}

const mapStateToProps = (state) => {
    return {
        projects: state
    }
}
export default connect(mapStateToProps)(AllProjects);