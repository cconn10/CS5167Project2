import React, {Component} from "react";
import './fileinfo.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDownload, faUpload, faEye} from '@fortawesome/free-solid-svg-icons';

export default class FileInfo extends Component {
  onClose = e => {
    this.props.onClose && this.props.onClose(e);
  };

  render() {
      if(!this.props.show){
          return null;
      }
      return (
        <div>
          <div className="file-info-grid">
            {/* <div className="file-info-grid-item"> */}
              {this.props.name}
            {/* </div> */}
            {/* <div className="file-info-grid-item"> */}
                <button type="button" class="btn btn-light" ><FontAwesomeIcon className='icon-asignment' icon={ faDownload } /></button>
            {/* </div> */}
            {/* <div className="file-info-grid-item"> */}
              <button
                onClick={e => {
                  this.onClose(e);
                }}
              >
                Close
              </button>
            {/* </div> */}
          </div>
        </div>
      );
  }
}