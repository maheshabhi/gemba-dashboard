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
                                    {/* <StyledTableCell> <DragDropComponent activities={project.activities} /> </StyledTableCell> */}
                                    <StyledTableCell> {project.goals} </StyledTableCell>
                                    <StyledTableCell> {project.escalation} </StyledTableCell>
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