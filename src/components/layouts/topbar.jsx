import React, { Component } from 'react';
import validate from '../validate';
import { connect } from 'react-redux';
import AddProject from './addProject';


class Topbar extends React.Component {


    constructor(props) {
        super(props)

        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            isFormvalid: false,
            formControls: {
                name: {
                    value: '', 
                    placeholder: 'Please enter project name',
                    label: 'Project Name',
                    valid: false,
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    },
                    touched: false
                }, 
                desc: {
                    value: '', 
                    placeholder: 'Please enter project desc',
                    label: 'Project Description',
                    valid: false,
                    validationRules: {
                        minLength: 3
                    },
                    touched: false
                }
                
            }        
        }
    }
    changehandler = (event) => {

        const name = event.target.name;
        const value = event.target.value; 

        const updatedControls = {
            ...this.state.formControls
        }

        const updatedFormElement = {
            ...updatedControls[name]
        }

        updatedFormElement.value = value;
        updatedFormElement.touched = true;
        updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

        updatedControls[name]= updatedFormElement;

        let isFormvalid = true;

        for (let inputIndefier in updatedControls) {
            isFormvalid = updatedControls[inputIndefier].valid && isFormvalid
        }

        this.setState({
            formControls: updatedControls,
            isFormvalid: isFormvalid
        });
    }

    handleSubmit = (event) =>  {
        event.preventDefault();
        // debugger;
        const projectName = this.state.formControls.name.value;
        const projectDesc = this.state.formControls.desc.value;
        const data = {
            id: new Date(),
            projectName, 
            projectDesc
        }

        this.props.dispatch({
            type: 'ADD_PROJECT',
            data
        });
      }
    
    render() {
        return (
            <div className="container-fluid p-5">
                <br/>
                <div className="clearfix">
                    <button type="button" className="btn btn-primary float-right" data-toggle="modal" data-target="#myModal">
                        Add Project
                    </button>
                </div>
                
                <div className="modal" id="myModal">
                    <div className="modal-dialog modal-lg">
                        <div className="modal-content">
                        
                        <div className="modal-header">
                            <h4 className="modal-title">Create Project</h4>
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                        </div>
                        
                        <div className="modal-body">
                            <AddProject />
                        </div>
                        
                        <div className="modal-footer">
                        </div>
                        
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default connect()(Topbar);
