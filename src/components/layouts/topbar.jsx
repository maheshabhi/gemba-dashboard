import React, { Component } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import AddProjectModalComponent from './addProjectModal.component'

class Topbar extends React.Component {

    constructor(props) {
        super(props)

        this.state = {
            show: false      
        }
    }

    _onButtonClick = () => {
        this.setState({
            show: true,
        });
    }

    handleClose = () => {
        this.setState({ show: !this.state.show });
    }

    render() { 
        return (
            <div className="container-fluid p-4">
                <br/>

                <div className="clearfix">
                    <Button variant="contained" color="primary" className="float-right" onClick={this._onButtonClick}>
                        Add Project
                    </Button>
                    {this.state.show ?
                        <AddProjectModalComponent show={this.state.show}  onHideModal={this.handleClose} /> :
                        null
                    } 
                </div>
            </div>
        );
    }
}

export default connect()(Topbar);
