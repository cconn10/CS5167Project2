import React, { Component } from 'react';
import GraphicGradeTable from './PastAssignmentLists/GraphicsGrades';
import GraphicAssignmentTable from './UpcomingAssignmentLists/GraphicsAssignments';
import './AssignmentPage.css';

class GraphicAssignmentPage extends Component {
    
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
 
export default GraphicAssignmentPage;