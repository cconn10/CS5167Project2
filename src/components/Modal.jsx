import React, {Component} from "react";

export default class Modal extends Component {
  onClose = e => {
    this.props.show = false;
    console.log("In onClose");
  };

  render() {
      if(!this.props.show){
          return null;
      }
      return (
        <div>
          <div>{this.props.children}</div>
          <div>
            <button
              onClose={e => {
                this.props.onClose && this.props.onClose(e);
              }}
            >
              Close
            </button>
          </div>
        </div>
      );
  }
}