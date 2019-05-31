import React from 'react';

import Paper from '@material-ui/core/Paper';


export default class Activities extends React.Component {

    constructor(props) {
        super(props)
    }

    render() {
            
        return (
                <span key={this.props.activities.id} className="card">      
                    {this.props.activities.content}
                </span>
        );
    }
}


