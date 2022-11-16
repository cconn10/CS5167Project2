import React, { Component } from 'react';
import './modfile.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';

import FileInfo from './FileInfo';

class ModFile extends Component {
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
                    <button type="button" class="btn btn-light" ><FontAwesomeIcon className='icon-asignment' icon={ faDownload } /></button>
                </div>
                {/* <FileInfo 
                    onClose={this.showModal} 
                    show={this.state.show}
                    name={file.name}
                ></FileInfo><br></br> */}
            </React.Fragment>
        );
    }
}

export default ModFile;