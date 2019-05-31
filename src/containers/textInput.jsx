import React from 'react';

export default class TextArea extends React.Component {
    
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
            <label className="form-label"> {this.props.label} </label>
            <input type="text" className={formControl} {...this.props} touched={this.props.touched.toString()} valid={this.props.valid.toString()}  />
        </div>
    );
    }   

}