import React, { Component } from 'react';
import './ClassCard.css'

class ClassCard extends Component {

    state = { } 

    handleURL = name => {
        name.toLowerCase().split(' ').join('-');
    };

    render() { 
        const courseInfo = this.props.courseInfo
        return (
            <React.Fragment>
                <div className="card card-home">
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{courseInfo.name}</h5>
                        <h6 className='card-subtitle text-muted my-2'>{courseInfo.professor}</h6>
                        <p className="card-text">{courseInfo.description}</p>
                        <a href={"/Courses/" + this.handleURL(courseInfo.name)} className="btn btn-primary mt-auto">View Course Page</a>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ClassCard;