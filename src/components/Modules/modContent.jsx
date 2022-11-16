import React, { Component } from 'react';
import './modContent.css';
import Announcement from './announcement';
import ModFile from './modfile';

class ModContent extends Component {
    formatContent = (module) => {
        console.log(module);
        const formattedContent = {
            announcements: ["Sample Announcement 1", "Sample Announcement 2"],
            files: [...new Set(module.filter(item => item.folder === "presentations" || "pages"))]
        };
        return (formattedContent);
    }

    render() {
        const {content} = this.props;
        console.log(content);
        const module = this.formatContent(content);

        console.log(module);
        return(
            <div class="weekly-div">
            {/* <h3><span>{module.name}</span></h3> */}
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

export default ModContent;