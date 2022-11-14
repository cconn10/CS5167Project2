import React, { Component } from 'react';
import Grades from './Grades';
import Filter from './Filter';
import './AssignmentPage.css';
//import data from './data/metadata.json';

class AssignmentPage extends Component {
    state = {
        
    };


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

    /*getUIGradesData (){
        var UIassignments = data.ui.filter( element => element.type === "assignment");
        var UIgrades;

        var date = new Date();
        for (let i = 0; i < UIassignments.ui.length; i++) {
            const element = UIassignments.ui[i];
            const due = new Date(element.end_or_due);
            
            if(due.getTime() < date.getTime()){
                UIgrades = UIgrades + UIassignments.UI;
            }
        }

        return  UIgrades;

    }; */
};
 
export default AssignmentPage;