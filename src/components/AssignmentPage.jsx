import React, { Component } from 'react';
import Grades from './Grades';
import Filter from './Filter';
import './AssignmentPage.css'

class AssignmentPage extends Component {
    state = { 
     } 

    render() { 
        return (
            <React.Fragment>
                <div className="gridContainer">
                <div className="classGrades">
                    <Grades></Grades>
                </div>
                <div className="filter">
                    <Filter></Filter>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default AssignmentPage;