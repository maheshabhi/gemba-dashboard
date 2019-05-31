import React, { Component } from 'react';

import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal';

import TextInput from '../../containers/textInput';
import TextArea from '../../containers/textarea';
import DateInput from '../../containers/dateInput';
import SelectInput from '../../containers/selectInput';


class AddProjectModalComponent extends React.Component {

    constructor(props) {
        super(props)
        console.log("props", this.props);
        
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
        console.log("closing the modal");

    }

    handleSubmit = (e) => {
        e.preventDefault();
        const data = {
            projectName: this.state.formControls.name.value,
            projectDesc: this.state.formControls.desc.value,
            lifeCycle  : this.state.formControls.lifeCycle.value,
            startDate  : this.state.formControls.startDate.value,
            endDate    : this.state.formControls.endDate.value,
            stage      : this.state.formControls.stage.value,
            activities : this.state.formControls.activities.value, 
            goals      : this.state.formControls.goals.value,
            escalation : this.state.formControls.escalation.value, 
            activityCategory: this.state.formControls.activityCategory.value
        }
        this.props.dispatch({ type: 'ADD_PROJECT', data: data })

        this.props.onHideModal();
    }

    render() {

        return (

            <div>
                <Modal show={this.props.show} onHide={this.props.onHideModal}  animation={false} size="lg">
                    <Modal.Header closeButton>
                        <Modal.Title> Edit project details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>

                    <div>
                        <form  onSubmit={this.handleSubmit}>
                        <div className="row">
                                <div className="col-md-6">
                                    <TextInput name="name" value={this.state.formControls.name.value} 
                                        placeholder={this.state.formControls.name.placeholder} onChange={this.changehandler} label={this.state.formControls.name.label}
                                        touched={this.state.formControls.name.touched}
                                        valid={this.state.formControls.name.valid}
                                    />
                                </div>
                                
                                <div className="col-md-6">
                                    <SelectInput name="lifeCycle" value={this.state.formControls.lifeCycle.value}  label={this.state.formControls.lifeCycle.label}
                                        placeholder={this.state.formControls.lifeCycle.placeholder} onChange={this.changehandler}
                                        touched={this.state.formControls.lifeCycle.touched}
                                        valid={this.state.formControls.lifeCycle.valid} options={this.state.formControls.lifeCycle.options}
                                    />                                
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-12">
                                    <TextArea name="desc" value={this.state.formControls.desc.value} label={this.state.formControls.desc.label} 
                                        placeholder={this.state.formControls.desc.placeholder} onChange={this.changehandler}
                                        touched={this.state.formControls.desc.touched} valid={this.state.formControls.desc.valid}
                                    /> 
                                </div>
                            </div>

                            <div className="row">
                                <div className="col-md-4">
                                    <SelectInput name="stage" value={this.state.formControls.stage.value} label={this.state.formControls.stage.label}
                                        placeholder={this.state.formControls.stage.placeholder} onChange={this.changehandler}
                                        touched={this.state.formControls.stage.touched} 
                                        valid={this.state.formControls.stage.valid} options={this.state.formControls.stage.options}
                                    />                       
                                </div>
                                <div className="col-md-4">
                                    <DateInput name="startDate" value={this.state.formControls.startDate.value} label={this.state.formControls.startDate.label}
                                            onChange={this.changehandler} touched={this.state.formControls.startDate.touched} valid={this.state.formControls.startDate.valid} 
                                        />   
                                </div>
                                
                                <div className="col-md-4">
                                    <DateInput name="endDate" value={this.state.formControls.endDate.value} label={this.state.formControls.endDate.label}
                                         onChange={this.changehandler} touched={this.state.formControls.endDate.touched} valid={this.state.formControls.endDate.valid} 
                                    />                         
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-md-6">
                                    <TextInput name="goals" value={this.state.formControls.goals.value} 
                                        placeholder={this.state.formControls.goals.placeholder} onChange={this.changehandler} label={this.state.formControls.goals.label}
                                        touched={this.state.formControls.goals.touched}
                                        valid={this.state.formControls.goals.valid}
                                    />
                                </div>
                                
                                <div className="col-md-6">
                                    <TextInput name="escalation" value={this.state.formControls.escalation.value} 
                                        placeholder={this.state.formControls.escalation.placeholder} onChange={this.changehandler} label={this.state.formControls.escalation.label}
                                        touched={this.state.formControls.escalation.touched}
                                        valid={this.state.formControls.escalation.valid}
                                    />                            
                                </div>
                            </div> <br/>
                            <div className="row">
                                <div className="col-md-12 activity-title">
                                        <h5> Activities </h5>
                                </div>
                                <div className="col-md-6">
                                    <SelectInput name="activityCategory" value={this.state.formControls.activityCategory.value} label={this.state.formControls.activityCategory.label}
                                            placeholder={this.state.formControls.activityCategory.placeholder} onChange={this.changehandler}
                                            touched={this.state.formControls.activityCategory.touched} 
                                            valid={this.state.formControls.activityCategory.valid} options={this.state.formControls.activityCategory.options}
                                        /> 
                                </div>
                                
                                <div className="col-md-6">
                                    <TextArea name="activities" value={this.state.formControls.activities.value} 
                                        placeholder={this.state.formControls.activities.placeholder} onChange={this.changehandler} label={this.state.formControls.activities.label}
                                        touched={this.state.formControls.activities.touched}
                                        valid={this.state.formControls.activities.valid}
                                    />                            
                                </div>
                            </div>
                            <br/><br/><br/>
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

export default connect() (AddProjectModalComponent);