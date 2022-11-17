import React, { Component } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsis} from '@fortawesome/free-solid-svg-icons';

import Badge from './Badge';
import './BadgeDisplay.css';
import BadgeData from "../../course-data/badges.json"

class BadgeDisplay extends Component {
    state = {  } 

    getProgressPercent(submitted, required){
        return submitted / required * 100
    }

    render() { 
        const badges = BadgeData.badges;
        return (
            <React.Fragment>
                <div className='container border border-2 border-primary rounded badge-display p-3'>
                    <div className='row d-flex align-items-center pb-2'>
                        <h3>Badges</h3>
                    </div>
                    <div className='d-flex align-items-center '>
                        {badges.map((badge, index) => {
                            const progressPercent = this.getProgressPercent(badge.assignments_submitted, badge.required_submissions)
                            if (index < 4)
                            return <Badge key={index} BadgeInfo={badge} ProgressPercent={(progressPercent > 100 ? 100 : progressPercent)} ></Badge>
                        })}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default BadgeDisplay;