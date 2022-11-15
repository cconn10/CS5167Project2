import React, { Component } from 'react';
import Grades from './Grades';
import Assignments from './Assignments';
import './AssignmentPage.css';

class AssignmentPage extends Component {
    
    render() { 
        return (
            <div className="gridContainer">
                <div className="classGrades">
                    <Assignments></Assignments>
                    <Grades></Grades>
                </div>
            </div>

        );
    }
};
 
export default AssignmentPage;