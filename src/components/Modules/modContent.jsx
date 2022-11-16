import React, { Component } from 'react';
import './modContent.css';
import Announcement from './announcement';
import ModFile from './modfile';

class ModContent extends Component {
    formatContent = (module) => {
        console.log(module);
        
        const files = [...new Set(module.filter(item => (item.folder === "presentations" || item.folder === "pages" || item.folder === "course_info")))]
        const dates = [...new Set(files.map(item => item.start_or_posted))];
        const formattedContent = {
            announcements: [
                {
                    title: "Sample Announcement 1", 
                    start_or_posted: dates[0],
                    type: "announcement",
                    announcement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                },
                {
                    title: "Sample Announcement 2", 
                    start_or_posted: dates[0],
                    type: "announcement",
                    announcement: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                }
            ],
            files: [...new Set(module.filter(item => (item.folder === "presentations" || item.folder === "pages" || item.folder === "course_info")))]
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
                    <ModFile
                        key={index}
                        file={announcement}
                    ></ModFile>
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