import React, { Component } from 'react';

import { connect } from 'react-redux';
// import Project from './project';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import styled from 'styled-components';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import EditProject from './editProject';
import ModalComponent from './modal.component';

const StyledTableCell = styled.th`
    background-color: #fff;
    color: #111
    padding: 10px;
`
// const StyledTableCell = withStyles(theme => ({
//     head: {
//       backgroundColor: theme.palette.common.black,
//       color: theme.palette.common.white,
//     },
//     body: {
//       fontSize: 14,
//     },
//   }))(TableCell);


const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);


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
        // console.log("props id", id);
        console.log("projecrt", project);
        this.props.dispatch({ type: 'EDIT_PROJECT', id: project.id })
    }   
    
    handleEdit = (project) => {
        debugger;
        console.log("project", project);
        this.state = {
            show: true
        };
        console.log("project", project);
        return <ModalComponent project={project} show={this.state.show} />
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
                        <Table >
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell> Project Name </StyledTableCell>
                                    <StyledTableCell> Project Description </StyledTableCell>
                                    <StyledTableCell> Lifecycle Type </StyledTableCell>
                                    <StyledTableCell> Start Date </StyledTableCell>
                                    <StyledTableCell> End Date </StyledTableCell>
                                    {/* <StyledTableCell> Activities </StyledTableCell> */}
                                    <StyledTableCell> Stage </StyledTableCell>
                                    <StyledTableCell>Goals </StyledTableCell>
                                    <StyledTableCell> Escalation </StyledTableCell>
                                    <StyledTableCell> Actions </StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {this.props.projects.map(project =>
                                <StyledTableRow key={project.id}>
                                    <StyledTableCell component="th" scope="row"> {project.projectName} </StyledTableCell>
                                    <StyledTableCell> {project.projectDesc} </StyledTableCell>
                                    <StyledTableCell> {project.lifeCycle} </StyledTableCell>
                                    <StyledTableCell> {project.startDate} </StyledTableCell>
                                    <StyledTableCell> {project.endDate} </StyledTableCell>
                                    <StyledTableCell> {project.stage} </StyledTableCell>
                                    <StyledTableCell> {project.goals} </StyledTableCell>
                                    <StyledTableCell> {project.escalation} </StyledTableCell>
                                    <StyledTableCell> 
                                        <EditIcon onClick={() =>this._onButtonClick(project)} />
                                        {this.state.show ?
                                            <ModalComponent show={this.state.show} project={this.state.project} id={project.id} onHideModal={this.handleClose} /> :
                                            null
                                        }
                                        <DeleteIcon onClick={() => this.props.dispatch({ type: 'DELETE_POST', id: project.id })} />
                                    </StyledTableCell>
                                </StyledTableRow>
                                )}
                            </TableBody>
                        </Table>
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