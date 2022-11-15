import React, { Component } from 'react';
import WeekMod from './weekmod';
import ToDoList from '../Home/ToDoList';
import './modules.css';
import Accordion from './Accordion';

import data from '../../data/metadata.json';


class Modules extends Component {
    
    componentDidMount() {
        console.log(data);
        console.log(data.ui);
    }

    organizeData = (data) => {
        console.log("Mapped Data")
        //const groupedData = data.ui.groupBy(item => {return item.module;})
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
        const modules = [{key: "ui", title: "User Interfaces", content: this.organizeData(data.ui)}, 
            {key: "cg", title: "Computer Graphics", content: this.organizeData(data.computer_graphics)},
            {key: "sd", title: "Senior Design", content: this.organizeData(data.senior_design)}];
        console.log(modules)

        return (
            <div class="gridContainer">
                {/* <div class="courseView"> */}
                    <div class="courseTitle">Courses:</div>
                    <div class="courseCheck"><input type="checkbox" id="checkbox-ui" name="ui" value="ui" />User Interfaces</div>
                    <div class="courseCheck"><input type="checkbox" id="checkbox-cg" name="computer_graphics" value="computer_graphics" />Computer Graphics</div>
                    <div class="courseCheck"><input type="checkbox" id="checkbox-sd" name="senior_design" value="senior_design" />Senior Design</div>
                {/* </div> */}
                <div class="modulesContainer">
                    <div className="accordion">
                        {modules.map(({ title, content }) => (
                        <Accordion title={title} content={content} />
                        ))}
                    </div>
                    {/* {modules.map(module => (
                        <WeekMod
                            key={module.id}
                            module={module}
                        ></WeekMod>
                    ))} */}
                </div>
                <div className="toDoList">
                    <ToDoList></ToDoList>
                </div>
            </div> 
        )
    }
}

export default Modules;