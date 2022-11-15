import React, { Component } from 'react';
import UIGradeTable from './UIGrades';
import UIAssignmentTable from './UIAssignments';
import './AssignmentPage.css';

class AssignmentPage extends Component {
    
    render() { 
        return (
            <div className="gridContainer">
                <div className="classGrades">
                    <UIAssignmentTable></UIAssignmentTable>
                    <UIGradeTable></UIGradeTable>
                </div>
            </div>

        );
    }
};
 
export default AssignmentPage;