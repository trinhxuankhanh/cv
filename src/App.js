import React from 'react';
import './App.css';
import Base from './components/base/base';
import Menu from './components/menu/menu';
import Show from "./components/show/show";
import { BrowserRouter as Router } from 'react-router-dom'

function App() {

  return (
    <div className="App">
      <div className="context">
        <Router>
          <Menu />
          <div className="content">
            <Base />
            <Show />
          </div>
        </Router>
      </div>
      <div className="area" >
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div >
    </div>
  );
}

export default App;
