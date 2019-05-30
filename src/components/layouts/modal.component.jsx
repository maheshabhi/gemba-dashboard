import React, { Component } from 'react';

import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

const TextInput = (props) => {

    let formControl = 'form-control'; 

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        <div className="form-group">
            <label className="form-label"> {props.label} </label>
            <input type="text" className={formControl} {...props}  />
        </div>
    );
}


class ModalComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log("props", this.props);
        
        this.state = {
            isFormvalid: false,
            formControls: {
                name: {
                    value: this.props.project.projectName, 
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
                }, 
                lifeCycle: {
                    value: '', 
                    placeholder: 'Please select lifeCycle type',
                    label: "Life Cycle Type",
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }, 
                    options: [
                        {value: 'Core', displayValue: 'Core'},
                        {value: 'Moderate', displayValue: 'Moderate'},
                        {value: 'Full', displayValue: 'Full'},
                    ]
                }, 
                startDate: {
                    value: '', 
                    placeholder: 'Please choose a start date',
                    label: 'Start Date',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }
                }, 
                endDate: {
                    value: '', 
                    placeholder: 'Please choose a end date',
                    label: 'End Date',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }
                }, 
                stage: {
                    value: '', 
                    placeholder: 'Please select the stage',
                    label: 'Project stage',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    },
                    options: [
                        {value: 0, displayValue: '1'},
                        {value: 1, displayValue: '2'},
                        {value: 2, displayValue: '3'},
                    ]
                }, 
                goals: {
                    value: '', 
                    placeholder: 'Please enter project goals',
                    label: 'Project Goals',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    }
                }, 
                escalation: {
                    value: '', 
                    placeholder: 'Please enter project escalation',
                    label: 'Project Escalation',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    }
                },
                activityCategory: {
                    value: '', 
                    placeholder: 'Please select activity category',
                    label: 'Category',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    },
                    options: [
                        { value: 'Carry over', displayValue: 'Carry over' },
                        { value: 'Last week', displayValue: 'Last week' },
                        { value: 'Next Week', displayValue: 'Next Week' },
                    ]
                }, 
                activities: {
                    value: '', 
                    placeholder: 'Please enter activities deatails',
                    label: 'Activities Details',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        minLength: 3, 
                        isRequired: true
                    }
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
        // updatedFormElement.valid = validate(value, updatedFormElement.validationRules);

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
    handleClose= () => {
        console.log("closing the modal")
    }

    handleEdit = (e) => {
        e.preventDefault();
        const newTitle = this.state.formControls.name.value;
        const data = {
            newTitle,
        }
        debugger;
        this.props.dispatch({ type: 'UPDATE', id: this.props.project.id, data: data })
    }

    render() {

        return (

            <div>
                <Modal show={this.props.show} onHide={this.props.onHideModal}  animation={false}>
                    <Modal.Header closeButton>
                        <Modal.Title>Modal heading</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <div>
                        <form  onSubmit={this.handleEdit}>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextInput name="name" defaultValue={this.state.formControls.name.value}
                                        placeholder={this.state.formControls.name.placeholder} onChange={this.changehandler} label={this.state.formControls.name.label}
                                       
                                    />
                                </div>
                            </div>
                            <br/>
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input  type="submit" value="Submit" className="btn btn-primary float-right" /> 
                                </div>      
                            </div><br/>
                        </form>
                    </div>

                    </Modal.Body>
                    <Modal.Footer>
                    </Modal.Footer>
                </Modal>
            </div>
             
        )
    }
}

export default connect() (ModalComponent);