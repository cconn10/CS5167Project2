import React, { Component } from 'react';

import ClassCard from './ClassCard';

class ClassCardContainer extends Component {
    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-row flex-wrap'>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
                <ClassCard></ClassCard>
            </div>
        );
    }
}
 
export default ClassCardContainer;