import React, { Component } from "react";
import './announcement.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faEye} from '@fortawesome/free-solid-svg-icons';
import FileInfo from './FileInfo';

class Announcement extends Component {
    state = {
        show: false
      };
    showModal = e => {
        this.setState({
          show: !this.state.show
        });
    };
    
    render() {
        const {file} = this.props;
        
        console.log(file);
        return (
            <React.Fragment>
                <div className="file-info-grid">
                    {/* <div className="file-info-grid-item"><button type="button" class="btn btn-light" onClick={e => {this.showModal();}}>{file.title}</button></div> */}
                    <div className="file-info-grid-item">{file.title}</div>
                    <div className="file-info-grid-item">Posted: <span>{file.start_or_posted}</span></div>
                    <button type="button" class="btn btn-light" onClick={e => {this.showModal();}}><FontAwesomeIcon className='icon-asignment' icon={ faEye } /></button>
                </div>
                <FileInfo 
                    onClose={this.showModal} 
                    show={this.state.show}
                    name={file.announcement}
                ></FileInfo><br></br>
            </React.Fragment>
        );
    }
}

export default Announcement;