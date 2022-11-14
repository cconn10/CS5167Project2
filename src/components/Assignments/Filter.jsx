import React, { Component } from 'react';

class Filter extends Component {
    state = {
        uiGrade: 100,
        graphicsGrade: 100,
        designGrade: 100

      } 
    render() { 
        return (
            <React.Fragment>
                <div className='container border rounded filter'>
                <label>
                <input type="checkbox"/>
                Class 1

                </label>
                <label>
                <input type="checkbox"/>
                Class 2

                </label>
                <label>
                <input type="checkbox"/>
                <p>Class 3</p>
                {this.state.uiGrade}
                <p>%</p>

                </label>
                    <h3>Filter and Sort</h3>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Filter;