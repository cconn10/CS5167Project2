import { BrowserRouter, Routes, Route} from "react-router-dom";

import React, {Component} from 'react';
import './App.css';
import './scss/custom.scss'

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import Modules from './components/modules';

import myData from './course-data/data.json';

class App extends Component {
  state = {
    modules: [
      {id: 0, name: "Syllabus", announcements: ["Announcement 1"], files: ["syllabus.docx"], notes: []},
      {id: 1, name: "Week 1", announcements: ["Announcement 1"], files: ["lecture1.pptx", "assignment1.pdf"], notes: []},
      {id: 2, name: "Week 2", announcements: ["Announcement 1"], files: ["lecture2.pptx", "assignment2.pdf"], notes: []},
    ]
  };

  componentDidMount() {
    console.log(myData);
  }

  render() {
    return (
      <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="courses" element={<Modules modules={this.state.modules}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
