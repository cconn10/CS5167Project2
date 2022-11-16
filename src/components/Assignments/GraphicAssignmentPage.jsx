import React, { Component } from 'react';
import GraphicGradeTable from './GraphicsGrades';
import GraphicAssignmentTable from './GraphicsAssignments';
import './AssignmentPage.css';

class UIAssignmentPage extends Component {
    
    render() { 
        return (
            <div className="gridContainer">
                <div className="classGrades">
                    <GraphicAssignmentTable></GraphicAssignmentTable>
                    <GraphicGradeTable></GraphicGradeTable>
                </div>
            </div>

        );
    }
};
 
export default UIAssignmentPage;