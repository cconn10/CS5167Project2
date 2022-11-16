import React, { Component } from 'react';
import UIGradeTable from './PastAssignmentLists/UIGrades';
import UIAssignmentTable from './UpcomingAssignmentLists/UIAssignments';
import './AssignmentPage.css';

class UIAssignmentPage extends Component {
    
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
 
export default UIAssignmentPage;