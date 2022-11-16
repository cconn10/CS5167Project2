import React, { Component } from 'react';
import './modfile.css';
// import PopUp from './PopUp';
// import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faUpload} from '@fortawesome/free-solid-svg-icons';

import Modal from '../Modal';
import '../Home/ToDoList.css';



class ModFile extends Component {
    // state = {
    //     seen: false
    // };
    // togglePop = () => {
    // this.setState({
    //     seen: !this.state.seen
    // });
    // console.log(this.state.seen);
    // };
    state = {
        show: false
      };
    showModal = e => {
        this.setState({
          show: !this.state.show
        });
        console.log("state: ");
        console.log(this.state.show);
    };
    

    render() {
        const {file} = this.props;
        
        console.log(file);
        return (
            <React.Fragment>
                <span>{file.title}</span>
                <button type="button" class="btn btn-light" onClick={e => {this.showModal();}}><FontAwesomeIcon className='icon-asignment' icon={ faDownload } /></button>
                <Modal onClose={this.showModal} show={this.state.show}>
                        Message in Modal
                </Modal>
                {/* <div className="btn" onClick={this.togglePop}>
                    <button>New User?</button>
                </div>
                {this.state.seen ? <PopUp toggle={this.togglePop} /> : null} */}
                {/* <div className="modal" id="modal" tabIndex="-1">
                            <div className="modal-dialog modal-dialog-centered">
                                <div className="modal-content">
                                    <div className="modal-header">
                                    <div className='col'>
                                        <div className='row'>
                                            <h5 className="modal-title">Title</h5>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>
                                        <div className='row'>
                                            <p className='h6'>Due Date:</p>
                                        </div>
                                    </div>
                                    </div>
                                    <div className="modal-body">
                                    </div>
                                </div>
                            </div>
                </div> */}
                        
            </React.Fragment>
        );
    }
}

export default ModFile;