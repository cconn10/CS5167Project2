import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBook, faClipboard, faHouse} from '@fortawesome/free-solid-svg-icons';
import { faCalendar } from '@fortawesome/free-regular-svg-icons';
import './Navbar.css'

class Navbar extends Component {
    state = {  } 
    render() { 
        return (
        <React.Fragment>
            <nav className="navbar nav bg-primary d-flex flex-row justify-content-start">
                <a className='nav-link' href="#" data-toggle="tooltip" data-bs-placement="bottom" title="Profile" >
                    <FontAwesomeIcon className='icon mx-2' icon={ faCircleUser } />
                </a>
                <a className='nav-link' href="/" data-toggle="tooltip" data-bs-placement="bottom" title="Profile" >
                    <FontAwesomeIcon className='icon mx-2' icon={ faHouse } />
                </a>
                <a className='nav-link' href="courses" data-toggle="tooltip" data-bs-placement="bottom" title="Courses" >
                    <FontAwesomeIcon className='icon mx-2' icon={ faBook } />
                </a>
                <a className='nav-link' href="#" data-toggle="tooltip" data-bs-placement="bottom" title="Grades" >
                    <FontAwesomeIcon className='icon mx-2' icon={ faClipboard } />
                </a>
                <a className='nav-link' href="#" data-toggle="tooltip" data-bs-placement="bottom" title="Calendar" >
                    <FontAwesomeIcon className='icon mx-2' icon={ faCalendar }/>
                </a>
            </nav>
        </React.Fragment>);
    }
}
 
export default Navbar;