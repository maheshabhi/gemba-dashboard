import React from 'react';
import validate from '../validate';
import { connect } from 'react-redux';

const TextInput = (props) => {

    let formControl = 'form-control'; 

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        <div className="form-group">
            <label className="form-label"> {props.label} </label>
            <input type="text" className={formControl} {...props} touched={props.touched.toString()} valid={props.valid.toString()}  />
        </div>
    );
}

const TextArea = (props) => {

    let formControl = 'form-control';

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        <div className="form-group">
        <label className="form-label"> {props.label} </label>
            <textarea className={formControl} {...props} touched={props.touched.toString()} valid={props.valid.toString()} />
        </div>
    );
    
}

const SelectInput = (props) => {

    let formControl = 'form-control';

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error'
    }

    return (
        
        <div className="form-group">
            <label className="form-label">{props.label}</label>
            <select className={formControl} value={props.value} onChange={props.onChange} name={props.name}>
                {props.options.map(option => (
                    <option key={option.value} value={option.value}>
                    {option.displayValue}
                    </option>
                ))
                }
            </select>
        </div>
    );
}

const DateInput = (props) => {
    
    let formControl = 'form-control';

    if(props.touched && !props.valid) {
        formControl = 'form-control control-error' 
    }

    return (
        <div className="form-group">
        <label className="form-label">{props.label}</label>
            <input type="date" className={formControl} {...props} touched={props.touched.toString()} valid={props.valid.toString()} />
        </div>
    );
}

class AddProject extends React.Component {

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

    handleSubmit = (event) =>  {
        event.preventDefault();
        console.log("this.props", this.props);
        
        console.log("form data", this.state.formControls);
        
        const projectName = this.state.formControls.name.value;
        const projectDesc = this.state.formControls.desc.value;
        const lifeCycle = this.state.formControls.lifeCycle.value;
        const startDate = this.state.formControls.startDate.value;
        const endDate = this.state.formControls.endDate.value;
        const stage = this.state.formControls.stage.value;
        const goals = this.state.formControls.goals.value;
        const escalation = this.state.formControls.escalation.value;
        const activityCategory = this.state.formControls.desc.value;
        const activities = this.state.formControls.activities.value;

        const data = {
            id: new Date(),
            projectName,
            projectDesc, 
            lifeCycle, 
            startDate, 
            endDate, 
            stage,
            goals, 
            escalation, 
            activityCategory, 
            activities

        }

        this.props.dispatch({
            type: 'ADD_PROJECT',
            data
        });
        
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

    render() {

        return(
            <div>
                <div className="mt-4">
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
                            <div className="row">
                                <div className="col-md-12 ">
                                    <input  type="submit" value="Submit" className="btn btn-primary float-right" /> 
                                </div>      
                            </div><br/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect()(AddProject)