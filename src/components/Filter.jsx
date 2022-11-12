import React, { Component } from 'react';

class Filter extends Component {
    state = {  } 
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
                Class 3

                </label>
                    <h3>Filter and Sort</h3>
                </div>
            </React.Fragment>
        );
    }
}
 
export default Filter;