import React, { Component } from 'react';
import { withStyles, Theme, createStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';


const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
const useStyles = makeStyles(theme => ({
        root: {
        width: '100%',
        marginTop: theme.spacing(3),
        overflowX: 'auto',
        },
        table: {
        minWidth: 700,
        },
}));

  const StyledTableRow = withStyles(theme => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.background.default,
      },
    },
  }))(TableRow);

class Project extends Component {
    
    constructor(props) {
        super(props)
        
    }

    render() {

        return (

            <Paper>
                <Table >
                    <TableHead>
                        <TableRow>
                            <StyledTableCell> Project Name </StyledTableCell>
                            <StyledTableCell> Project Description </StyledTableCell>
                            <StyledTableCell> Lifecycle Type </StyledTableCell>
                            <StyledTableCell> Start Date </StyledTableCell>
                            <StyledTableCell> End Date </StyledTableCell>
                            <StyledTableCell> Activities </StyledTableCell>
                            <StyledTableCell>Goals </StyledTableCell>
                            <StyledTableCell> Escalation </StyledTableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <StyledTableRow key={this.props.project.id}>
                            <StyledTableCell component="th" scope="row"> {this.props.project.projectName} </StyledTableCell>
                            <StyledTableCell> {this.props.project.projectDesc} </StyledTableCell>
                            <StyledTableCell> {this.props.project.lifeCycle} </StyledTableCell>
                            <StyledTableCell> {this.props.project.startDate} </StyledTableCell>
                            <StyledTableCell> {this.props.project.endDate} </StyledTableCell>
                            <StyledTableCell> {this.props.project.stage} </StyledTableCell>
                            <StyledTableCell> {this.props.project.activities} </StyledTableCell>
                            <StyledTableCell> {this.props.project.goals} </StyledTableCell>
                            <StyledTableCell> {this.props.project.escallation} </StyledTableCell>
                        </StyledTableRow>
                    </TableBody>
                </Table>
                </Paper>


            // <div>
            //     <h2>{this.props.project.projectName}</h2>
            //     <p>{this.props.project.projectDesc}</p>
            // </div>
        );
    }
}
export default Project;