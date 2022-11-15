import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAward } from '@fortawesome/free-solid-svg-icons';

import './Badge.css'

class Badge extends Component {
    state = { 
     } 
    progressStyles = {
        'width': "80%"
    }
    progressBarStyles = {
        'width': this.props.ProgressPercent + "%" 
    }
    getProgressWidth() {
        this.setState({
            progressPercent: (this.props.BadgeInfo.assignments_submitted / this.props.BadgeInfo.required_submissions) * 100
        })
    }

    render() { 
        const badge = this.props.BadgeInfo;
        const progressPercent = this.props.ProgressPercent;

        return (
            <div className='badge-container d-flex flex-column align-items-center mt-2'>
                <FontAwesomeIcon className='icon badge-icon ma-2' icon={ faAward } />
                <p className='badge-text'>{badge.name}</p>
                <div className="progress mt-auto" style={this.progressStyles}>
                    <div className="progress-bar" style={this.progressBarStyles} role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100">
                        { Math.ceil(progressPercent > 100 ? 100 : progressPercent) + "%" }
                    </div>
                </div>
            </div>
        );
    }
}
 
export default Badge;