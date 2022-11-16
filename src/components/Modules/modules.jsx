import React, { Component } from 'react';
import WeekMod from './weekmod';
import ToDoList from '../Home/ToDoList';
import './modules.css';
import WeekAccordion from './WeekAccordion';

import CourseInfo from '../../course-data/courseInfo.json'
import Data from '../../course-data/data.json';


class Modules extends Component {
    
    componentDidMount() {
        console.log(Data);
        console.log(Data.ui);
    }

    getToDoItems = () => [
        ...this.compileToDoItems(Data.ui), 
        ...this.compileToDoItems(Data.computer_graphics),
        ...this.compileToDoItems(Data.senior_design)
    ];


    compileToDoItems = data => data.filter(item => item.type === "assignment" && new Date(item.end_or_due) > new Date("9/11/22"));

    organizeData = (data) => {
        console.log("Mapped Data")
        const unique = [...new Set(data.map(item => item.module))];
        let mappedData = []
        unique.forEach(mod => {
            mappedData.push( {
                key: mod,
                title: 'Module ' + mod,
                content: [...new Set(data.filter(item => item.module === mod))]
            });
        });
        console.log(mappedData)
        return(mappedData)
    }


    render() {
        const modules = [{key: "ui", title: "User Interfaces", content: this.organizeData(Data.ui)}, 
            {key: "cg", title: "Computer Graphics", content: this.organizeData(Data.computer_graphics)},
            {key: "sd", title: "Senior Design", content: this.organizeData(Data.senior_design)}];
        console.log(modules)

        return (
            <div class="gridContainer">
                <div class="courseTitle">Courses:</div>
                <div class="modulesContainer">
                    <div className="accordion">
                        {modules.map(({ title, content }) => (
                        <WeekAccordion title={title} content={content} />
                        ))}
                    </div>
                </div>
                <div className="toDoList">
                    <ToDoList courseInfo={CourseInfo} toDoItems={this.getToDoItems()}></ToDoList>
                </div>
            </div> 
        )
    }
}

export default Modules;