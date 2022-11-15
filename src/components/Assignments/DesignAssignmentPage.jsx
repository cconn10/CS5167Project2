import React, { Component } from 'react';
import DesignGradeTable from './DesignGrades';
import DesignAssignmentTable from './DesignAssignments';
import './AssignmentPage.css';

class DesignAssignmentPage extends Component {
    
    render() { 
        return (
            <div className="gridContainer">
                <div className="classGrades">
                    <DesignAssignmentTable></DesignAssignmentTable>
                    <DesignGradeTable></DesignGradeTable>
                </div>
            </div>

        );
    }
};
 
export default DesignAssignmentPage;