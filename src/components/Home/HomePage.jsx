import React, { Component } from 'react';

import './HomePage.css';

import ClassCardContainer from './ClassCardContainer';
import ToDoList from './ToDoList';
import BadgeDisplay from '../Badges/BadgeDisplay';

import CourseInfo from '../../course-data/courseInfo.json'

class HomePage extends Component {
    state = { 
     }

    render() { 
        return (
            <React.Fragment> 
                <div className="gridContainer">
                <div className="classCardContainer">
                    <ClassCardContainer courseInfo={CourseInfo}></ClassCardContainer>
                </div>
                <div className="toDoList">
                    <ToDoList></ToDoList>
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