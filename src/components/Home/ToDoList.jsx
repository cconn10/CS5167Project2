import React, { Component } from 'react';
import './ToDoList.css'

class ToDoList extends Component {
    state = { 
        filterOption: "All Courses",
     } 

    filterToDo() {

    }

    getId = name => name.toLowerCase().split("").join("-")

    listItems(items, courseName) {
        return (
            <div>
                { items.map((item, index) => (
                    <div key={index}>
                        <li className="list-group-item">
                            <div className='row h6'>
                                <div className='col-5 '>
                                    {item.title}
                                </div>
                                <div className='col'>
                                    <span className={'badge ' + this.getCourseColor(courseName)}>{ courseName }</span>
                                </div>
                            </div>
                            <div className='row'>
                                <div className='col'>
                                    Due Date: {item.end_or_due}
                                </div>
                                <div className='col'>
                                    
                                </div>
                            </div>
                        </li>
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
        var listItems = <div></div>

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
                    <ul className='list-group list-group-flush'>
                        { listItems }
                    </ul>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ToDoList;