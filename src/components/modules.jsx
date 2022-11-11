import React, { Component } from 'react';
import WeekMod from './weekmod';
import ToDoList from './ToDoList';
import './modules.css';

import data from '../course-data/data.json';

class Modules extends Component {
    componentDidMount() {
        console.log(data);
        console.log(data.ui);
    }

    render() {
        const {modules} = this.props;

        return (
            <div class="gridContainer">
                {/* <div class="courseView"> */}
                    <div class="courseTitle">Courses:</div>
                    <div class="courseCheck"><input type="checkbox" id="checkbox-ui" name="ui" value="ui" />User Interfaces</div>
                    <div class="courseCheck"><input type="checkbox" id="checkbox-cg" name="computer_graphics" value="computer_graphics" />Computer Graphics</div>
                    <div class="courseCheck"><input type="checkbox" id="checkbox-sd" name="senior_design" value="senior_design" />Senior Design</div>
                {/* </div> */}
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