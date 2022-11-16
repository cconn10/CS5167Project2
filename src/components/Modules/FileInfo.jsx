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
        <div className="announcement-text">
          <div>{this.props.name}</div>
          <div className="reply">Reply:
            <input type="text" id="lname" name="lname"></input>
          
          {/* <button onClick={e => {this.onClose(e);}}>Close</button> */}
          <button>Post</button>
          </div>
        </div>
      );
  }
}