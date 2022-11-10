import React, { Component } from 'react';
import WeekMod from './weekmod';
import ToDoList from './ToDoList';
import './modules.css';

class Modules extends Component {
    render() {
        const {modules} = this.props;

        return (
            <div class="gridContainer">
                <div class="modulesContainer">
                    {modules.map(module => (
                        <WeekMod
                            key={module.id}
                            module={module}
                        ></WeekMod>
                    ))}
                </div>
                <div className="toDoList">
                    <ToDoList></ToDoList>
                </div>
            </div> 
        )
    }
}

export default Modules;