import { BrowserRouter, Routes, Route} from "react-router-dom";

import React, {Component} from 'react';
import './App.css';
import './scss/custom.scss'

import Navbar from './components/NavBar/Navbar';
import HomePage from './components/Home/HomePage';
import AssignmentPage from "./components/Assignments/AssignmentPage";

class App extends Component {

  render() {

    return (
      <div className="App">
        <Navbar></Navbar>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />}></Route>
            <Route path="/Assignments" element={<AssignmentPage />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
