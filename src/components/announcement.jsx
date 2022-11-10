import React, { Component } from "react";
import './announcement.css';

class Announcement extends Component {
    render() {
        const {announcement} = this.props;
        return (
            <p><span>{announcement}</span></p>
        );
    }
}

export default Announcement;