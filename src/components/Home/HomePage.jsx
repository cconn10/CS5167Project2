import React, { Component } from 'react';

import './HomePage.css';

import ClassCardContainer from './ClassCardContainer';
import ToDoList from './ToDoList';
import BadgeDisplay from '../Badges/BadgeDisplay';

import CourseInfo from '../../course-data/courseInfo.json'
import Data from '../../course-data/data.json'

class HomePage extends Component {
    state = { }

    compileToDoItems = data => data.filter(item => item.type === "assignment" && new Date(item.end_or_due) > new Date("9/11/22"));

    render() { 
        return (
            <React.Fragment> 
                <div className="gridContainer">
                <div className="classCardContainer">
                    <ClassCardContainer courseInfo={CourseInfo}></ClassCardContainer>
                </div>
                <div className="toDoList">
                    <ToDoList courseInfo={CourseInfo} 
                        uiToDoItems={this.compileToDoItems(Data.ui)} 
                        seniorDesignToDoItems={this.compileToDoItems(Data.senior_design)} 
                        computerGraphicsToDoItems={this.compileToDoItems(Data.computer_graphics)} ></ToDoList>
                </div>
                <div className="badgeDisplay">
                    <BadgeDisplay></BadgeDisplay>
                </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default HomePage;