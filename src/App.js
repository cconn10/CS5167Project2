import { BrowserRouter, Routes, Route} from "react-router-dom";

import React, {Component} from 'react';
import './App.css';
import './scss/custom.scss'

import Navbar from './components/NavBar/Navbar';
import HomePage from './components/Home/HomePage';
import AssignmentPage from "./components/Assignments/AssignmentPage";
import Modules from './components/Modules/modules';

import myData from './data/metadata.json';

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
            <Route path="/Assignments" element={<AssignmentPage />}></Route>
            <Route path="/Modules" element={<Modules modules={this.state.modules}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
