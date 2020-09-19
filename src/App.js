import React from 'react';
import './App.css';
import Base from './components/base/base';
import Menu from './components/menu/menu';
import Show from "./components/show/show";
import { BrowserRouter as Router } from 'react-router-dom'

class App extends React.Component {
  constructor(progs) {
    super(progs);


    this.darkcontent = React.createRef();
    this.darkbg = React.createRef()
  }

  render() {
    return (
      <div className="App">
        <div className="context content__mode" ref={this.darkcontent}>
          <Router>
            <Menu />
            <div id="main" className="content">
              <Base mode={this.darkcontent} bg={this.darkbg}/>
              <Show />
            </div>
          </Router>
        </div>
        <div className="area" ref={this.darkbg}>
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
}

export default App;
