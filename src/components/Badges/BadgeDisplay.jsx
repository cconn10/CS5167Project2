import React, { Component } from 'react';

class BadgeDisplay extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='container border border-primary rounded badgeDisplay'>
                    <h3>Badges</h3>
                </div>
            </React.Fragment>
        );
    }
}
 
export default BadgeDisplay;