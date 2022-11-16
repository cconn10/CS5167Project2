import React, { Component } from 'react';
import './modfile.css';

class ModFile extends Component {
    render() {
        const {file} = this.props;
        
        console.log(file);
        return (
            <p><span>{file.title}</span></p>
        );
    }
}

export default ModFile;