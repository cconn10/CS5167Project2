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

        console.log(toDoItems);

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
                    <div className="accordion accordion-flush" id="accordion">
                        { toDoItems.map((item, index) => (
                            <div key={index} class="accordion-item">
                                <h2 class="accordion-header" id="flush-headingOne">
                                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
                                    Accordion Item #1
                                </button>
                                </h2>
                                <div id="flush-collapseOne" class="accordion-collapse collapse show" aria-labelledby="flush-headingOne" data-bs-parent="#accordionFlushExample">
                                <div class="accordion-body">Placeholder content for this accordion, which is intended to demonstrate the <code>.accordion-flush</code> class. This is the first item's accordion body.</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ToDoList;