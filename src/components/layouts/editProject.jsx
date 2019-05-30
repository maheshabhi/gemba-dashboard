import React from 'react';
import validate from '../validate';
import { connect } from 'react-redux';
import Modal from 'react-bootstrap/Modal'
import AddProject from '../reducers/addProject';
import EditComponent from './editComponent';
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

class EditProject extends React.Component {

    constructor(props) {
        super(props)

        this.handleEdit = this.handleEdit.bind(this);        
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
                    value: this.props.project.projectDesc, 
                    placeholder: 'Please enter project desc',
                    label: 'Project Description',
                    valid: false,
                    validationRules: {
                        minLength: 3
                    },
                    touched: false
                }, 
                lifeCycle: {
                    value: this.props.project.lifeCycle, 
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
                    value: this.props.project.startDate, 
                    placeholder: 'Please choose a start date',
                    label: 'Start Date',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }
                }, 
                endDate: {
                    value: this.props.project.endDate, 
                    placeholder: 'Please choose a end date',
                    label: 'End Date',
                    valid: false,
                    touched: false, 
                    validationRules: {
                        isRequired: true
                    }
                }, 
                stage: {
                    value: this.props.project.stage, 
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
                    value: this.props.project.value, 
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
                    value: this.props.project.escalation, 
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
                    value: this.props.project.activityCategory, 
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
                    value: this.props.project.activities, 
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

    handleEdit = (event) =>  {
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
                    


                    {this.props.data.map((project) => {
                        {project.editing ? console.log("project edit ", project): console.log("project", project) }
                        
                        // <div key={project.id}>
                        //     {project.editing ? <EditComponent project={project} key={project.id} /> :
                        //         <project key={project.id} project={project} />}
                        // </div>
                    })}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (project) => {
    return {
        data: project 
    }
}

export default connect(mapStateToProps)(EditProject)