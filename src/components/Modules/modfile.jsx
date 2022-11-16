import React, { Component } from 'react';
import './modfile.css';
// import PopUp from './PopUp';
// import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';

import Modal from './Modal';



class ModFile extends Component {
    state = {
        seen: false
    };
    togglePop = () => {
    this.setState({
        seen: !this.state.seen
    });
    console.log(this.state.seen);
    };

    render() {
        const {file} = this.props;
        
        console.log(file);
        return (
            <div>
                <span>{file.title}</span>
                <button type="button" class="btn btn-light" ><FontAwesomeIcon className='icon-asignment' icon={ faDownload } /></button>
                {/* <Modal /> */}
                {/* <div className="btn" onClick={this.togglePop}>
                    <button>New User?</button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null} */}
            </div>
        );
    }
}

export default ModFile;