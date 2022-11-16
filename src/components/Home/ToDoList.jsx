import React, { Component } from 'react';

import Modal from '../Modal';

import './ToDoList.css'

class ToDoList extends Component {
    state = { 
        filterOption: "All Courses",
        subItems: {}
    }

    getId = name => name.toLowerCase().split("").join("-")

    listItems(items, courseName) {
        return (
            <div>
                { items.map((item, index) => (
                    <div key={index}>
                        <li className="list-group-item">
                            <div className='row h6'>
                                {item.title}
                            </div>
                            <div className='row-2 mb-1'>
                                <span className={'badge ' + this.getCourseColor(courseName)}>{ courseName }</span>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    Due Date: {item.end_or_due}
                                </div>
                                <div className='col'>
                                    <button className='btn btn-primary detailsButton' data-bs-toggle="modal" data-bs-target='#modal'>
                                        Details
                                    </button>
                                </div>
                            </div>
                        </li>
                        <div className="modal" id="modal" tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <div className='col'>
                                        <div className='row'>
                                            <h5 className="modal-title">{item.title}</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className='row'>
                                            <p className='h6'>Due Date: {item.end_or_due}</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-body">
                                        <p className='h5'>Goal Tracking</p>
                                        <ul className='form-check list-unstyled'>
                                            <li>
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label className="form-check-label">
                                                    Goal #1
                                                </label>
                                                <ul>
                                                    <li>
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <label className="form-check-label">
                                                            Subgoal #1
                                                        </label>
                                                    </li>
                                                    <li>
                                                        <input className="form-check-input" type="checkbox" value="" />
                                                        <label className="form-check-label">
                                                            Subgoal #2
                                                        </label>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li>
                                                <input className="form-check-input" type="checkbox" value="" />
                                                <label className="form-check-label">
                                                    Goal #2
                                                </label>
                                            </li>
                                            <li>
                                                <input className="form-check-input" type="checkbox" value=""/>
                                                <label className="form-check-label">
                                                    Goal #3
                                                </label>
                                            </li>
                                            <li>
                                                <input className="form-check-input" type="checkbox" value=""/>
                                                <label className="form-check-label">
                                                    Goal #4
                                                </label>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }

    getCourseColor(name){
        switch(name){
            case "User Interface":
                return "bg-info"
            case "Senior Design":
                return "bg-success"
            case "Computer Graphics":
                return "bg-warning"
            default:
                return "bg-primary"
        }
    }

    renderLists(e){
        this.setState({filterOption: e.target.value})
    }

    render() { 
        const courseInfo = this.props.courseInfo
        const uiItems = this.props.uiToDoItems
        const seniorDesignItems = this.props.seniorDesignToDoItems
        const graphicsItems = this.props.computerGraphicsToDoItems
        let listItems = <div></div>

        if(this.state.filterOption === "User Interface")
            listItems = this.listItems(uiItems, "User Interface")
        else if (this.state.filterOption === "Senior Design")
            listItems = this.listItems(seniorDesignItems, "Senior Design")
        else if (this.state.filterOption === "Computer Graphics")
            listItems = this.listItems(graphicsItems, "Computer Graphics")
        else
            listItems = <div>
                { this.listItems(uiItems, "User Interface") }
                { this.listItems(seniorDesignItems, "Senior Design") }
                { this.listItems(graphicsItems, "Computer Graphics") }
            </div>

        this.renderLists = this.renderLists.bind(this);
        
        return (
            <React.Fragment>
                <div className='container border rounded toDoList'>
                    <div className='row'>
                        <div className='col'>
                            <h3>To Do List</h3>
                        </div>
                        <div className='col'>
                            <select className="form-select" defaultValue={this.state.filterOption} onChange={this.renderLists} aria-label="Default select example">
                                <option value={"All Courses"}>All Courses</option>
                                { courseInfo.courses.map(course => (
                                    <option key={course.name} value={course.name}>{ course.name }</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    <ul className='list-group list-group-flush toDoListItems'>
                        { listItems }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ToDoList;