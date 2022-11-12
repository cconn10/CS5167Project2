import React, { Component } from 'react';

import './HomePage.css';

import ClassCardContainer from './ClassCardContainer';
import ToDoList from './ToDoList';
import BadgeDisplay from '../Badges/BadgeDisplay';

class HomePage extends Component {
    state = { 
     } 

    render() { 
        return (
            <React.Fragment>
                <div className="gridContainer">
                <div className="classCardContainer">
                    <ClassCardContainer></ClassCardContainer>
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