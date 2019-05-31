import React from 'react';

export default class SelectInput extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
        
        let formControl = 'form-control';
    
        if(this.props.touched && !this.props.valid) {
            formControl = 'form-control control-error' 
        }
    
        return (
            <div className="form-group">
                <label className="form-label">{this.props.label}</label>
                <select className={formControl} value={this.props.value} onChange={this.props.onChange} name={this.props.name}>
                    {this.props.options.map(option => (
                        <option key={option.value} value={option.value}>
                        {option.displayValue}
                        </option>
                    ))
                    }
                </select>
            </div>
        );
    }
}


