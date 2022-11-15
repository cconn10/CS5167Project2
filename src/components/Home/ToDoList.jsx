import React, { Component } from 'react';
import './ToDoList.css'

class ToDoList extends Component {
    state = { 
        filterOption: "All Courses",
     } 

    filterToDo() {

    }

    getId = name => name.toLowerCase().split("").join("-")

    render() { 
        const courseInfo = this.props.courseInfo
        const toDoItems = this.props.toDoItems

        return (
            <React.Fragment>
                <div className='container border rounded toDoList'>
                    <div className='row'>
                        <div className='col'>
                            <h3>To Do List</h3>
                        </div>
                        <div className='col'>
                            <select className="form-select" defaultValue={this.state.filterOption} onChange={this.filterToDo()} aria-label="Default select example">
                                <option value={"All Courses"}>All Courses</option>
                                { courseInfo.courses.map(course => (
                                    <option key={course.name} value={course.name}>{ course.name }</option>
                                ))}
                            </select>
                        </div>
                    </div>
                    { toDoItems.map((item, index) => (
                        <h6 className="header" key={index}>{ item.title }</h6>
                    ))}
                </div>
            </React.Fragment>
        );
    }
}
 
export default ToDoList;