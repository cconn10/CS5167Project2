import React, { Component } from 'react';

import ClassCard from './ClassCard';

class ClassCardContainer extends Component {

    state = {  } 
    render() { 
        return (
            <div className='d-flex flex-row flex-wrap'>
                {this.props.courseInfo.courses.map(course => 
                    <ClassCard key={course.name} courseInfo={course}></ClassCard>
                )}
            </div>
        );
    }
}
 
export default ClassCardContainer;