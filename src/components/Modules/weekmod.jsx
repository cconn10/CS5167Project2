import React, { Component } from 'react';
import ModFile from './modfile';
import Announcement from './announcement';
import './weekmod.css';

class WeekMod extends Component {
    render() {
        const {module} = this.props;

        console.log(module);

        return (
            <div class="weekly-div">
                <h3><span>{module.name}</span></h3>
                <div class="list-header">
                    Announcements
                </div>
                {module.announcements.map((announcement, index) => (
                        <Announcement
                            key={index}
                            announcement={announcement}
                        ></Announcement>
                    ))}
                
                <div class="list-header">
                    Files
                </div>
                {module.files.map((file, index) => (
                    <ModFile
                        key={index}
                        file={file}
                    ></ModFile>
                ))}

                <div class="list-header">
                    Notes
                </div>
            </div>
        );
    }
}

export default WeekMod;