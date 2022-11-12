import React, { Component } from 'react';
import './ToDoList.css'

class ToDoList extends Component {
    state = {  } 
    render() { 
        return (
            <React.Fragment>
                <div className='container border rounded toDoList'>
                    <h3>To Do List</h3>
                </div>
            </React.Fragment>
        );
    }
}
 
export default ToDoList;