import { BrowserRouter, Routes, Route} from "react-router-dom";

import React, {Component} from 'react';
import './App.css';
import './scss/custom.scss'

import HomePage from './components/HomePage';
import Navbar from './components/Navbar';

import myData from './course-data/data.json';

class App extends Component {
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
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
